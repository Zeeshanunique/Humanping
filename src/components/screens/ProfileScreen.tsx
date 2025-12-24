import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../AppContext';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const navigation = useNavigation<any>();
  const { user, streak, missions } = useApp();

  const completedMissions = missions.filter(m => m.completed).length;
  const joinDate = user?.joinDate ? new Date(user.joinDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'November 2024';

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

          <View style={styles.profileInfo}>
            <LinearGradient
              colors={['#3b82f6', '#9333ea']}
              style={styles.avatar}
            >
              <Text style={styles.avatarText}>
                {user?.name?.charAt(0) || 'A'}
              </Text>
            </LinearGradient>
            <Text style={styles.name}>{user?.name || 'Alex Johnson'}</Text>
            <Text style={styles.email}>{user?.email || 'alex@example.com'}</Text>
            
            <View style={styles.joinDate}>
              <Ionicons name="calendar" size={16} color="#6b7280" />
              <Text style={styles.joinDateText}>Joined {joinDate}</Text>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.content}>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <View style={[styles.statIcon, { backgroundColor: '#fed7aa' }]}>
                <Text style={styles.statEmoji}>🔥</Text>
              </View>
              <Text style={styles.statNumber}>{streak}</Text>
              <Text style={styles.statLabel}>Day Streak</Text>
            </View>

            <View style={styles.statCard}>
              <View style={[styles.statIcon, { backgroundColor: '#dbeafe' }]}>
                <Ionicons name="radio-button-on" size={20} color="#2563eb" />
              </View>
              <Text style={styles.statNumber}>{completedMissions}</Text>
              <Text style={styles.statLabel}>Completed</Text>
            </View>

            <View style={styles.statCard}>
              <View style={[styles.statIcon, { backgroundColor: '#f3e8ff' }]}>
                <Ionicons name="ribbon" size={20} color="#9333ea" />
              </View>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Badges</Text>
            </View>
          </View>

          <View style={styles.achievements}>
            <Text style={styles.achievementsTitle}>Recent Achievements</Text>
            
            <View style={styles.achievementsList}>
              <LinearGradient
                colors={['#fef3c7', '#fed7aa']}
                style={styles.achievementCard}
              >
                <View style={styles.achievementIcon}>
                  <Text style={styles.achievementEmoji}>🏆</Text>
                </View>
                <View style={styles.achievementText}>
                  <Text style={styles.achievementTitle}>5 Day Streak</Text>
                  <Text style={styles.achievementSubtitle}>Keep it up!</Text>
                </View>
              </LinearGradient>

              <LinearGradient
                colors={['#dbeafe', '#f3e8ff']}
                style={styles.achievementCard}
              >
                <View style={styles.achievementIcon}>
                  <Text style={styles.achievementEmoji}>⭐</Text>
                </View>
                <View style={styles.achievementText}>
                  <Text style={styles.achievementTitle}>First Mission</Text>
                  <Text style={styles.achievementSubtitle}>Completed your first mission</Text>
                </View>
              </LinearGradient>

              <LinearGradient
                colors={['#d1fae5', '#a7f3d0']}
                style={styles.achievementCard}
              >
                <View style={styles.achievementIcon}>
                  <Text style={styles.achievementEmoji}>💪</Text>
                </View>
                <View style={styles.achievementText}>
                  <Text style={styles.achievementTitle}>Social Butterfly</Text>
                  <Text style={styles.achievementSubtitle}>10 missions completed</Text>
                </View>
              </LinearGradient>
            </View>
          </View>

          <TouchableOpacity 
            style={styles.editButton}
            onPress={() => navigation.navigate('Settings')}
          >
            <Text style={styles.editButtonText}>Edit Profile</Text>
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
  profileInfo: {
    alignItems: 'center',
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 40,
    fontWeight: '600',
    color: '#ffffff',
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 16,
  },
  joinDate: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  joinDateText: {
    fontSize: 14,
    color: '#6b7280',
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 32,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  statEmoji: {
    fontSize: 20,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 10,
    color: '#6b7280',
  },
  achievements: {
    marginBottom: 32,
  },
  achievementsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  achievementsList: {
    gap: 12,
  },
  achievementCard: {
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  achievementIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#ffffff',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  achievementEmoji: {
    fontSize: 24,
  },
  achievementText: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 2,
  },
  achievementSubtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
  editButton: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 24,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
});