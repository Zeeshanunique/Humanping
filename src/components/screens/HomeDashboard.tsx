import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../AppContext';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function HomeDashboard() {
  const navigation = useNavigation<any>();
  const { user, streak, missions } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);

  const completedMissions = missions.filter(m => m.completed).length;
  const todaysMission = missions.find(m => !m.completed);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <LinearGradient
          colors={['#eff6ff', '#f3e8ff']}
          style={styles.headerGradient}
        >
          <View style={styles.topBar}>
            <TouchableOpacity onPress={() => setMenuOpen(true)}>
              <Ionicons name="menu" size={24} color="#111827" />
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={() => navigation.navigate('Notifications')}
              style={styles.notificationButton}
            >
              <Ionicons name="notifications" size={24} color="#111827" />
              <View style={styles.notificationDot} />
            </TouchableOpacity>
          </View>

          <View style={styles.greeting}>
            <Text style={styles.greetingText}>
              Hello, {user?.name?.split(' ')[0] || 'Alex'}! 👋
            </Text>
            <Text style={styles.greetingSubtext}>Ready to grow today?</Text>
          </View>

          <View style={styles.statsCard}>
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <View style={styles.streakContainer}>
                  <View style={styles.fireIcon}>
                    <Text style={styles.fireEmoji}>🔥</Text>
                  </View>
                  <View>
                    <Text style={styles.statNumber}>{streak}</Text>
                    <Text style={styles.statLabel}>Day streak</Text>
                  </View>
                </View>
              </View>
              <View style={styles.statItemRight}>
                <Text style={styles.statNumber}>{completedMissions}</Text>
                <Text style={styles.statLabel}>Missions done</Text>
              </View>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.content}>
          <LinearGradient
            colors={['#2563eb', '#9333ea']}
            style={styles.missionCard}
          >
            <View style={styles.missionHeader}>
              <View style={styles.missionIconContainer}>
                <Ionicons name="radio-button-on" size={20} color="#ffffff" />
              </View>
              <View style={styles.missionTextContainer}>
                <Text style={styles.missionLabel}>Today's Mission</Text>
                <Text style={styles.missionTitle}>
                  {todaysMission?.title || 'Complete your daily mission'}
                </Text>
                <Text style={styles.missionDescription}>
                  {todaysMission?.description || 'Start a new mission to build confidence'}
                </Text>
              </View>
            </View>

            <TouchableOpacity 
              style={styles.startButton}
              onPress={() => navigation.navigate('TodaysMission')}
            >
              <Text style={styles.startButtonText}>Start Mission</Text>
            </TouchableOpacity>
          </LinearGradient>

          <View style={styles.quickActions}>
            <Text style={styles.quickActionsTitle}>Quick Actions</Text>
            
            <View style={styles.actionsGrid}>
              <TouchableOpacity 
                style={styles.actionCard}
                onPress={() => navigation.navigate('HistoryTab', { screen: 'History', params: { period: 'week' } })}
              >
                <View style={[styles.actionIcon, { backgroundColor: '#f3e8ff' }]}>
                  <Ionicons name="calendar" size={20} color="#9333ea" />
                </View>
                <Text style={styles.actionTitle}>History</Text>
                <Text style={styles.actionSubtitle}>View progress</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.actionCard}
                onPress={() => navigation.navigate('Streaks')}
              >
                <View style={[styles.actionIcon, { backgroundColor: '#fed7aa' }]}>
                  <Ionicons name="trending-up" size={20} color="#ea580c" />
                </View>
                <Text style={styles.actionTitle}>Streaks</Text>
                <Text style={styles.actionSubtitle}>{streak} days</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Drawer Menu Modal */}
      <Modal
        visible={menuOpen}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setMenuOpen(false)}
      >
        <View style={styles.modalOverlay}>
          <TouchableOpacity 
            style={styles.modalBackdrop}
            activeOpacity={1}
            onPress={() => setMenuOpen(false)}
          />
          <View style={styles.drawerContent}>
            <View style={styles.drawerHeader}>
              <LinearGradient
                colors={['#3b82f6', '#9333ea']}
                style={styles.avatar}
              >
                <Text style={styles.avatarText}>
                  {user?.name?.charAt(0) || 'A'}
                </Text>
              </LinearGradient>
              <Text style={styles.userName}>{user?.name || 'Alex Johnson'}</Text>
              <Text style={styles.userEmail}>{user?.email || 'alex@example.com'}</Text>
            </View>

            <View style={styles.drawerNav}>
              <TouchableOpacity
                style={styles.drawerItem}
                onPress={() => { navigation.navigate('ProfileTab'); setMenuOpen(false); }}
              >
                <Ionicons name="person" size={20} color="#374151" />
                <Text style={styles.drawerItemText}>Profile</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.drawerItem}
                onPress={() => { navigation.navigate('HistoryTab', { screen: 'History', params: { period: 'all' } }); setMenuOpen(false); }}
              >
                <Ionicons name="calendar" size={20} color="#374151" />
                <Text style={styles.drawerItemText}>History</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.drawerItem}
                onPress={() => { navigation.navigate('Streaks'); setMenuOpen(false); }}
              >
                <Ionicons name="trending-up" size={20} color="#374151" />
                <Text style={styles.drawerItemText}>Streaks</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.drawerItem}
                onPress={() => { navigation.navigate('Settings'); setMenuOpen(false); }}
              >
                <Ionicons name="settings" size={20} color="#374151" />
                <Text style={styles.drawerItemText}>Settings</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.drawerItem}
                onPress={() => { navigation.navigate('Feedback'); setMenuOpen(false); }}
              >
                <Ionicons name="chatbubbles" size={20} color="#374151" />
                <Text style={styles.drawerItemText}>Feedback</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
    paddingTop: 24,
    paddingBottom: 128,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  notificationButton: {
    position: 'relative',
  },
  notificationDot: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 8,
    height: 8,
    backgroundColor: '#ef4444',
    borderRadius: 4,
  },
  greeting: {
    marginBottom: 24,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  greetingSubtext: {
    fontSize: 16,
    color: '#6b7280',
  },
  statsCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    flex: 1,
  },
  streakContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  fireIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#dbeafe',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fireEmoji: {
    fontSize: 24,
  },
  statItemRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#6b7280',
  },
  content: {
    paddingHorizontal: 24,
    marginTop: -80,
    paddingBottom: 24,
  },
  missionCard: {
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  missionHeader: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  missionIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  missionTextContainer: {
    flex: 1,
  },
  missionLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 4,
  },
  missionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 8,
  },
  missionDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  startButton: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startButtonText: {
    color: '#2563eb',
    fontSize: 16,
    fontWeight: '600',
  },
  quickActions: {
    gap: 16,
  },
  quickActionsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  actionsGrid: {
    flexDirection: 'row',
    gap: 16,
  },
  actionCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    padding: 16,
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  actionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: 12,
    color: '#6b7280',
  },
  modalOverlay: {
    flex: 1,
    flexDirection: 'row',
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  drawerContent: {
    width: 320,
    backgroundColor: '#ffffff',
    paddingTop: 60,
  },
  drawerHeader: {
    padding: 24,
    marginBottom: 32,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ffffff',
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#6b7280',
  },
  drawerNav: {
    gap: 8,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 8,
    borderRadius: 8,
  },
  drawerItemText: {
    fontSize: 16,
    color: '#374151',
  },
});