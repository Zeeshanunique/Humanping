import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../AppContext';
import { Ionicons } from '@expo/vector-icons';

export default function TaskStatusScreen() {
  const navigation = useNavigation<any>();
  const { currentMission } = useApp();

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('HomeTab')}
          style={styles.backToHomeButton}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Ionicons name="arrow-back" size={20} color="#111827" />
          <Text style={styles.backToHomeText}>Back to Home</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Text style={styles.waveEmoji}>👋</Text>
        </View>

        <Text style={styles.title}>
          Go do your{'\n'}HumanPing
        </Text>
        
        <Text style={styles.subtitle}>
          Take your time. Put your phone away.{'\n'}Come back when you're done.
        </Text>

        <View style={styles.missionReminder}>
          <Text style={styles.missionText}>
            "{currentMission?.title || 'Ask one person how their day is going.'}"
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.completeButton}
          onPress={() => navigation.navigate('PostTaskFeeling')}
        >
          <Text style={styles.completeButtonText}>I've done it</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  topBar: {
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 16,
  },
  backToHomeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 8,
    marginLeft: -8,
    alignSelf: 'flex-start',
  },
  backToHomeText: {
    fontSize: 16,
    color: '#111827',
    fontWeight: '500',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  iconContainer: {
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  waveEmoji: {
    fontSize: 48,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  missionReminder: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 24,
    maxWidth: 320,
    width: '100%',
  },
  missionText: {
    fontSize: 16,
    color: '#374151',
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 24,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 16,
  },
  completeButton: {
    backgroundColor: '#2563eb',
    borderRadius: 12,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  completeButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
