/* Supabase configuration - reads from environment variables */

export const projectId = "wyhtmgqgslcznbeeqtpu"
export const publicAnonKey = process.env.EXPO_PUBLIC_SUPABASE_KEY || ""
export const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || `https://${projectId}.supabase.co`

