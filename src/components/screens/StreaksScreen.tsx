import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../AppContext';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function StreaksScreen() {
  const navigation = useNavigation<any>();
  const { streak, missions, user } = useApp();

  // Calculate weekly completion
  const getWeeklyCompletion = () => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    
    const monday = new Date(today);
    monday.setDate(today.getDate() + mondayOffset);
    monday.setHours(0, 0, 0, 0);
    
    const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    const completedDays = weekDays.map((_, index) => {
      const checkDate = new Date(monday);
      checkDate.setDate(monday.getDate() + index);
      const dateStr = checkDate.toISOString().split('T')[0];
      
      return missions.some(m => {
        const missionDate = (m.completed_at || m.date)?.split('T')[0];
        return m.completed && missionDate === dateStr;
      });
    });
    
    const dayNumbers = weekDays.map((_, index) => {
      const date = new Date(monday);
      date.setDate(monday.getDate() + index);
      return date.getDate();
    });
    
    return { weekDays, completedDays, dayNumbers };
  };

  const { weekDays, completedDays, dayNumbers } = getWeeklyCompletion();
  const completedThisWeek = completedDays.filter(d => d).length;
  const weekProgress = Math.round((completedThisWeek / 7) * 100);
  
  // Calculate longest streak from user profile
  const longestStreak = user?.totalMissions ? Math.max(streak, Math.floor(user.totalMissions / 2)) : streak;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <LinearGradient
          colors={['#fff7ed', '#fee2e2']}
          style={styles.header}
        >
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={styles.backButton}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons name="arrow-back" size={24} color="#111827" />
          </TouchableOpacity>

          <View style={styles.streakHeader}>
            <LinearGradient
              colors={['#fb923c', '#ef4444']}
              style={styles.streakIcon}
            >
              <Ionicons name="flame" size={40} color="#ffffff" />
            </LinearGradient>
            <Text style={styles.streakTitle}>{streak} Day Streak</Text>
            <Text style={styles.streakSubtitle}>Keep it going!</Text>
          </View>

          <View style={styles.calendarCard}>
            <View style={styles.calendarGrid}>
              {weekDays.map((day, index) => (
                <View key={index} style={styles.calendarDay}>
                  <Text style={styles.dayLabel}>{day}</Text>
                  <LinearGradient
                    colors={completedDays[index] ? ['#fb923c', '#ef4444'] : ['#f3f4f6', '#f3f4f6']}
                    style={[
                      styles.dayCircle,
                      !completedDays[index] && styles.dayCircleInactive
                    ]}
                  >
                    <Text style={[
                      styles.dayNumber,
                      !completedDays[index] && styles.dayNumberInactive
                    ]}>
                      {dayNumbers[index]}
                    </Text>
                  </LinearGradient>
                </View>
              ))}
            </View>
          </View>
        </LinearGradient>

        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Statistics</Text>

          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <View style={[styles.statIcon, { backgroundColor: '#fed7aa' }]}>
                <Ionicons name="flame" size={20} color="#ea580c" />
              </View>
              <Text style={styles.statNumber}>{streak}</Text>
              <Text style={styles.statLabel}>Current Streak</Text>
            </View>

            <View style={styles.statCard}>
              <View style={[styles.statIcon, { backgroundColor: '#dbeafe' }]}>
                <Ionicons name="trending-up" size={20} color="#2563eb" />
              </View>
              <Text style={styles.statNumber}>{longestStreak}</Text>
              <Text style={styles.statLabel}>Longest Streak</Text>
            </View>
          </View>

          <LinearGradient
            colors={['#fff7ed', '#fee2e2']}
            style={styles.weekCard}
          >
            <View style={styles.weekHeader}>
              <Ionicons name="calendar" size={24} color="#ea580c" />
              <Text style={styles.weekTitle}>This Week</Text>
            </View>
            <Text style={styles.weekText}>
              You've completed {completedThisWeek} mission{completedThisWeek !== 1 ? 's' : ''} this week. {
                completedThisWeek === 7 
                  ? "Perfect week! 🎉" 
                  : `Just ${7 - completedThisWeek} more day${7 - completedThisWeek !== 1 ? 's' : ''} to complete a full week!`
              }
            </Text>
            <View style={styles.progressBar}>
              <LinearGradient
                colors={['#fb923c', '#ef4444']}
                style={[styles.progressFill, { width: `${weekProgress}%` }]}
              />
            </View>
            <Text style={styles.progressText}>5 of 7 days</Text>
          </LinearGradient>

          <LinearGradient
            colors={['#faf5ff', '#fdf2f8']}
            style={styles.goalCard}
          >
            <Text style={styles.goalEmoji}>🎯</Text>
            <Text style={styles.goalTitle}>Streak Goal</Text>
            <Text style={styles.goalText}>
              Complete missions for 30 consecutive days to unlock the "Unstoppable" badge
            </Text>
            <Text style={styles.goalDays}>{30 - streak} days to go</Text>
          </LinearGradient>
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
  streakHeader: {
    alignItems: 'center',
    marginBottom: 32,
  },
  streakIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  streakTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  streakSubtitle: {
    fontSize: 16,
    color: '#6b7280',
  },
  calendarCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  calendarGrid: {
    flexDirection: 'row',
    gap: 8,
  },
  calendarDay: {
    flex: 1,
    alignItems: 'center',
  },
  dayLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 8,
  },
  dayCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayCircleInactive: {
    backgroundColor: '#f3f4f6',
  },
  dayNumber: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },
  dayNumberInactive: {
    color: '#9ca3af',
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    padding: 16,
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  weekCard: {
    borderRadius: 12,
    padding: 24,
    borderWidth: 1,
    borderColor: '#fed7aa',
    marginBottom: 16,
  },
  weekHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  weekTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  weekText: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 16,
  },
  progressBar: {
    width: '100%',
    height: 8,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    marginBottom: 8,
  },
  progressFill: {
    height: 8,
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    color: '#6b7280',
  },
  goalCard: {
    borderRadius: 12,
    padding: 24,
    borderWidth: 1,
    borderColor: '#e9d5ff',
    alignItems: 'center',
  },
  goalEmoji: {
    fontSize: 40,
    marginBottom: 12,
  },
  goalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  goalText: {
    fontSize: 16,
    color: '#374151',
    textAlign: 'center',
    marginBottom: 12,
  },
  goalDays: {
    fontSize: 14,
    color: '#6b7280',
  },
});