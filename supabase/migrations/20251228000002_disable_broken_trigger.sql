-- Temporarily disable the problematic trigger that's breaking user signup
DROP TRIGGER IF EXISTS on_user_created_notification_prefs ON auth.users;

-- We'll re-enable it after fixing the schema properly

