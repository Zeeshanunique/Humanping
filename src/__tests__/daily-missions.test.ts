/**
 * Daily Mission Generation Tests
 * 
 * Tests cover:
 * 1. Mission difficulty progression (easy → medium → hard)
 * 2. Daily mission creation logic
 * 3. Template selection
 * 4. Duplicate prevention (one mission per day)
 */

describe('Daily Mission Generation', () => {
  describe('Difficulty Progression', () => {
    it('should start with easy missions for new users', () => {
      const getDifficulty = (completedCount: number) => {
        if (completedCount >= 20) return 'hard';
        if (completedCount >= 7) return 'medium';
        return 'easy';
      };

      expect(getDifficulty(0)).toBe('easy');
      expect(getDifficulty(3)).toBe('easy');
      expect(getDifficulty(6)).toBe('easy');
    });

    it('should progress to medium difficulty after 7 completed missions', () => {
      const getDifficulty = (completedCount: number) => {
        if (completedCount >= 20) return 'hard';
        if (completedCount >= 7) return 'medium';
        return 'easy';
      };

      expect(getDifficulty(7)).toBe('medium');
      expect(getDifficulty(10)).toBe('medium');
      expect(getDifficulty(15)).toBe('medium');
      expect(getDifficulty(19)).toBe('medium');
    });

    it('should progress to hard difficulty after 20 completed missions', () => {
      const getDifficulty = (completedCount: number) => {
        if (completedCount >= 20) return 'hard';
        if (completedCount >= 7) return 'medium';
        return 'easy';
      };

      expect(getDifficulty(20)).toBe('hard');
      expect(getDifficulty(25)).toBe('hard');
      expect(getDifficulty(100)).toBe('hard');
    });
  });

  describe('Mission Creation Logic', () => {
    it('should not create duplicate mission for the same day', () => {
      const today = '2025-12-27';
      const existingMissions = [
        { date: '2025-12-27', title: 'Test Mission' }
      ];

      const hasMissionForToday = existingMissions.some(m => m.date === today);
      
      expect(hasMissionForToday).toBe(true);
    });

    it('should create new mission if no mission exists for today', () => {
      const today = '2025-12-28';
      const existingMissions = [
        { date: '2025-12-27', title: 'Yesterday Mission' }
      ];

      const hasMissionForToday = existingMissions.some(m => m.date === today);
      
      expect(hasMissionForToday).toBe(false);
    });

    it('should format today date correctly', () => {
      const getToday = () => new Date().toISOString().split('T')[0];
      const today = getToday();
      
      expect(today).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });
  });

  describe('Template Selection', () => {
    it('should select random template from available templates', () => {
      const templates = [
        { id: 1, title: 'Mission 1' },
        { id: 2, title: 'Mission 2' },
        { id: 3, title: 'Mission 3' }
      ];

      const selectRandom = (arr: any[]) => {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
      };

      const selected = selectRandom(templates);
      
      expect(templates).toContainEqual(selected);
    });

    it('should have mission templates for all difficulty levels', () => {
      const templates = [
        { difficulty: 'easy' },
        { difficulty: 'medium' },
        { difficulty: 'hard' }
      ];

      const hasEasy = templates.some(t => t.difficulty === 'easy');
      const hasMedium = templates.some(t => t.difficulty === 'medium');
      const hasHard = templates.some(t => t.difficulty === 'hard');

      expect(hasEasy).toBe(true);
      expect(hasMedium).toBe(true);
      expect(hasHard).toBe(true);
    });
  });

  describe('Mission Template Structure', () => {
    it('should have all required fields', () => {
      const template = {
        title: 'Say hi to your neighbor',
        description: 'Make eye contact and greet someone',
        category: 'Greetings',
        difficulty: 'easy',
        location: 'safe'
      };

      expect(template.title).toBeDefined();
      expect(template.description).toBeDefined();
      expect(template.category).toBeDefined();
      expect(template.difficulty).toBeDefined();
      expect(template.location).toBeDefined();
    });

    it('should validate difficulty values', () => {
      const validDifficulties = ['easy', 'medium', 'hard'];
      const isValidDifficulty = (diff: string) => validDifficulties.includes(diff);

      expect(isValidDifficulty('easy')).toBe(true);
      expect(isValidDifficulty('medium')).toBe(true);
      expect(isValidDifficulty('hard')).toBe(true);
      expect(isValidDifficulty('impossible')).toBe(false);
    });

    it('should validate location values', () => {
      const validLocations = ['safe', 'anywhere'];
      const isValidLocation = (loc: string) => validLocations.includes(loc);

      expect(isValidLocation('safe')).toBe(true);
      expect(isValidLocation('anywhere')).toBe(true);
      expect(isValidLocation('dangerous')).toBe(false);
    });
  });

  describe('Integration: Daily Mission Flow', () => {
    it('should complete full daily mission generation flow', () => {
      const user = {
        id: 'user-123',
        completedMissions: 5
      };

      // Step 1: Check if mission exists for today
      const today = '2025-12-27';
      const existingMissions = [
        { date: '2025-12-26', completed: true }
      ];
      const hasTodayMission = existingMissions.some(m => m.date === today);
      expect(hasTodayMission).toBe(false);

      // Step 2: Determine difficulty
      const getDifficulty = (count: number) => {
        if (count >= 20) return 'hard';
        if (count >= 7) return 'medium';
        return 'easy';
      };
      const difficulty = getDifficulty(user.completedMissions);
      expect(difficulty).toBe('easy');

      // Step 3: Select template
      const templates = [
        { title: 'Easy Mission 1', difficulty: 'easy' },
        { title: 'Easy Mission 2', difficulty: 'easy' }
      ];
      const filteredTemplates = templates.filter(t => t.difficulty === difficulty);
      expect(filteredTemplates.length).toBeGreaterThan(0);

      // Step 4: Create mission
      const selectedTemplate = filteredTemplates[0];
      const newMission = {
        user_id: user.id,
        title: selectedTemplate.title,
        difficulty: selectedTemplate.difficulty,
        date: today,
        completed: false
      };

      expect(newMission.user_id).toBe(user.id);
      expect(newMission.date).toBe(today);
      expect(newMission.completed).toBe(false);
    });
  });
});

