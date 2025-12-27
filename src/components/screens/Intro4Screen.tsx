import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function Intro4Screen() {
  const navigation = useNavigation<any>();

  return (
    <LinearGradient
      colors={['#eff6ff', '#f3e8ff', '#f0fdf4']}
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <View style={styles.iconCard}>
            <Ionicons name="trending-up" size={80} color="#9333ea" />
          </View>
        </View>

        <Text style={styles.title}>
          Small actions build{'\n'}confidence
        </Text>
        
        <Text style={styles.description}>
          Feel more connected to the world{'\n'}around you, without anxiety.
        </Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.pagination}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.dotActive]} />
        </View>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
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
    alignItems: 'flex-start',
    padding: 32,
    paddingTop: 48,
  },
  backText: {
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


