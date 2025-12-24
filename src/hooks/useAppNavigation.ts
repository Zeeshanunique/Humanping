import { Platform } from 'react-native';
import { useNavigation as useRNNavigation } from '@react-navigation/native';
import { useNavigate as useRRNavigate } from 'react-router-dom';

/**
 * Cross-platform navigation hook that works with both React Navigation (mobile) 
 * and React Router (web)
 */
export function useAppNavigation() {
  // Check if we're in a web environment with react-router-dom
  const isWeb = Platform.OS === 'web';
  
  try {
    if (isWeb) {
      // Try to use react-router-dom navigate
      const navigate = useRRNavigate();
      return {
        navigate: (screen: string, params?: any) => {
          const path = screen.toLowerCase().replace(/([A-Z])/g, '-$1').replace(/^-/, '');
          navigate(path, { state: params });
        },
        goBack: () => navigate(-1),
      };
    } else {
      // Use React Navigation for mobile
      const navigation = useRNNavigation<any>();
      return {
        navigate: (screen: string, params?: any) => {
          navigation.navigate(screen, params);
        },
        goBack: () => navigation.goBack(),
      };
    }
  } catch (error) {
    // Fallback to React Navigation if react-router-dom context is not available
    const navigation = useRNNavigation<any>();
    return {
      navigate: (screen: string, params?: any) => {
        navigation.navigate(screen, params);
      },
      goBack: () => navigation.goBack(),
    };
  }
}

