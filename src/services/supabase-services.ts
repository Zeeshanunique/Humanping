// HumanPing Supabase Services - All Features
import { supabase } from '../lib/supabase-client';

// =============================================================================
// MISSIONS SERVICE
// =============================================================================

export interface Mission {
  id: string;
  user_id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  completed: boolean;
  feeling?: string;
  post_feeling?: string;
  location?: string;
  date: string;
  completed_at?: string;
  created_at: string;
  updated_at: string;
}

export const missionsService = {
  // Get all missions for current user
  async getAllMissions() {
    const { data, error } = await supabase
      .from('missions')
      .select('*')
      .order('date', { ascending: false });
    
    return { data, error };
  },

  // Get missions by filter
  async getMissionsByFilter(filters: { completed?: boolean; date?: string }) {
    let query = supabase.from('missions').select('*');
    
    if (filters.completed !== undefined) {
      query = query.eq('completed', filters.completed);
    }
    
    if (filters.date) {
      query = query.eq('date', filters.date);
    }
    
    const { data, error } = await query.order('date', { ascending: false });
    return { data, error };
  },

  // Create a new mission
  async createMission(mission: Partial<Mission>) {
    const { data, error } = await supabase
      .from('missions')
      .insert(mission)
      .select()
      .single();
    
    return { data, error };
  },

  // Update a mission
  async updateMission(id: string, updates: Partial<Mission>) {
    const { data, error } = await supabase
      .from('missions')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    return { data, error };
  },

  // Complete a mission (triggers streak update)
  async completeMission(id: string, postFeeling?: string) {
    const { data, error } = await supabase
      .from('missions')
      .update({
        completed: true,
        post_feeling: postFeeling,
        completed_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();
    
    return { data, error };
  },

  // Delete a mission
  async deleteMission(id: string) {
    const { error } = await supabase
      .from('missions')
      .delete()
      .eq('id', id);
    
    return { error };
  },

  // Get mission history (completed missions)
  async getHistory(limit = 50) {
    const { data, error } = await supabase
      .from('missions')
      .select('*')
      .eq('completed', true)
      .order('completed_at', { ascending: false })
      .limit(limit);
    
    return { data, error };
  },
};

// =============================================================================
// FEEDBACK SERVICE
// =============================================================================

export interface Feedback {
  id: string;
  user_id: string;
  type: 'bug' | 'feature' | 'improvement' | 'other';
  message: string;
  created_at: string;
}

export const feedbackService = {
  // Submit feedback
  async submitFeedback(feedback: { type: string; message: string; user_id?: string }) {
    const { data, error } = await supabase
      .from('feedback')
      .insert({
        ...feedback,
        created_at: new Date().toISOString(),
      })
      .select()
      .single();
    
    return { data, error };
  },

  // Get user's feedback history
  async getFeedbackHistory() {
    const { data, error } = await supabase
      .from('feedback')
      .select('*')
      .order('created_at', { ascending: false });
    
    return { data, error };
  },
};

// =============================================================================
// WEEKLY REVIEW SERVICE
// =============================================================================

export interface WeeklyReview {
  id: string;
  user_id: string;
  week_start: string;
  week_end: string;
  total_missions: number;
  completed_missions: number;
  most_common_feeling?: string;
  reflection?: string;
  created_at: string;
}

export const weeklyReviewService = {
  // Create or update weekly review
  async saveWeeklyReview(review: Partial<WeeklyReview>) {
    const { data, error } = await supabase
      .from('weekly_reviews')
      .upsert(review, { onConflict: 'user_id,week_start' })
      .select()
      .single();
    
    return { data, error };
  },

  // Get weekly reviews
  async getWeeklyReviews(limit = 10) {
    const { data, error } = await supabase
      .from('weekly_reviews')
      .select('*')
      .order('week_start', { ascending: false })
      .limit(limit);
    
    return { data, error };
  },

  // Get specific week's review
  async getWeekReview(weekStart: string) {
    const { data, error } = await supabase
      .from('weekly_reviews')
      .select('*')
      .eq('week_start', weekStart)
      .single();
    
    return { data, error };
  },

  // Generate weekly stats
  async generateWeeklyStats(weekStart: string, weekEnd: string) {
    const { data: missions, error } = await supabase
      .from('missions')
      .select('*')
      .gte('date', weekStart)
      .lte('date', weekEnd);
    
    if (error || !missions) {
      return { data: null, error };
    }

    const totalMissions = missions.length;
    const completedMissions = missions.filter(m => m.completed).length;
    
    // Find most common feeling
    const feelings = missions
      .filter(m => m.feeling)
      .map(m => m.feeling);
    
    const mostCommonFeeling = feelings.length > 0
      ? feelings.sort((a, b) =>
          feelings.filter(f => f === a).length - feelings.filter(f => f === b).length
        ).pop()
      : undefined;

    return {
      data: {
        totalMissions,
        completedMissions,
        mostCommonFeeling,
      },
      error: null,
    };
  },
};

// =============================================================================
// NOTIFICATION PREFERENCES SERVICE
// =============================================================================

export interface NotificationPreferences {
  id: string;
  user_id: string;
  daily_reminder: boolean;
  reminder_time: string;
  push_enabled: boolean;
  email_enabled: boolean;
  streak_reminders: boolean;
  push_token?: string;
  created_at: string;
  updated_at: string;
}

export const notificationPreferencesService = {
  // Get user's notification preferences
  async getPreferences() {
    const { data, error } = await supabase
      .from('notification_preferences')
      .select('*')
      .single();
    
    return { data, error };
  },

  // Update notification preferences
  async updatePreferences(preferences: Partial<NotificationPreferences>) {
    const { data, error } = await supabase
      .from('notification_preferences')
      .upsert(preferences)
      .select()
      .single();
    
    return { data, error };
  },

  // Update push token
  async updatePushToken(token: string) {
    const { data, error } = await supabase
      .from('notification_preferences')
      .update({ push_token: token, updated_at: new Date().toISOString() })
      .select()
      .single();
    
    return { data, error };
  },
};

// =============================================================================
// PROFILE SERVICE (Extended)
// =============================================================================

export const profileService = {
  // Get user profile with streak info
  async getProfile() {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .single();
    
    return { data, error };
  },

  // Update profile
  async updateProfile(updates: any) {
    const { data, error } = await supabase
      .from('profiles')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .select()
      .single();
    
    return { data, error };
  },

  // Get streak info
  async getStreakInfo() {
    const { data, error } = await supabase
      .from('profiles')
      .select('streak, longest_streak, last_mission_date')
      .single();
    
    return { data, error };
  },
};

