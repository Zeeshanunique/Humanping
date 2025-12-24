import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function Intro1Screen() {
  const navigation = useNavigation<any>();

  return (
    <LinearGradient
      colors={['#eff6ff', '#f3e8ff', '#f0fdf4']}
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <View style={styles.iconCard}>
            <Ionicons name="sparkles" size={80} color="#60a5fa" />
            <Ionicons name="add" size={24} color="#60a5fa" style={styles.plusTop} />
            <Ionicons name="add" size={16} color="#60a5fa" style={styles.plusBottom} />
          </View>
        </View>

        <Text style={styles.title}>
          One small human action a day
        </Text>
        
        <Text style={styles.description}>
          Get a tiny offline social mission every day to build confidence.
        </Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.pagination}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Intro2')}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'flex-end',
    padding: 32,
  },
  skipText: {
    color: '#111827',
    fontSize: 16,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingBottom: 64,
  },
  iconContainer: {
    width: 256,
    height: 256,
    marginBottom: 48,
    position: 'relative',
  },
  iconCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 16,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  plusTop: {
    position: 'absolute',
    top: 24,
    right: 32,
  },
  plusBottom: {
    position: 'absolute',
    bottom: 48,
    left: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 16,
    maxWidth: 320,
  },
  description: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    maxWidth: 384,
  },
  footer: {
    paddingHorizontal: 32,
    paddingBottom: 48,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 32,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#d1d5db',
  },
  dotActive: {
    width: 32,
    backgroundColor: '#2563eb',
  },
  button: {
    backgroundColor: '#2563eb',
    borderRadius: 24,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
