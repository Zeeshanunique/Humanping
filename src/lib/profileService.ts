import { supabase } from '../lib/supabase';

export const updateUserProfile = async (userId: string, updates: {
  name?: string;
  email?: string;
  streak?: number;
  total_missions?: number;
}) => {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single();

  return { data, error };
};

export const getUserProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  return { data, error };
};

export const incrementUserStreak = async (userId: string) => {
  const { data: profile } = await getUserProfile(userId);
  
  if (profile) {
    return updateUserProfile(userId, {
      streak: (profile.streak || 0) + 1,
    });
  }
  
  return { data: null, error: new Error('Profile not found') };
};

export const incrementTotalMissions = async (userId: string) => {
  const { data: profile } = await getUserProfile(userId);
  
  if (profile) {
    return updateUserProfile(userId, {
      total_missions: (profile.total_missions || 0) + 1,
    });
  }
  
  return { data: null, error: new Error('Profile not found') };
};

