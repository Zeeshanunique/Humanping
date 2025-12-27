#!/bin/bash

# Deploy SQL to Supabase using psql
# This script will execute the complete RLS fix

echo "🚀 Deploying SQL to Supabase..."

# Read credentials from .env
source .env

# Project details
PROJECT_REF="wyhtmgqgslcznbeeqtpu"
DB_PASSWORD="${SUPABASE_DB_PASSWORD:-your_database_password}"

# Connection string
DB_URL="postgresql://postgres.${PROJECT_REF}:${DB_PASSWORD}@aws-0-us-east-1.pooler.supabase.com:5432/postgres"

echo "📝 Executing fix-rls-complete.sql..."

# Try with psql if available
if command -v psql &> /dev/null; then
    PGPASSWORD="${DB_PASSWORD}" psql "${DB_URL}" -f fix-rls-complete.sql
    if [ $? -eq 0 ]; then
        echo "✅ SQL executed successfully!"
    else
        echo "❌ Failed to execute SQL"
        echo ""
        echo "Please run the SQL manually in Supabase Dashboard:"
        echo "1. Go to: https://supabase.com/dashboard/project/${PROJECT_REF}/editor"
        echo "2. Click 'SQL Editor'"
        echo "3. Copy contents of fix-rls-complete.sql"
        echo "4. Paste and click 'Run'"
    fi
else
    echo "⚠️  psql not found"
    echo ""
    echo "Please run the SQL manually in Supabase Dashboard:"
    echo "1. Go to: https://supabase.com/dashboard/project/${PROJECT_REF}/editor"
    echo "2. Click 'SQL Editor'"
    echo "3. Copy contents of fix-rls-complete.sql"
    echo "4. Paste and click 'Run'"
fi

