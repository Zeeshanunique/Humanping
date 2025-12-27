import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../AppContext';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

interface Milestone {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  icon: string;
}

export default function MissionsCompletedScreen() {
  const navigation = useNavigation<any>();
  const { missions, streak } = useApp();

  const completedMissions = missions.filter(m => m.completed).length;
  
  // Calculate missions this month and this week
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - now.getDay());
  startOfWeek.setHours(0, 0, 0, 0);

  const missionsThisMonth = missions.filter(m => {
    if (!m.completed || !m.date) return false;
    const missionDate = new Date(m.date);
    return missionDate >= startOfMonth;
  }).length;

  const missionsThisWeek = missions.filter(m => {
    if (!m.completed || !m.date) return false;
    const missionDate = new Date(m.date);
    return missionDate >= startOfWeek;
  }).length;

  const milestones: Milestone[] = [
    {
      id: 'first',
      title: 'First Hello',
      description: 'Completed first mission',
      completed: completedMissions >= 1,
      icon: completedMissions >= 1 ? 'checkmark-circle' : 'lock-closed',
    },
    {
      id: 'starter',
      title: 'Getting Started',
      description: 'Complete 3 missions',
      completed: completedMissions >= 3,
      icon: completedMissions >= 3 ? 'checkmark-circle' : 'lock-closed',
    },
    {
      id: 'consistent',
      title: 'Staying Consistent',
      description: '3 day streak',
      completed: streak >= 3,
      icon: streak >= 3 ? 'checkmark-circle' : 'lock-closed',
    },
    {
      id: 'week',
      title: 'Week Warrior',
      description: '7 day streak',
      completed: streak >= 7,
      icon: streak >= 7 ? 'checkmark-circle' : 'lock-closed',
    },
    {
      id: 'active',
      title: 'Active Member',
      description: '10 missions completed',
      completed: completedMissions >= 10,
      icon: completedMissions >= 10 ? 'checkmark-circle' : 'lock-closed',
    },
    {
      id: 'dedicated',
      title: 'Dedicated',
      description: '25 missions completed',
      completed: completedMissions >= 25,
      icon: completedMissions >= 25 ? 'checkmark-circle' : 'lock-closed',
    },
    {
      id: 'butterfly',
      title: 'Social Butterfly',
      description: '50 missions completed',
      completed: completedMissions >= 50,
      icon: completedMissions >= 50 ? 'checkmark-circle' : 'lock-closed',
    },
    {
      id: 'champion',
      title: 'Champion',
      description: '100 missions completed',
      completed: completedMissions >= 100,
      icon: completedMissions >= 100 ? 'checkmark-circle' : 'lock-closed',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <LinearGradient
          colors={['#eff6ff', '#faf5ff', '#f0fdf4']}
          style={styles.headerGradient}
        >
          <View style={styles.topBar}>
            <TouchableOpacity 
              onPress={() => navigation.goBack()}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              style={{ padding: 8, marginLeft: -8 }}
            >
              <Ionicons name="arrow-back" size={24} color="#111827" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Your Achievement</Text>
            <View style={styles.placeholder} />
          </View>
        </LinearGradient>

        <View style={styles.content}>
          {/* Total Completed Card */}
          <View style={styles.totalCard}>
            <View style={styles.totalCardHeader}>
              <View style={styles.totalIconContainer}>
                <Ionicons name="checkmark-circle" size={24} color="#ffffff" />
              </View>
              <Text style={styles.totalLabel}>Total Completed</Text>
            </View>
            <View style={styles.totalCardContent}>
              <Text style={styles.totalNumber}>{completedMissions}</Text>
              <Text style={styles.totalSubtext}>Small actions taken</Text>
            </View>
          </View>

          {/* Period Stats */}
          <View style={styles.periodStats}>
            <View style={styles.periodCard}>
              <View style={[styles.periodIcon, { backgroundColor: '#eff6ff' }]}>
                <Ionicons name="calendar" size={20} color="#2563eb" />
              </View>
              <Text style={styles.periodNumber}>{missionsThisMonth}</Text>
              <Text style={styles.periodLabel}>This Month</Text>
            </View>

            <View style={styles.periodCard}>
              <View style={[styles.periodIcon, { backgroundColor: '#faf5ff' }]}>
                <Ionicons name="time" size={20} color="#9333ea" />
              </View>
              <Text style={styles.periodNumber}>{missionsThisWeek}</Text>
              <Text style={styles.periodLabel}>This Week</Text>
            </View>
          </View>

          {/* Milestones */}
          <View style={styles.milestonesSection}>
            <Text style={styles.milestonesTitle}>Milestones</Text>
            
            <View style={styles.milestonesList}>
              {milestones.map((milestone) => (
                <View
                  key={milestone.id}
                  style={[
                    styles.milestoneCard,
                    milestone.completed ? styles.milestoneCompleted : styles.milestoneLocked,
                  ]}
                >
                  <View
                    style={[
                      styles.milestoneIcon,
                      milestone.completed
                        ? { backgroundColor: '#dcfce7' }
                        : { backgroundColor: '#e5e7eb' },
                    ]}
                  >
                    <Ionicons
                      name={milestone.completed ? 'checkmark-circle' : 'lock-closed'}
                      size={20}
                      color={milestone.completed ? '#16a34a' : '#9ca3af'}
                    />
                  </View>
                  <View style={styles.milestoneText}>
                    <Text style={styles.milestoneTitle}>{milestone.title}</Text>
                    <Text style={styles.milestoneDescription}>{milestone.description}</Text>
                  </View>
                  {milestone.completed && (
                    <Ionicons name="checkmark" size={20} color="#16a34a" />
                  )}
                </View>
              ))}
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
  headerGradient: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
  placeholder: {
    width: 24,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 24,
  },
  totalCard: {
    backgroundColor: '#22b018',
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  totalCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  totalIconContainer: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#dcfce7',
  },
  totalCardContent: {
    gap: 8,
  },
  totalNumber: {
    fontSize: 41,
    fontWeight: 'bold',
    color: '#111827',
  },
  totalSubtext: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '300',
  },
  periodStats: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },
  periodCard: {
    flex: 1,
    backgroundColor: '#f9fafb',
    borderWidth: 1,
    borderColor: '#f3f4f6',
    borderRadius: 16,
    padding: 20,
    alignItems: 'flex-start',
  },
  periodIcon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  periodNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  periodLabel: {
    fontSize: 10,
    color: '#6b7280',
    fontWeight: '300',
  },
  milestonesSection: {
    gap: 16,
  },
  milestonesTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  milestonesList: {
    gap: 16,
  },
  milestoneCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    gap: 12,
  },
  milestoneCompleted: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dcfce7',
  },
  milestoneLocked: {
    backgroundColor: 'rgba(249, 250, 251, 0.6)',
    borderWidth: 1,
    borderColor: '#f3f4f6',
  },
  milestoneIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  milestoneText: {
    flex: 1,
    gap: 4,
  },
  milestoneTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111827',
  },
  milestoneDescription: {
    fontSize: 10,
    color: '#6b7280',
    fontWeight: '300',
  },
});

