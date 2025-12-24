import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../AppContext';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function WeeklyReviewScreen() {
  const navigation = useNavigation<any>();
  const { missions, streak } = useApp();

  const weekMissions = missions.filter(m => m.completed).slice(0, 5);
  const weeklyScore = weekMissions.length;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <LinearGradient
          colors={['#faf5ff', '#fdf2f8']}
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
              colors={['#9333ea', '#ec4899']}
              style={styles.iconContainer}
            >
              <Ionicons name="star" size={40} color="#ffffff" />
            </LinearGradient>
            <Text style={styles.title}>Weekly Review</Text>
            <Text style={styles.subtitle}>Your progress this week</Text>
          </View>
        </LinearGradient>

        <View style={styles.content}>
          <View style={styles.statsCard}>
            <Text style={styles.statsNumber}>{weeklyScore}</Text>
            <Text style={styles.statsLabel}>Missions completed</Text>

            <View style={styles.statsGrid}>
              <LinearGradient
                colors={['#fff7ed', '#fee2e2']}
                style={styles.statCard}
              >
                <Text style={styles.statEmoji}>🔥</Text>
                <Text style={styles.statNumber}>{streak}</Text>
                <Text style={styles.statLabel}>Day Streak</Text>
              </LinearGradient>

              <LinearGradient
                colors={['#eff6ff', '#f3e8ff']}
                style={styles.statCard}
              >
                <Text style={styles.statEmoji}>⭐</Text>
                <Text style={styles.statNumber}>85%</Text>
                <Text style={styles.statLabel}>Success Rate</Text>
              </LinearGradient>
            </View>
          </View>

          <Text style={styles.sectionTitle}>This Week's Missions</Text>

          <View style={styles.missionsList}>
            {weekMissions.map((mission) => (
              <View key={mission.id} style={styles.missionCard}>
                <View style={styles.missionIcon}>
                  <Text style={styles.checkmark}>✓</Text>
                </View>
                <View style={styles.missionContent}>
                  <Text style={styles.missionTitle}>{mission.title}</Text>
                  <View style={styles.missionMeta}>
                    <Text style={styles.missionDate}>{mission.date}</Text>
                    {mission.postFeeling && (
                      <View style={styles.feelingBadge}>
                        <Text style={styles.feelingText}>
                          Felt {mission.postFeeling}
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
              </View>
            ))}
          </View>

          <LinearGradient
            colors={['#faf5ff', '#fdf2f8']}
            style={styles.insightsCard}
          >
            <View style={styles.insightsHeader}>
              <Ionicons name="trending-up" size={24} color="#9333ea" />
              <Text style={styles.insightsTitle}>Progress Insights</Text>
            </View>
            <Text style={styles.insightsText}>
              You completed {weeklyScore} missions this week! That's amazing progress. 
              {weeklyScore >= 5 ? " You're on fire! 🔥" : " Keep up the great work!"}
            </Text>
            <Text style={styles.insightsSubtext}>
              Remember: consistency is more important than perfection. Every mission builds your confidence.
            </Text>
          </LinearGradient>

          <TouchableOpacity 
            style={styles.continueButton}
            onPress={() => navigation.navigate('HomeTab')}
          >
            <LinearGradient
              colors={['#9333ea', '#ec4899']}
              style={styles.continueButtonGradient}
            >
              <Text style={styles.continueButtonText}>Continue Your Journey</Text>
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
  },
  headerContent: {
    alignItems: 'center',
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
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
  statsCard: {
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
  statsNumber: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 8,
  },
  statsLabel: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 24,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 16,
  },
  statCard: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  statEmoji: {
    fontSize: 24,
    marginBottom: 8,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#6b7280',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  missionsList: {
    gap: 12,
    marginBottom: 24,
  },
  missionCard: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    gap: 12,
  },
  missionIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#dcfce7',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    fontSize: 18,
    color: '#16a34a',
  },
  missionContent: {
    flex: 1,
  },
  missionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 8,
  },
  missionMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  missionDate: {
    fontSize: 12,
    color: '#6b7280',
  },
  feelingBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: '#dcfce7',
    borderRadius: 12,
  },
  feelingText: {
    fontSize: 12,
    color: '#15803d',
  },
  insightsCard: {
    borderRadius: 12,
    padding: 24,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#e9d5ff',
  },
  insightsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  insightsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  insightsText: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 12,
  },
  insightsSubtext: {
    fontSize: 14,
    color: '#6b7280',
  },
  continueButton: {
    borderRadius: 24,
    overflow: 'hidden',
  },
  continueButtonGradient: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
