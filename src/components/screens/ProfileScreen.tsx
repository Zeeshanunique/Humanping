import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../AppContext';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const navigation = useNavigation<any>();
  const { user, streak, missions } = useApp();

  const completedMissions = missions.filter(m => m.completed).length;
  const joinDate = user?.joinDate ? new Date(user.joinDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  
  // Calculate badges based on milestones
  const getBadgeCount = () => {
    let count = 0;
    if (completedMissions >= 1) count++; // First Mission
    if (completedMissions >= 5) count++; // Getting Started
    if (completedMissions >= 10) count++; // Social Butterfly
    if (completedMissions >= 25) count++; // Active Member
    if (completedMissions >= 50) count++; // Dedicated
    if (streak >= 7) count++; // Week Warrior
    if (streak >= 30) count++; // Unstoppable
    return count;
  };
  
  const badges = getBadgeCount();
  
  // Get recent achievements based on actual data
  const getRecentAchievements = () => {
    const achievements = [];
    
    if (streak >= 5) {
      achievements.push({
        emoji: '🏆',
        title: `${streak} Day Streak`,
        subtitle: 'Keep it up!',
        colors: ['#fef3c7', '#fed7aa']
      });
    }
    
    if (completedMissions >= 1) {
      achievements.push({
        emoji: '⭐',
        title: 'First Mission',
        subtitle: 'Completed your first mission',
        colors: ['#dbeafe', '#f3e8ff']
      });
    }
    
    if (completedMissions >= 10) {
      achievements.push({
        emoji: '💪',
        title: 'Social Butterfly',
        subtitle: '10 missions completed',
        colors: ['#d1fae5', '#a7f3d0']
      });
    }
    
    return achievements;
  };
  
  const recentAchievements = getRecentAchievements();

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
              <Text style={styles.statNumber}>{badges}</Text>
              <Text style={styles.statLabel}>Badges</Text>
            </View>
          </View>

          {recentAchievements.length > 0 && (
            <View style={styles.achievements}>
              <Text style={styles.achievementsTitle}>Recent Achievements</Text>
              
              <View style={styles.achievementsList}>
                {recentAchievements.map((achievement, index) => (
                  <LinearGradient
                    key={index}
                    colors={achievement.colors as [string, string]}
                    style={styles.achievementCard}
                  >
                    <View style={styles.achievementIcon}>
                      <Text style={styles.achievementEmoji}>{achievement.emoji}</Text>
                    </View>
                    <View style={styles.achievementText}>
                      <Text style={styles.achievementTitle}>{achievement.title}</Text>
                      <Text style={styles.achievementSubtitle}>{achievement.subtitle}</Text>
                    </View>
                  </LinearGradient>
                ))}
              </View>
            </View>
          )}

          <View style={styles.accountSection}>
            <Text style={styles.sectionTitle}>Account</Text>
            
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => navigation.navigate('Notifications')}
            >
              <View style={styles.menuItemLeft}>
                <Ionicons name="notifications-outline" size={20} color="#374151" />
                <Text style={styles.menuItemText}>Notification Preferences</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => navigation.navigate('Settings')}
            >
              <View style={styles.menuItemLeft}>
                <Ionicons name="settings-outline" size={20} color="#374151" />
                <Text style={styles.menuItemText}>Settings</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            style={styles.editButton}
            onPress={() => navigation.navigate('EditProfile')}
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
    padding: 8,
    marginLeft: -8,
    alignSelf: 'flex-start',
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
  accountSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  menuItemText: {
    fontSize: 16,
    color: '#111827',
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