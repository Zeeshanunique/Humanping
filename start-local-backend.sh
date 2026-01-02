#!/bin/bash
# Start Supabase local development
echo "🚀 Starting Supabase local backend..."
npx supabase start

echo ""
echo "✅ Supabase is running locally!"
echo "📊 Studio: http://localhost:54323"
echo "🔗 API URL: http://localhost:54321"
echo "🔑 Anon Key: Check the output above"
echo ""
echo "To serve Edge Functions locally:"
echo "npx supabase functions serve"
