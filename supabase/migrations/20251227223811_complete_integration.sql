-- Complete HumanPing Database Schema with All Features
-- Run this in Supabase SQL Editor

-- =============================================================================
-- 1. MISSIONS TABLE (Already exists, but let's ensure it's complete)
-- =============================================================================

-- Drop if exists and recreate
DROP TABLE IF EXISTS missions CASCADE;

CREATE TABLE missions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT,
  difficulty TEXT CHECK (difficulty IN ('easy', 'medium', 'hard')),
  completed BOOLEAN DEFAULT FALSE,
  feeling TEXT,  -- Pre-task feeling
  post_feeling TEXT,  -- Post-task feeling
  location TEXT,
  date DATE DEFAULT CURRENT_DATE,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================================================
-- 2. FEEDBACK TABLE
-- =============================================================================

CREATE TABLE IF NOT EXISTS feedback (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  type TEXT CHECK (type IN ('bug', 'feature', 'improvement', 'other')),
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================================================
-- 3. WEEKLY REVIEWS TABLE
-- =============================================================================

CREATE TABLE IF NOT EXISTS weekly_reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  week_start DATE NOT NULL,
  week_end DATE NOT NULL,
  total_missions INTEGER DEFAULT 0,
  completed_missions INTEGER DEFAULT 0,
  most_common_feeling TEXT,
  reflection TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, week_start)
);

-- =============================================================================
-- 4. NOTIFICATION PREFERENCES TABLE
-- =============================================================================

CREATE TABLE IF NOT EXISTS notification_preferences (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  daily_reminder BOOLEAN DEFAULT TRUE,
  reminder_time TIME DEFAULT '09:00:00',
  push_enabled BOOLEAN DEFAULT TRUE,
  email_enabled BOOLEAN DEFAULT FALSE,
  streak_reminders BOOLEAN DEFAULT TRUE,
  push_token TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================================================
-- 5. STREAK TRACKING (Ensure profiles columns exist)
-- =============================================================================

-- These columns should already exist from the profiles migration
-- But we add them here just in case for backwards compatibility
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_name = 'profiles' AND column_name = 'last_mission_date') THEN
    ALTER TABLE profiles ADD COLUMN last_mission_date DATE;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_name = 'profiles' AND column_name = 'longest_streak') THEN
    ALTER TABLE profiles ADD COLUMN longest_streak INTEGER DEFAULT 0;
  END IF;
END $$;

-- =============================================================================
-- 6. ENABLE ROW LEVEL SECURITY
-- =============================================================================

ALTER TABLE missions ENABLE ROW LEVEL SECURITY;
ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;
ALTER TABLE weekly_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE notification_preferences ENABLE ROW LEVEL SECURITY;

-- =============================================================================
-- 7. CREATE RLS POLICIES - MISSIONS
-- =============================================================================

DROP POLICY IF EXISTS "Users can view their own missions" ON missions;
DROP POLICY IF EXISTS "Users can insert their own missions" ON missions;
DROP POLICY IF EXISTS "Users can update their own missions" ON missions;
DROP POLICY IF EXISTS "Users can delete their own missions" ON missions;

CREATE POLICY "Users can view their own missions"
  ON missions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own missions"
  ON missions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own missions"
  ON missions FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own missions"
  ON missions FOR DELETE
  USING (auth.uid() = user_id);

-- =============================================================================
-- 8. CREATE RLS POLICIES - FEEDBACK
-- =============================================================================

CREATE POLICY "Users can view their own feedback"
  ON feedback FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own feedback"
  ON feedback FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- =============================================================================
-- 9. CREATE RLS POLICIES - WEEKLY REVIEWS
-- =============================================================================

CREATE POLICY "Users can view their own weekly reviews"
  ON weekly_reviews FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own weekly reviews"
  ON weekly_reviews FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own weekly reviews"
  ON weekly_reviews FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- =============================================================================
-- 10. CREATE RLS POLICIES - NOTIFICATION PREFERENCES
-- =============================================================================

CREATE POLICY "Users can view their own notification preferences"
  ON notification_preferences FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own notification preferences"
  ON notification_preferences FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own notification preferences"
  ON notification_preferences FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- =============================================================================
-- 11. CREATE INDEXES FOR PERFORMANCE
-- =============================================================================

CREATE INDEX IF NOT EXISTS idx_missions_user_id ON missions(user_id);
CREATE INDEX IF NOT EXISTS idx_missions_date ON missions(date);
CREATE INDEX IF NOT EXISTS idx_missions_completed ON missions(completed);
CREATE INDEX IF NOT EXISTS idx_missions_user_completed ON missions(user_id, completed);

CREATE INDEX IF NOT EXISTS idx_feedback_user_id ON feedback(user_id);
CREATE INDEX IF NOT EXISTS idx_feedback_created_at ON feedback(created_at);

CREATE INDEX IF NOT EXISTS idx_weekly_reviews_user_id ON weekly_reviews(user_id);
CREATE INDEX IF NOT EXISTS idx_weekly_reviews_week_start ON weekly_reviews(week_start);

CREATE INDEX IF NOT EXISTS idx_notification_preferences_user_id ON notification_preferences(user_id);

-- =============================================================================
-- 12. CREATE FUNCTIONS FOR AUTO-UPDATING
-- =============================================================================

-- Function to update streak when mission is completed
CREATE OR REPLACE FUNCTION update_streak_on_mission_complete()
RETURNS TRIGGER AS $$
BEGIN
  -- Only update if mission was just completed
  IF NEW.completed = TRUE AND (OLD.completed IS NULL OR OLD.completed = FALSE) THEN
    UPDATE profiles
    SET 
      total_missions = total_missions + 1,
      last_mission_date = CURRENT_DATE,
      streak = CASE
        -- If completed yesterday or today, increment streak
        WHEN last_mission_date >= CURRENT_DATE - INTERVAL '1 day' THEN streak + 1
        -- Otherwise reset to 1
        ELSE 1
      END,
      longest_streak = CASE
        WHEN streak + 1 > longest_streak THEN streak + 1
        ELSE longest_streak
      END,
      updated_at = NOW()
    WHERE id = NEW.user_id;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for streak updates
DROP TRIGGER IF EXISTS on_mission_completed ON missions;
CREATE TRIGGER on_mission_completed
  AFTER UPDATE ON missions
  FOR EACH ROW
  EXECUTE FUNCTION update_streak_on_mission_complete();

-- Function to auto-create notification preferences
CREATE OR REPLACE FUNCTION create_notification_preferences_for_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO notification_preferences (user_id)
  VALUES (NEW.id)
  ON CONFLICT (user_id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create notification preferences
DROP TRIGGER IF EXISTS on_user_created_notification_prefs ON auth.users;
CREATE TRIGGER on_user_created_notification_prefs
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION create_notification_preferences_for_new_user();

-- =============================================================================
-- 13. GRANT PERMISSIONS
-- =============================================================================

GRANT USAGE ON SCHEMA public TO postgres, anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA public TO postgres, anon, authenticated, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO postgres, anon, authenticated, service_role;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA public TO postgres, anon, authenticated, service_role;

-- =============================================================================
-- VERIFICATION
-- =============================================================================

-- Verify all tables exist
SELECT schemaname, tablename 
FROM pg_tables 
WHERE tablename IN ('profiles', 'missions', 'feedback', 'weekly_reviews', 'notification_preferences')
ORDER BY tablename;

-- Verify all policies
SELECT schemaname, tablename, policyname 
FROM pg_policies 
WHERE tablename IN ('profiles', 'missions', 'feedback', 'weekly_reviews', 'notification_preferences')
ORDER BY tablename, policyname;

