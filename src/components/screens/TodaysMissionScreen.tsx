import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../AppContext';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useTimeUntilMidnight } from '../../hooks/useTimeUntilMidnight';

export default function TodaysMissionScreen() {
  const navigation = useNavigation<any>();
  const { missions, setCurrentMission } = useApp();
  const timeLeft = useTimeUntilMidnight();

  // Get TODAY's mission (completed or not)
  const today = new Date().toISOString().split('T')[0];
  const todaysMission = missions.find(m => m.date === today);

  const handleStartMission = () => {
    if (todaysMission && !todaysMission.completed) {
      setCurrentMission(todaysMission);
      navigation.navigate('TaskInstruction');
    }
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

  // Show loading/empty state if no mission
  if (!todaysMission) {
    return (
      <View style={styles.container}>
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
        </LinearGradient>
        <View style={[styles.container, { justifyContent: 'center', alignItems: 'center', padding: 20 }]}>
          <Ionicons name="calendar" size={80} color="#9333ea" />
          <Text style={[styles.title, { marginTop: 20, textAlign: 'center' }]}>No mission for today yet</Text>
          <Text style={[styles.subtitle, { textAlign: 'center', marginTop: 10 }]}>Check back tomorrow for your next mission!</Text>
        </View>
      </View>
    );
  }

  // Show completed state if mission is done
  if (todaysMission.completed) {
    return (
      <View style={styles.container}>
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
        </LinearGradient>
        <View style={[styles.container, { justifyContent: 'center', alignItems: 'center', padding: 20 }]}>
          <Ionicons name="checkmark-circle" size={100} color="#10b981" />
          <Text style={[styles.title, { marginTop: 24, textAlign: 'center' }]}>Mission Completed!</Text>
          <Text style={[styles.subtitle, { textAlign: 'center', marginTop: 12 }]}>
            Great job! Come back tomorrow for your next mission.
          </Text>
          
          <View style={styles.countdownCard}>
            <View style={styles.countdownHeader}>
              <Ionicons name="time-outline" size={24} color="#2563eb" />
              <Text style={styles.countdownTitle}>Next Mission In:</Text>
            </View>
            
            <View style={styles.timerDisplay}>
              <View style={styles.timeBox}>
                <Text style={styles.timeNumber}>{String(timeLeft.hours).padStart(2, '0')}</Text>
                <Text style={styles.timeLabel}>hours</Text>
              </View>
              <Text style={styles.timeSeparator}>:</Text>
              <View style={styles.timeBox}>
                <Text style={styles.timeNumber}>{String(timeLeft.minutes).padStart(2, '0')}</Text>
                <Text style={styles.timeLabel}>minutes</Text>
              </View>
              <Text style={styles.timeSeparator}>:</Text>
              <View style={styles.timeBox}>
                <Text style={styles.timeNumber}>{String(timeLeft.seconds).padStart(2, '0')}</Text>
                <Text style={styles.timeLabel}>seconds</Text>
              </View>
            </View>
          </View>
          
          <TouchableOpacity 
            style={[styles.startButton, { marginTop: 30 }]}
            onPress={() => navigation.navigate('HomeTab')}
          >
            <LinearGradient
              colors={['#2563eb', '#9333ea']}
              style={styles.startButtonGradient}
            >
              <Text style={styles.startButtonText}>Back to Home</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

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
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons name="arrow-back" size={24} color="#111827" />
          </TouchableOpacity>

          <View style={styles.headerContent}>
            <View style={styles.dailyChallengeBadge}>
              <Text style={styles.dailyChallengeText}>Daily Challenge</Text>
            </View>
            <Text style={styles.title}>Today's HumanPing</Text>
          </View>
        </LinearGradient>

        <View style={styles.content}>
          <View style={styles.missionCard}>
            <View style={styles.missionQuoteContainer}>
              <Text style={styles.missionQuote}>
                "{todaysMission.title}"
              </Text>
            </View>

            <View style={styles.badgesRow}>
              <View style={styles.badgeContainer}>
                <Ionicons name="checkmark-circle" size={12} color="#15803d" />
                <Text style={styles.badgeText}>Safe</Text>
              </View>
              <View style={styles.badgeContainer}>
                <Ionicons name="location" size={12} color="#2563eb" />
                <Text style={styles.badgeText}>Anywhere</Text>
              </View>
            </View>
          </View>

          <View style={styles.whySection}>
            <Text style={styles.whyTitle}>Why this helps</Text>
            <Text style={styles.whyText}>
              Small, low-stakes interactions help retrain your brain that social connection is safe and rewarding.
            </Text>
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
    padding: 8,
    marginLeft: -8,
    alignSelf: 'flex-start',
  },
  headerContent: {
    alignItems: 'center',
    marginTop: 24,
  },
  dailyChallengeBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 12,
    marginBottom: 16,
  },
  dailyChallengeText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
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
  missionQuoteContainer: {
    marginBottom: 16,
  },
  missionQuote: {
    fontSize: 20,
    fontWeight: '500',
    color: '#111827',
    textAlign: 'center',
    lineHeight: 28,
  },
  badgesRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginTop: 8,
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#f3f4f6',
    borderRadius: 16,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
  whySection: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  whyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  whyText: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  startButton: {
    borderRadius: 24,
    overflow: 'hidden',
    marginTop: 8,
  },
  startButtonGradient: {
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    lineHeight: 24,
  },
  countdownCard: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 16,
    padding: 24,
    marginTop: 32,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  countdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 20,
  },
  countdownTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  timerDisplay: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  timeBox: {
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    padding: 16,
    minWidth: 80,
    alignItems: 'center',
  },
  timeNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2563eb',
  },
  timeLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
  },
  timeSeparator: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#9ca3af',
    marginHorizontal: 4,
  },
});
