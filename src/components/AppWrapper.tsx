import { useTheme } from '../contexts/ThemeContext';
import { StatusBar } from 'expo-status-bar';

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const { isDark } = useTheme();
  
  return (
    <>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      {children}
    </>
  );
}

