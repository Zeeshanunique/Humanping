// Supabase Edge Function: Generate Daily Mission
// This function checks if a user needs a new mission for today and creates one

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    console.log('🚀 generate-daily-mission invoked')

    // Create Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Get user from auth header
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      console.log('❌ No auth header')
      return new Response(
        JSON.stringify({ error: 'Missing authorization header' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const token = authHeader.replace('Bearer ', '')
    const { data: { user }, error: userError } = await supabase.auth.getUser(token)

    if (userError || !user) {
      console.log('❌ Auth failed:', userError?.message)
      return new Response(
        JSON.stringify({ error: 'Invalid or expired token' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log('✅ User authenticated:', user.id)

    // Check for test mode flag
    const bodyText = await req.text()
    let testMode = false
    try {
      if (bodyText) {
        const body = JSON.parse(bodyText)
        testMode = body.testMode || false
      }
    } catch (e) {
      console.log('No body or invalid JSON, using default testMode=false')
    }

    const today = testMode 
      ? new Date(Date.now() + 86400000).toISOString().split('T')[0] // Tomorrow for testing
      : new Date().toISOString().split('T')[0]

    console.log(`📅 Checking for mission on date: ${today} (testMode: ${testMode})`)

    // Check if user already has a mission for today
    const { data: existingMission, error: checkError } = await supabase
      .from('missions')
      .select('*')
      .eq('user_id', user.id)
      .eq('date', today)
      .maybeSingle()

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Error checking for existing mission:', checkError)
      return new Response(
        JSON.stringify({ error: 'Failed to check for existing mission' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (existingMission) {
      console.log('✅ Mission already exists for today')
      return new Response(
        JSON.stringify({ 
          message: 'Mission for today already exists',
          mission: existingMission
        }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Get user's completed missions count to determine difficulty
    const { data: missions } = await supabase
      .from('missions')
      .select('completed')
      .eq('user_id', user.id)
      .eq('completed', true)

    const completedCount = missions?.length || 0
    console.log(`📊 User has completed ${completedCount} missions`)

    // Determine difficulty based on progress
    let difficulty = 'easy'
    if (completedCount >= 20) {
      difficulty = 'hard'
    } else if (completedCount >= 7) {
      difficulty = 'medium'
    }

    console.log(`🎯 Selected difficulty: ${difficulty}`)

    // Get a random mission template of appropriate difficulty
    const { data: templates } = await supabase
      .from('mission_templates')
      .select('*')
      .eq('difficulty', difficulty)

    if (!templates || templates.length === 0) {
      console.log('⚠️ No templates found for difficulty, using fallback')
      // Fallback to any difficulty if none found
      const { data: fallbackTemplates } = await supabase
        .from('mission_templates')
        .select('*')
      
      if (!fallbackTemplates || fallbackTemplates.length === 0) {
        console.error('❌ No mission templates available at all')
        return new Response(
          JSON.stringify({ error: 'No mission templates available' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }
      
      const randomIndex = Math.floor(Math.random() * fallbackTemplates.length)
      const template = fallbackTemplates[randomIndex]
      
      console.log(`✨ Creating mission from fallback template: ${template.title}`)
      
      // Create mission from template
      const { data: newMission, error: createError } = await supabase
        .from('missions')
        .insert({
          user_id: user.id,
          title: template.title,
          description: template.description,
          category: template.category,
          difficulty: template.difficulty,
          location: template.location,
          completed: false,
          date: today,
        })
        .select()
        .single()

      if (createError) {
        console.error('❌ Error creating mission:', createError)
        return new Response(
          JSON.stringify({ error: 'Failed to create daily mission' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }

      console.log('✅ New mission created successfully')
      return new Response(
        JSON.stringify({ 
          message: 'New mission created for today',
          mission: newMission
        }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Select random template
    const randomIndex = Math.floor(Math.random() * templates.length)
    const template = templates[randomIndex]

    console.log(`✨ Creating mission from template: ${template.title}`)

    // Create mission from template
    const { data: newMission, error: createError } = await supabase
      .from('missions')
      .insert({
        user_id: user.id,
        title: template.title,
        description: template.description,
        category: template.category,
        difficulty: template.difficulty,
        location: template.location,
        completed: false,
        date: today,
      })
      .select()
      .single()

    if (createError) {
      console.error('❌ Error creating mission:', createError)
      return new Response(
        JSON.stringify({ error: 'Failed to create daily mission' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log('✅ New mission created successfully')
    return new Response(
      JSON.stringify({ 
        message: 'New mission created for today',
        mission: newMission
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('❌ Error:', error.message, error.stack)
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
