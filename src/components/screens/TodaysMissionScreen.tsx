import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../AppContext';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function TodaysMissionScreen() {
  const navigation = useNavigation<any>();
  const { missions, setCurrentMission } = useApp();

  const todaysMission = missions.find(m => !m.completed) || missions[0];

  const handleStartMission = () => {
    setCurrentMission(todaysMission);
    navigation.navigate('TaskInstruction');
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return { bg: '#dcfce7', text: '#15803d' };
      case 'medium':
        return { bg: '#fef3c7', text: '#a16207' };
      default:
        return { bg: '#fee2e2', text: '#991b1b' };
    }
  };

  const difficultyColors = getDifficultyColor(todaysMission.difficulty);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <LinearGradient
          colors={['#eff6ff', '#f3e8ff']}
          style={styles.header}
        >
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color="#111827" />
          </TouchableOpacity>

          <View style={styles.headerContent}>
            <LinearGradient
              colors={['#3b82f6', '#9333ea']}
              style={styles.iconContainer}
            >
              <Ionicons name="radio-button-on" size={32} color="#ffffff" />
            </LinearGradient>
            <Text style={styles.title}>Today's Mission</Text>
            <Text style={styles.subtitle}>A small step toward big confidence</Text>
          </View>
        </LinearGradient>

        <View style={styles.content}>
          <View style={styles.missionCard}>
            <View style={styles.badges}>
              <View style={[styles.badge, { backgroundColor: difficultyColors.bg }]}>
                <Text style={[styles.badgeText, { color: difficultyColors.text }]}>
                  {todaysMission.difficulty}
                </Text>
              </View>
              <View style={[styles.badge, { backgroundColor: '#dbeafe' }]}>
                <Text style={[styles.badgeText, { color: '#1e40af' }]}>
                  {todaysMission.category}
                </Text>
              </View>
            </View>

            <Text style={styles.missionTitle}>{todaysMission.title}</Text>
            <Text style={styles.missionDescription}>{todaysMission.description}</Text>

            <View style={styles.infoSection}>
              <View style={styles.infoItem}>
                <View style={[styles.infoIcon, { backgroundColor: '#dbeafe' }]}>
                  <Ionicons name="time" size={16} color="#2563eb" />
                </View>
                <View>
                  <Text style={styles.infoLabel}>Estimated time</Text>
                  <Text style={styles.infoValue}>5-10 minutes</Text>
                </View>
              </View>

              <View style={styles.infoItem}>
                <View style={[styles.infoIcon, { backgroundColor: '#f3e8ff' }]}>
                  <Ionicons name="star" size={16} color="#9333ea" />
                </View>
                <View>
                  <Text style={styles.infoLabel}>Reward</Text>
                  <Text style={styles.infoValue}>+10 confidence points</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity 
              style={styles.startButton}
              onPress={handleStartMission}
            >
              <LinearGradient
                colors={['#2563eb', '#9333ea']}
                style={styles.startButtonGradient}
              >
                <Text style={styles.startButtonText}>Start Mission</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.tipCard}>
            <Text style={styles.tipEmoji}>💡</Text>
            <View style={styles.tipContent}>
              <Text style={styles.tipTitle}>Tip</Text>
              <Text style={styles.tipText}>
                Take your time and remember - it's okay to feel nervous. That's part of the growth!
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
  header: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 48,
  },
  backButton: {
    marginBottom: 24,
  },
  headerContent: {
    alignItems: 'center',
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    marginTop: -24,
  },
  missionCard: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  badges: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '500',
  },
  missionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  missionDescription: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 24,
  },
  infoSection: {
    gap: 12,
    marginBottom: 24,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  infoIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoLabel: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 12,
    color: '#6b7280',
  },
  startButton: {
    borderRadius: 24,
    overflow: 'hidden',
  },
  startButtonGradient: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  tipCard: {
    backgroundColor: '#eff6ff',
    borderWidth: 1,
    borderColor: '#bfdbfe',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    gap: 12,
  },
  tipEmoji: {
    fontSize: 24,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 4,
  },
  tipText: {
    fontSize: 14,
    color: '#374151',
  },
});
