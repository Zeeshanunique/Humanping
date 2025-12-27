-- Check all tables
SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY table_name;

-- Check profiles table structure
\d profiles;

-- Check profiles table RLS policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies 
WHERE tablename = 'profiles';

-- Count profiles
SELECT COUNT(*) as profile_count FROM profiles;

