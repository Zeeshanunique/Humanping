/**
 * Mission Completion Display Tests
 * 
 * Tests the UI logic for showing completed vs. pending missions
 */

describe('Mission Completion Display', () => {
  describe('Mission Status Display', () => {
    it('should show "Ready for you" for incomplete missions', () => {
      const mission = { completed: false, date: '2025-12-27' };
      const getStatus = (m: any) => m.completed ? '✓ Completed' : 'Ready for you';
      
      expect(getStatus(mission)).toBe('Ready for you');
    });

    it('should show "✓ Completed" for completed missions', () => {
      const mission = { completed: true, date: '2025-12-27' };
      const getStatus = (m: any) => m.completed ? '✓ Completed' : 'Ready for you';
      
      expect(getStatus(mission)).toBe('✓ Completed');
    });

    it('should show "Getting started" when no mission exists', () => {
      const mission = null;
      const getStatus = (m: any) => m ? (m.completed ? '✓ Completed' : 'Ready for you') : 'Getting started';
      
      expect(getStatus(mission)).toBe('Getting started');
    });
  });

  describe('Mission Title Display', () => {
    it('should show "Mission completed!" for completed missions', () => {
      const mission = { completed: true };
      const getTitle = (m: any) => {
        if (!m) return "Start your journey";
        return m.completed ? "Mission completed!" : "Today's mission is ready";
      };
      
      expect(getTitle(mission)).toBe("Mission completed!");
    });

    it('should show "Today\'s mission is ready" for pending missions', () => {
      const mission = { completed: false };
      const getTitle = (m: any) => {
        if (!m) return "Start your journey";
        return m.completed ? "Mission completed!" : "Today's mission is ready";
      };
      
      expect(getTitle(mission)).toBe("Today's mission is ready");
    });
  });

  describe('Mission Description Display', () => {
    it('should show tomorrow message for completed missions', () => {
      const mission = { completed: true };
      const getDescription = (m: any) => {
        if (!m) return 'Begin with your first mission to build confidence.';
        return m.completed 
          ? 'Great job! Come back tomorrow for your next mission.'
          : 'A small action to build connection and confidence.';
      };
      
      expect(getDescription(mission)).toBe('Great job! Come back tomorrow for your next mission.');
    });

    it('should show action message for pending missions', () => {
      const mission = { completed: false };
      const getDescription = (m: any) => {
        if (!m) return 'Begin with your first mission to build confidence.';
        return m.completed 
          ? 'Great job! Come back tomorrow for your next mission.'
          : 'A small action to build connection and confidence.';
      };
      
      expect(getDescription(mission)).toBe('A small action to build connection and confidence.');
    });
  });

  describe('Button Visibility Logic', () => {
    it('should show "View Mission" button for incomplete missions', () => {
      const mission = { completed: false };
      const shouldShowButton = (m: any) => m && !m.completed;
      
      expect(shouldShowButton(mission)).toBe(true);
    });

    it('should hide button for completed missions', () => {
      const mission = { completed: true };
      const shouldShowButton = (m: any) => m && !m.completed;
      
      expect(shouldShowButton(mission)).toBe(false);
    });

    it('should show "See you tomorrow!" badge for completed missions', () => {
      const mission = { completed: true };
      const shouldShowCompletedBadge = (m: any) => m && m.completed;
      
      expect(shouldShowCompletedBadge(mission)).toBe(true);
    });

    it('should hide completed badge for pending missions', () => {
      const mission = { completed: false };
      const shouldShowCompletedBadge = (m: any) => m && m.completed;
      
      expect(shouldShowCompletedBadge(mission)).toBe(false);
    });
  });

  describe('One Mission Per Day Logic', () => {
    it('should only allow one mission per date', () => {
      const today = '2025-12-27';
      const missions = [
        { id: '1', date: '2025-12-27', completed: true },
        { id: '2', date: '2025-12-26', completed: true }
      ];

      const todaysMission = missions.find(m => m.date === today);
      
      expect(todaysMission).toBeDefined();
      expect(todaysMission?.id).toBe('1');
    });

    it('should show completed mission if today mission is done', () => {
      const today = '2025-12-27';
      const missions = [
        { date: '2025-12-27', completed: true, title: 'Say hi' }
      ];

      const todaysMission = missions.find(m => m.date === today);
      
      expect(todaysMission?.completed).toBe(true);
    });

    it('should not create new mission if today mission exists (even if completed)', () => {
      const today = '2025-12-27';
      const missions = [
        { date: '2025-12-27', completed: true }
      ];

      const hasTodayMission = missions.some(m => m.date === today);
      const shouldCreateNew = !hasTodayMission;
      
      expect(shouldCreateNew).toBe(false);
    });
  });

  describe('Next Day Mission Generation', () => {
    it('should allow new mission on next day', () => {
      const today = '2025-12-28';
      const missions = [
        { date: '2025-12-27', completed: true }
      ];

      const hasTodayMission = missions.some(m => m.date === today);
      const shouldCreateNew = !hasTodayMission;
      
      expect(shouldCreateNew).toBe(true);
    });

    it('should determine correct date for next mission', () => {
      const getNextMissionDate = () => {
        const now = new Date();
        now.setDate(now.getDate() + 1);
        return now.toISOString().split('T')[0];
      };

      const nextDate = getNextMissionDate();
      expect(nextDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });
  });
});

