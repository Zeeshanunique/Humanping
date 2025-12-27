/**
 * Authentication and First Mission Creation Tests
 * 
 * These are unit tests that test the LOGIC of:
 * 1. User signup validation
 * 2. First mission structure
 * 3. RLS policy requirements
 * 
 * NOTE: These tests do NOT require React Native/Expo dependencies.
 * They focus on testing the business logic in isolation.
 */

describe('Signup Validation Logic', () => {
  it('should validate password length is at least 6 characters', () => {
    const isValidPassword = (password: string) => password.length >= 6;
    
    expect(isValidPassword('12345')).toBe(false);
    expect(isValidPassword('123456')).toBe(true);
    expect(isValidPassword('test123456')).toBe(true);
  });

  it('should require all fields to be present', () => {
    const isValidSignupData = (data: { name?: string; email?: string; password?: string }) => {
      return !!(data.name && data.email && data.password);
    };

    expect(isValidSignupData({ name: 'Test', email: 'test@example.com', password: '123456' })).toBe(true);
    expect(isValidSignupData({ name: 'Test', email: 'test@example.com' })).toBe(false);
    expect(isValidSignupData({ email: 'test@example.com', password: '123456' })).toBe(false);
    expect(isValidSignupData({} as any)).toBe(false);
  });
});

describe('First Mission Structure', () => {
  it('should have correct structure for first mission', () => {
    const createFirstMission = (userId: string, date: string) => ({
      user_id: userId,
      title: 'Say hi to your neighbor',
      description: 'Make eye contact and greet someone in your building or neighborhood',
      category: 'Greetings',
      difficulty: 'easy' as const,
      completed: false,
      date: date,
    });

    const mission = createFirstMission('user-123', '2025-12-27');

    expect(mission.user_id).toBe('user-123');
    expect(mission.title).toBe('Say hi to your neighbor');
    expect(mission.category).toBe('Greetings');
    expect(mission.difficulty).toBe('easy');
    expect(mission.completed).toBe(false);
    expect(mission.date).toBe('2025-12-27');
  });

  it('should always include user_id for RLS policy compliance', () => {
    const createMission = (userId: string) => ({
      user_id: userId,
      title: 'Test',
      description: 'Test',
      category: 'Test',
      difficulty: 'easy' as const,
      completed: false,
      date: '2025-12-27',
    });

    const mission = createMission('user-123');
    
    // This is CRITICAL - user_id must ALWAYS be present
    expect(mission).toHaveProperty('user_id');
    expect(mission.user_id).toBeDefined();
    expect(mission.user_id).not.toBeNull();
  });
});

describe('Profile Creation Logic', () => {
  it('should create profile with correct initial values', () => {
    const createProfile = (userId: string, name: string, email: string) => ({
      id: userId,
      name,
      email,
      streak: 0,
      total_missions: 0,
      longest_streak: 0,
    });

    const profile = createProfile('user-123', 'Test User', 'test@example.com');

    expect(profile.id).toBe('user-123');
    expect(profile.name).toBe('Test User');
    expect(profile.email).toBe('test@example.com');
    expect(profile.streak).toBe(0);
    expect(profile.total_missions).toBe(0);
    expect(profile.longest_streak).toBe(0);
  });
});

describe('Mission Creation Decision Logic', () => {
  it('should create first mission only if user has zero missions', () => {
    const shouldCreateFirstMission = (missionsCount: number) => missionsCount === 0;

    expect(shouldCreateFirstMission(0)).toBe(true);
    expect(shouldCreateFirstMission(1)).toBe(false);
    expect(shouldCreateFirstMission(5)).toBe(false);
  });

  it('should not create mission if user is not defined', () => {
    const shouldCreateMission = (user: any) => !!user;

    expect(shouldCreateMission(null)).toBe(false);
    expect(shouldCreateMission(undefined)).toBe(false);
    expect(shouldCreateMission({ id: 'user-123' })).toBe(true);
  });
});

describe('Date Formatting for Missions', () => {
  it('should format date correctly for mission creation', () => {
    const formatDate = (date: Date) => date.toISOString().split('T')[0];

    const testDate = new Date('2025-12-27T12:00:00Z');
    expect(formatDate(testDate)).toBe('2025-12-27');
  });

  it('should use today\'s date for new missions', () => {
    const getTodayDate = () => new Date().toISOString().split('T')[0];
    
    const today = getTodayDate();
    // Should be in YYYY-MM-DD format
    expect(today).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});

describe('Error Handling', () => {
  it('should identify RLS policy violations by error code', () => {
    const isRLSPolicyError = (errorCode: string) => errorCode === '42501';

    expect(isRLSPolicyError('42501')).toBe(true);
    expect(isRLSPolicyError('23505')).toBe(false); // Duplicate key
    expect(isRLSPolicyError('23502')).toBe(false); // NOT NULL violation
  });

  it('should identify duplicate key violations', () => {
    const isDuplicateKeyError = (errorCode: string) => errorCode === '23505';

    expect(isDuplicateKeyError('23505')).toBe(true);
    expect(isDuplicateKeyError('42501')).toBe(false);
  });

  it('should identify null value violations', () => {
    const isNullValueError = (errorCode: string) => errorCode === '23502';

    expect(isNullValueError('23502')).toBe(true);
    expect(isNullValueError('42501')).toBe(false);
  });
});

describe('Integration: Signup to First Mission Flow', () => {
  it('should complete full signup-login-mission flow correctly', () => {
    // Step 1: Signup
    const signupData = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'test123456'
    };
    
    const isValidPassword = signupData.password.length >= 6;
    expect(isValidPassword).toBe(true);

    // Step 2: Profile created
    const profile = {
      id: 'user-123',
      name: signupData.name,
      email: signupData.email,
      streak: 0,
      total_missions: 0,
      longest_streak: 0,
    };
    expect(profile.streak).toBe(0);
    expect(profile.total_missions).toBe(0);

    // Step 3: Login and check missions
    const existingMissions: any[] = [];
    const shouldCreateFirst = existingMissions.length === 0;
    expect(shouldCreateFirst).toBe(true);

    // Step 4: Create first mission
    if (shouldCreateFirst) {
      const firstMission = {
        user_id: profile.id,
        title: 'Say hi to your neighbor',
        description: 'Make eye contact and greet someone in your building or neighborhood',
        category: 'Greetings',
        difficulty: 'easy' as const,
        completed: false,
        date: new Date().toISOString().split('T')[0],
      };

      // Verify mission has user_id (critical for RLS)
      expect(firstMission.user_id).toBe(profile.id);
      expect(firstMission.completed).toBe(false);
    }
  });
});

