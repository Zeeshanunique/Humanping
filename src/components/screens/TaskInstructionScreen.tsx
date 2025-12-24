import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../AppContext';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function TaskInstructionScreen() {
  const navigation = useNavigation<any>();
  const { currentMission } = useApp();

  const instructions = [
    'Find a comfortable moment when you feel ready',
    'Take a deep breath and center yourself',
    'Approach the situation with a friendly smile',
    'Remember: everyone appreciates genuine kindness',
    'It\'s okay if it feels awkward - that\'s normal!'
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <LinearGradient
          colors={['#eff6ff', '#f3e8ff']}
          style={styles.header}
        >
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={styles.backButton}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons name="arrow-back" size={24} color="#111827" />
          </TouchableOpacity>

          <View style={styles.headerContent}>
            <LinearGradient
              colors={['#3b82f6', '#9333ea']}
              style={styles.iconContainer}
            >
              <Ionicons name="list" size={24} color="#ffffff" />
            </LinearGradient>
            <View>
              <Text style={styles.title}>Instructions</Text>
              <Text style={styles.subtitle}>Follow these steps</Text>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.content}>
          <View style={styles.missionCard}>
            <Text style={styles.missionTitle}>{currentMission?.title}</Text>
            <Text style={styles.missionDescription}>{currentMission?.description}</Text>
          </View>

          <View style={styles.instructionsList}>
            {instructions.map((instruction, index) => (
              <View key={index} style={styles.instructionItem}>
                <View style={styles.stepNumber}>
                  <Text style={styles.stepNumberText}>{index + 1}</Text>
                </View>
                <Text style={styles.instructionText}>{instruction}</Text>
              </View>
            ))}
          </View>

          <View style={styles.encouragementCard}>
            <Text style={styles.encouragementEmoji}>✨</Text>
            <Text style={styles.encouragementText}>
              Remember: Growth happens outside your comfort zone. You've got this!
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.readyButton}
          onPress={() => navigation.navigate('UserFeeling')}
        >
          <Text style={styles.readyButtonText}>I'm Ready</Text>
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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 32,
  },
  backButton: {
    marginBottom: 24,
    padding: 8,
    marginLeft: -8,
    alignSelf: 'flex-start',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  missionCard: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
  },
  missionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  missionDescription: {
    fontSize: 14,
    color: '#374151',
  },
  instructionsList: {
    gap: 12,
    marginBottom: 24,
  },
  instructionItem: {
    flexDirection: 'row',
    gap: 16,
    padding: 16,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
  },
  stepNumber: {
    width: 32,
    height: 32,
    backgroundColor: '#dbeafe',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepNumberText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2563eb',
  },
  instructionText: {
    flex: 1,
    fontSize: 16,
    color: '#374151',
  },
  encouragementCard: {
    backgroundColor: '#dcfce7',
    borderWidth: 1,
    borderColor: '#bbf7d0',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    gap: 8,
  },
  encouragementEmoji: {
    fontSize: 18,
  },
  encouragementText: {
    flex: 1,
    fontSize: 14,
    color: '#166534',
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 16,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  readyButton: {
    backgroundColor: '#2563eb',
    borderRadius: 24,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  readyButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
