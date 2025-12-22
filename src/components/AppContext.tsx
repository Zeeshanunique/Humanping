import { createContext, useContext, useState, ReactNode } from 'react';

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
  addMission: (mission: Mission) => void;
  updateMission: (id: string, updates: Partial<Mission>) => void;
  currentMission: Mission | null;
  setCurrentMission: (mission: Mission | null) => void;
  streak: number;
  incrementStreak: () => void;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  signup: (name: string, email: string, password: string) => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [missions, setMissions] = useState<Mission[]>([
    {
      id: '1',
      title: 'Say hi to your neighbor',
      description: 'Make eye contact and greet someone in your building',
      category: 'Greetings',
      difficulty: 'easy',
      completed: true,
      date: '2024-12-20',
      feeling: 'nervous',
      postFeeling: 'proud',
      location: 'At home'
    },
    {
      id: '2',
      title: 'Order coffee in person',
      description: 'Visit a cafe and place your order face-to-face',
      category: 'Public Speaking',
      difficulty: 'medium',
      completed: true,
      date: '2024-12-19',
      feeling: 'anxious',
      postFeeling: 'accomplished',
      location: 'Local cafe'
    },
    {
      id: '3',
      title: 'Ask a stranger for directions',
      description: 'Approach someone and ask for help finding a location',
      category: 'Conversation',
      difficulty: 'medium',
      completed: false,
      date: '2024-12-22',
    }
  ]);
  const [currentMission, setCurrentMission] = useState<Mission | null>(null);
  const [streak, setStreak] = useState(5);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const addMission = (mission: Mission) => {
    setMissions([...missions, mission]);
  };

  const updateMission = (id: string, updates: Partial<Mission>) => {
    setMissions(missions.map(m => m.id === id ? { ...m, ...updates } : m));
  };

  const incrementStreak = () => {
    setStreak(prev => prev + 1);
  };

  const login = (email: string, password: string) => {
    // Mock login
    setUser({
      name: 'Alex Johnson',
      email,
      streak: 5,
      totalMissions: 23,
      joinDate: '2024-11-01'
    });
    setIsAuthenticated(true);
  };

  const signup = (name: string, email: string, password: string) => {
    // Mock signup
    setUser({
      name,
      email,
      streak: 0,
      totalMissions: 0,
      joinDate: new Date().toISOString().split('T')[0]
    });
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
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
        login,
        signup,
        logout
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
