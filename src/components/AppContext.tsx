import { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';
import { supabase } from '../lib/supabase-client';
import { Session } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from '../utils/supabase-info';
import { Alert } from 'react-native';
import { missionsService, feedbackService, weeklyReviewService, notificationPreferencesService, profileService } from '../services/supabase-services';

interface Mission {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  completed: boolean;
  date: string;
  feeling?: string;
  postFeeling?: string;
  location?: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  streak: number;
  totalMissions: number;
  joinDate: string;
}

interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  missions: Mission[];
  addMission: (mission: Mission) => Promise<void>;
  updateMission: (id: string, updates: Partial<Mission>) => Promise<void>;
  currentMission: Mission | null;
  setCurrentMission: (mission: Mission | null) => void;
  streak: number;
  incrementStreak: () => void;
  isAuthenticated: boolean;
  session: Session | null;
  accessToken: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ error: any }>;
  signup: (name: string, email: string, password: string) => Promise<{ error: any }>;
  logout: () => Promise<void>;
  updateProfile: (updates: { name?: string }) => Promise<{ error: any }>;
  submitFeedback: (type: string, message: string) => Promise<{ error: any }>;
  loadMissions: () => Promise<void>;
  testGenerateNewMission: () => Promise<void>; // For testing countdown/auto-refresh
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [missions, setMissions] = useState<Mission[]>([]);
  const [currentMission, setCurrentMission] = useState<Mission | null>(null);
  const [streak, setStreak] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check session on app start (Constlabourr style)
  const [isGeneratingMission, setIsGeneratingMission] = useState(false);
  const isGeneratingMissionRef = useRef(false);
  const isLoadingProfileRef = useRef(false);

  useEffect(() => {
    checkSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setSession(session);
        setAccessToken(session.access_token);
        if (session.access_token) {
          fetchUserProfile(session.access_token);
        }
        setIsAuthenticated(true);
      } else {
        // User logged out
        setSession(null);
        setAccessToken(null);
        setUser(null);
        setIsAuthenticated(false);
      }
    });

    // Auto-refresh missions at midnight to get new daily mission
    const checkForMidnight = () => {
      const now = new Date();
      if (now.getHours() === 0 && now.getMinutes() === 0 && user && accessToken) {
        console.log('🌙 Midnight reached! Refreshing missions...');
        generateDailyMission(accessToken);
        loadMissionsForUser(user.id);
      }
    };

    // Check every minute for midnight
    const midnightInterval = setInterval(checkForMidnight, 60000);

    return () => {
      subscription.unsubscribe();
      clearInterval(midnightInterval);
    };
  }, [user, accessToken]);

  const checkSession = async () => {
    console.log('🔍 Checking session...');
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) throw error;
      
      if (session?.access_token) {
        console.log('✅ Session found, fetching profile...');
        setSession(session);
        setAccessToken(session.access_token);
        await fetchUserProfile(session.access_token);
        setIsAuthenticated(true);
        console.log('✅ Profile fetch complete');
      } else {
        console.log('ℹ️ No active session');
      }
    } catch (error) {
      console.error('Session check error:', error);
    } finally {
      console.log('✅ Setting loading to false');
      setLoading(false);
    }
  };

  // Fetch user profile directly from Supabase (simplified, no Edge Function)
  const fetchUserProfile = async (token: string) => {
    // Prevent duplicate profile fetches
    if (isLoadingProfileRef.current) {
      console.log('⏭️ Profile already loading, skipping...');
      return;
    }

    isLoadingProfileRef.current = true;
    console.log('📥 Fetching user profile...');

    try {
      // Get user from auth
      const { data: { user: authUser }, error: userError } = await supabase.auth.getUser(token);
      
      if (userError || !authUser) {
        throw new Error('Failed to get auth user: ' + (userError?.message || 'Unknown error'));
      }
      
      console.log('✅ Auth user found:', authUser.id);
      
      // Fetch profile directly from Supabase
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', authUser.id)
        .single();
      
      if (profileError) {
        console.error('❌ Profile fetch failed:', profileError);
        throw profileError;
      }
      
      if (profileData) {
        console.log('✅ Profile data fetched successfully');
        const userProfile = {
          id: profileData.id,
          name: profileData.name || '',
          email: profileData.email || authUser.email || '',
          streak: profileData.streak || 0,
          totalMissions: profileData.total_missions || 0,
          joinDate: profileData.created_at?.split('T')[0] || new Date().toISOString().split('T')[0]
        };
        
        setUser(userProfile);
        setStreak(userProfile.streak);
        console.log('✅ User state set with streak:', userProfile.streak);
        
        // Get fresh session for Edge Function calls
        const { data: { session: freshSession } } = await supabase.auth.getSession();
        const freshToken = freshSession?.access_token;
        
        // Generate daily mission
        if (freshToken) {
          await generateDailyMission(freshToken);
          console.log('✅ Daily mission check complete');
        } else {
          console.warn('⚠️ No valid token available, skipping daily mission generation');
        }
        
        // Load all missions
        await loadMissionsForUser(userProfile.id);
        console.log('✅ Missions loaded');
      } else {
        throw new Error('No profile data found for user');
      }
    } catch (error: any) {
      console.error('❌ Error fetching user profile:', error.message || error);
      Alert.alert('Error', 'Failed to load your profile. Please try logging in again.');
    } finally {
      console.log('✅ Releasing profile lock');
      isLoadingProfileRef.current = false;
    }
  };

  // Load missions from Supabase (without generating daily mission)
  const loadMissionsForUser = async (userId: string) => {
    try {
      // Load all missions
      const { data, error } = await missionsService.getAllMissions();
      if (error) {
        console.error('Error loading missions:', error);
        return;
      }
      if (data) {
        setMissions(data as any);
        
        // If no missions exist, create the first mission for the user
        if (data.length === 0) {
          await createFirstMissionForUser(userId);
        }
      }
    } catch (error) {
      console.error('Error loading missions:', error);
    }
  };

  // Deprecated: use loadMissionsForUser instead
  const loadMissions = async () => {
    if (!user) return;
    await loadMissionsForUser(user.id);
  };

  // Create the first mission for new users (with explicit userId)
  const createFirstMissionForUser = async (userId: string) => {
    try {
      const today = new Date().toISOString().split('T')[0];
      
      const firstMission = {
        user_id: userId,
        title: 'Say hi to your neighbor',
        description: 'Make eye contact and greet someone in your building or neighborhood',
        category: 'Greetings',
        difficulty: 'easy' as const,
        completed: false,
        date: today,
      };

      const { data, error } = await missionsService.createMission(firstMission);
      
      if (error) {
        console.error('Error creating first mission:', error);
        return;
      }
      
      if (data) {
        setMissions([data as any]);
      }
    } catch (error) {
      console.error('Error creating first mission:', error);
    }
  };

  // Deprecated: use createFirstMissionForUser instead
  const createFirstMission = async () => {
    if (!user) return;
    await createFirstMissionForUser(user.id);
  };

  // Generate daily mission locally (no Edge Function needed)
  const generateDailyMission = async (token: string, testMode: boolean = false) => {
    // Prevent duplicate calls using ref (immediate, not async like state)
    if (isGeneratingMissionRef.current) {
      console.log('⏭️ Mission generation already in progress, skipping...');
      return;
    }

    isGeneratingMissionRef.current = true;
    setIsGeneratingMission(true);
    
    try {
      console.log(testMode ? '🧪 TEST: Generating test mission...' : '🎯 Checking daily mission...');
      
      if (!user) {
        console.log('⚠️ No user found, skipping mission generation');
        return { success: false, error: 'No user' };
      }

      const today = testMode 
        ? new Date(Date.now() + 86400000).toISOString().split('T')[0] // Tomorrow for testing
        : new Date().toISOString().split('T')[0];

      console.log(`📅 Checking for incomplete mission on date: ${today}`);

      // Check if user already has an INCOMPLETE mission for today
      const { data: incompleteMissions, error: checkError } = await supabase
        .from('missions')
        .select('*')
        .eq('user_id', user.id)
        .eq('date', today)
        .eq('completed', false)
        .limit(1);

      if (checkError) {
        console.error('❌ Error checking for existing mission:', checkError);
        return { success: false, error: checkError.message };
      }

      // If there's an incomplete mission, we're done
      if (incompleteMissions && incompleteMissions.length > 0) {
        console.log('✅ Incomplete mission already exists for today');
        return { 
          success: true, 
          message: 'Incomplete mission for today already exists',
          mission: incompleteMissions[0]
        };
      }

      // All missions for today are completed, create a new one
      console.log('✨ No incomplete mission for today, creating new one...');

      // Get user's completed missions count to determine difficulty
      const { data: completedMissions } = await supabase
        .from('missions')
        .select('completed')
        .eq('user_id', user.id)
        .eq('completed', true);

      const completedCount = completedMissions?.length || 0;
      console.log(`📊 User has completed ${completedCount} missions`);

      // Determine difficulty based on progress
      let difficulty = 'easy';
      if (completedCount >= 20) {
        difficulty = 'hard';
      } else if (completedCount >= 7) {
        difficulty = 'medium';
      }

      console.log(`🎯 Selected difficulty: ${difficulty}`);

      // Get random mission template
      const { data: templates } = await supabase
        .from('mission_templates')
        .select('*')
        .eq('difficulty', difficulty);

      let template;
      if (!templates || templates.length === 0) {
        console.log('⚠️ No templates found for difficulty, using any available');
        const { data: fallbackTemplates } = await supabase
          .from('mission_templates')
          .select('*');
        
        if (!fallbackTemplates || fallbackTemplates.length === 0) {
          console.error('❌ No mission templates available');
          return { success: false, error: 'No mission templates available' };
        }
        
        template = fallbackTemplates[Math.floor(Math.random() * fallbackTemplates.length)];
      } else {
        template = templates[Math.floor(Math.random() * templates.length)];
      }

      console.log(`✨ Creating mission from template: ${template.title}`);

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
        .single();

      if (createError) {
        console.error('❌ Error creating mission:', createError);
        return { success: false, error: createError.message };
      }

      console.log('✅ New mission created successfully');
      return { 
        success: true, 
        message: 'New mission created for today',
        mission: newMission
      };

    } catch (error: any) {
      console.error('❌ Exception generating daily mission:', error);
      return { success: false, error: error.message };
    } finally {
      isGeneratingMissionRef.current = false;
      setIsGeneratingMission(false);
    }
  };

  const addMission = async (mission: Mission) => {
    try {
      // Ensure user_id is set
      const missionWithUser = {
        ...mission,
        user_id: user?.id || (mission as any).user_id
      };
      
      const { data, error } = await missionsService.createMission(missionWithUser);
      if (error) {
        console.error('Error creating mission:', error);
        Alert.alert('Error', 'Failed to create mission');
        return;
      }
      if (data) {
        setMissions([data as any, ...missions]);
      }
    } catch (error) {
      console.error('Error adding mission:', error);
      Alert.alert('Error', 'Failed to add mission');
    }
  };

  const updateMission = async (id: string, updates: Partial<Mission>) => {
    try {
      const { data, error } = await missionsService.updateMission(id, updates);
      if (error) {
        console.error('Error updating mission:', error);
        return;
      }
      if (data) {
        setMissions(missions.map(m => m.id === id ? data as any : m));
        
        // If mission was completed, update streak, reload profile and generate new mission
        if (updates.completed) {
          if (accessToken && user) {
            console.log('✅ Mission marked as completed, starting post-completion flow...');
            
            // Wait a bit longer to ensure database commit
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Reload missions first to get updated list (with completed status)
            console.log('🔄 Reloading missions after completion...');
            await loadMissionsForUser(user.id);
            
            // Verify the mission is actually completed in the database
            const { data: verifyMissions } = await missionsService.getAllMissions();
            const completedMission = verifyMissions?.find((m: Mission) => m.id === id);
            console.log(`🔍 Verification: Mission ${id} completed status:`, completedMission?.completed);
            
            if (!completedMission?.completed) {
              console.warn('⚠️ Mission not marked as completed yet, retrying...');
              await new Promise(resolve => setTimeout(resolve, 1000));
              await loadMissionsForUser(user.id);
            }
            
            // Update streak based on updated missions
            console.log('🔥 Updating streak...');
            await incrementStreak();
            
            // Reload profile to get updated streak
            await fetchUserProfile(accessToken);
            
            // Generate new mission immediately after completion
            console.log('🎯 Mission completed! Generating new mission...');
            const missionResult = await generateDailyMission(accessToken, false); // false = create for today
            console.log('📦 Mission generation result:', missionResult);
            
            // Reload missions again to show the new one
            console.log('🔄 Reloading missions to show new mission...');
            await loadMissionsForUser(user.id);
            
            // Force state update to ensure UI refreshes
            const updatedMissions = await missionsService.getAllMissions();
            if (updatedMissions.data) {
              setMissions(updatedMissions.data as Mission[]);
              console.log(`✅ Loaded ${updatedMissions.data.length} missions`);
              
              // Log incomplete missions for today
              const today = new Date().toISOString().split('T')[0];
              const incompleteToday = updatedMissions.data.filter((m: Mission) => 
                m.date === today && !m.completed
              );
              console.log(`📋 Incomplete missions for today: ${incompleteToday.length}`, incompleteToday.map((m: Mission) => m.title));
            }
            
            console.log('✅ Post-completion flow complete');
          }
        }
      }
    } catch (error) {
      console.error('Error updating mission:', error);
    }
  };

  const incrementStreak = async () => {
    if (!user || !accessToken) return;
    
    try {
      // Fetch fresh missions from database to ensure we have latest data
      const { data: freshMissions } = await missionsService.getAllMissions();
      const missionsToUse = freshMissions || missions;
      
      // Calculate streak based on consecutive completed missions
      const completedMissions = missionsToUse.filter((m: Mission) => m.completed).sort((a: Mission, b: Mission) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA; // Sort descending (most recent first)
      });

      let newStreak = 0;
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      // Count consecutive days with completed missions
      for (let i = 0; i < completedMissions.length; i++) {
        const missionDate = new Date(completedMissions[i].date);
        missionDate.setHours(0, 0, 0, 0);
        
        const expectedDate = new Date(today);
        expectedDate.setDate(today.getDate() - i);
        
        if (missionDate.getTime() === expectedDate.getTime()) {
          newStreak++;
        } else {
          break; // Streak broken
        }
      }

      console.log(`🔥 Calculating streak: ${newStreak} days (from ${completedMissions.length} completed missions)`);

      // Update streak in database
      const { error } = await profileService.updateProfile({
        streak: newStreak,
        longest_streak: Math.max(user.streak || 0, newStreak),
        last_mission_date: new Date().toISOString().split('T')[0],
      });

      if (!error) {
        setStreak(newStreak);
        // Also update the user object to keep it in sync
        if (user) {
          setUser({
            ...user,
            streak: newStreak,
          });
        }
        console.log(`✅ Streak updated to ${newStreak}`);
      } else {
        console.error('Error updating streak:', error);
      }
    } catch (error: any) {
      console.error('Error incrementing streak:', error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('Login error details:', error);
        
        // Constlabourr-style specific error messages
        let errorMessage = error.message;
        if (errorMessage.includes('Invalid login credentials')) {
          errorMessage = 'Invalid email or password. Please check your credentials.';
        } else if (errorMessage.includes('Email not confirmed')) {
          errorMessage = 'Please verify your email address.';
        }
        
        return { error: new Error(errorMessage) };
      }

      if (data.session?.access_token) {
        setSession(data.session);
        setAccessToken(data.session.access_token);
        await fetchUserProfile(data.session.access_token);
        setIsAuthenticated(true);
      }

      return { error: null };
    } catch (error: any) {
      console.error('Login error:', error);
      return { error };
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    console.log('🔍 DEBUG: Signup started', { name, email, projectId });
    // #region agent log
    fetch('http://127.0.0.1:7244/ingest/e1c80a63-9100-4962-80c1-98bd2bf7f71b',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'AppContext.tsx:signup:entry',message:'Signup started',data:{name,email,hasPassword:!!password,projectId,hasAnonKey:!!publicAnonKey},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    
    try {
      if (password.length < 6) {
        return { error: new Error('Password must be at least 6 characters long') };
      }

      const url = `https://${projectId}.supabase.co/functions/v1/humanping-auth/register`;
      console.log('🔍 DEBUG: Calling URL', url);
      
      // #region agent log
      fetch('http://127.0.0.1:7244/ingest/e1c80a63-9100-4962-80c1-98bd2bf7f71b',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'AppContext.tsx:signup:beforeFetch',message:'About to call Edge Function',data:{url,method:'POST'},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'E'})}).catch(()=>{});
      // #endregion

      // Use Edge Function for registration (Constlabourr style)
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({ email, password, name }),
      });

      console.log('🔍 DEBUG: Response received', { status: response.status, ok: response.ok });
      
      // #region agent log
      fetch('http://127.0.0.1:7244/ingest/e1c80a63-9100-4962-80c1-98bd2bf7f71b',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'AppContext.tsx:signup:afterFetch',message:'Edge Function responded',data:{status:response.status,ok:response.ok,statusText:response.statusText},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A,B'})}).catch(()=>{});
      // #endregion

      const data = await response.json();
      console.log('🔍 DEBUG: Response data', data);

      // #region agent log
      fetch('http://127.0.0.1:7244/ingest/e1c80a63-9100-4962-80c1-98bd2bf7f71b',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'AppContext.tsx:signup:responseData',message:'Response parsed',data:{responseData:data,ok:response.ok},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'B,F'})}).catch(()=>{});
      // #endregion

      if (!response.ok) {
        let errorMessage = data.error || 'Registration failed';
        console.log('🔍 DEBUG: Signup failed', { errorMessage, fullData: data });
        
        // #region agent log
        fetch('http://127.0.0.1:7244/ingest/e1c80a63-9100-4962-80c1-98bd2bf7f71b',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'AppContext.tsx:signup:notOk',message:'Signup failed - not ok',data:{status:response.status,error:errorMessage,fullData:data,details:data.details,code:data.code},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'B,C,D'})}).catch(()=>{});
        // #endregion
        
        if (errorMessage.includes('already registered')) {
          errorMessage = 'This email is already registered. Please login instead.';
        } else if (errorMessage.includes('invalid email')) {
          errorMessage = 'Please enter a valid email address.';
        }
        
        // Show more details if available
        if (data.details || data.code) {
          errorMessage += `\n\nDetails: ${data.details || ''}\nCode: ${data.code || ''}`;
        }
        
        return { error: new Error(errorMessage) };
      }

      console.log('🔍 DEBUG: Signup successful!');
      
      // #region agent log
      fetch('http://127.0.0.1:7244/ingest/e1c80a63-9100-4962-80c1-98bd2bf7f71b',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'AppContext.tsx:signup:success',message:'Signup successful',data:{userId:data.user?.id,dataKeys:Object.keys(data)},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'ALL'})}).catch(()=>{});
      // #endregion

      // Registration successful
      return { error: null };
    } catch (error: any) {
      console.error('🔍 DEBUG: Exception during signup', error);
      
      // #region agent log
      fetch('http://127.0.0.1:7244/ingest/e1c80a63-9100-4962-80c1-98bd2bf7f71b',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'AppContext.tsx:signup:catchError',message:'Exception during signup',data:{error:error.message,name:error.name,stack:error.stack?.substring(0,200)},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A'})}).catch(()=>{});
      // #endregion
      
      console.error('Registration error:', error);
      return { error };
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
    setAccessToken(null);
    setIsAuthenticated(false);
  };

  const updateProfile = async (updates: { name?: string }) => {
    if (!accessToken) {
      return { error: new Error('No user logged in') };
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/humanping-auth/profile`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
          },
          body: JSON.stringify(updates),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const data = await response.json();

      if (data.profile && user) {
        setUser({
          ...user,
          name: data.profile.name || user.name,
        });
      }

      return { error: null };
    } catch (error: any) {
      console.error('Update profile error:', error);
      return { error };
    }
  };

  const submitFeedback = async (type: string, message: string) => {
    try {
      if (!user) {
        console.error('❌ Cannot submit feedback: No user logged in');
        return { error: new Error('User must be logged in to submit feedback') };
      }
      
      console.log('📝 Submitting feedback:', { type, user_id: user.id, messageLength: message.length });
      
      const { data, error } = await feedbackService.submitFeedback({ 
        type, 
        message,
        user_id: user.id,
      });
      
      if (error) {
        console.error('❌ Error submitting feedback:', error);
        console.error('Error details:', {
          code: error.code,
          message: error.message,
          details: error.details,
          hint: error.hint,
        });
        return { error };
      }
      
      console.log('✅ Feedback submitted successfully:', data);
      return { error: null };
    } catch (error: any) {
      console.error('❌ Submit feedback exception:', error);
      return { error };
    }
  };

  // TEST FUNCTION: Manually trigger new mission generation (for testing countdown)
  const testGenerateNewMission = async () => {
    if (!accessToken || !user) {
      Alert.alert('Error', 'You must be logged in to test mission generation');
      return;
    }

    try {
      console.log('🧪 TEST: Generating test mission for tomorrow...');
      
      // Step 1: Generate the mission with testMode flag (creates mission for tomorrow)
      await generateDailyMission(accessToken, true);
      
      // Step 2: Wait a moment for the database to update
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Step 3: Force reload missions
      console.log('🧪 TEST: Reloading missions...');
      const { data, error } = await missionsService.getAllMissions();
      
      if (error) {
        console.error('Error reloading missions:', error);
        Alert.alert('Error', 'Failed to reload missions');
        return;
      }
      
      if (data) {
        console.log('🧪 TEST: Missions reloaded, count:', data.length);
        setMissions(data as any); // Force state update
        
        const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
        const tomorrowsMission = data.find((m: any) => m.date === tomorrow);
        
        if (tomorrowsMission) {
          Alert.alert(
            'Success!', 
            `Test mission created for tomorrow!\n\nTitle: ${tomorrowsMission.title}\n\nYou can now test the countdown by completing today's mission.`
          );
        } else {
          Alert.alert('Success', `Missions reloaded! Total: ${data.length}`);
        }
      }
    } catch (error) {
      console.error('Test mission generation error:', error);
      Alert.alert('Error', 'Failed to generate test mission');
    }
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        missions,
        addMission,
        updateMission,
        currentMission,
        setCurrentMission,
        streak,
        incrementStreak,
        isAuthenticated,
        session,
        accessToken,
        loading,
        login,
        signup,
        logout,
        updateProfile,
        submitFeedback,
        loadMissions,
        testGenerateNewMission,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}
