import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path, Line } from 'react-native-svg';
import svgPaths from "../../imports/svg-wmx0afot45";

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Intro1' as never);
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient
      colors={['#dbeafe', '#e9d5ff', '#dcfce7']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <View style={styles.logoBlur} />
          <Svg width={120} height={120} viewBox="0 0 120 120" style={styles.logo}>
            <Path d={svgPaths.p7372600} stroke="#111827" strokeWidth="2" fill="none" />
            <Path d={svgPaths.p2c337f80} stroke="#111827" strokeWidth="2" fill="none" />
            <Line x1="55" y1="60" x2="65" y2="60" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
          </Svg>
        </View>
        <Text style={styles.title}>HumanPing</Text>
        <Text style={styles.subtitle}>Tiny nudges. Real connection.</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  logoContainer: {
    width: 120,
    height: 120,
    marginBottom: 32,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoBlur: {
    position: 'absolute',
    width: 120,
    height: 120,
    backgroundColor: 'rgba(96, 165, 250, 0.2)',
    borderRadius: 60,
    // Note: blur effect not directly supported in React Native
    // Consider using react-native-blur or expo-blur for better blur effect
  },
  logo: {
    position: 'relative',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    background: 'linear-gradient(to right, #2563eb, #9333ea)',
    // Note: Gradient text requires additional library like react-native-linear-gradient-text
    // For now, using solid color
    color: '#2563eb',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
  },
});
