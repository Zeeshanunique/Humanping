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
  const lastMission = missions.filter(m => m.completed).sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  })[0];

  const getFormattedDate = () => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
    return today.toLocaleDateString('en-US', options);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <LinearGradient
          colors={['#eff6ff', '#f3e8ff']}
          style={styles.headerGradient}
        >
          <View style={styles.topBar}>
            <TouchableOpacity 
              onPress={() => setMenuOpen(true)}
              style={styles.menuButton}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Ionicons name="menu" size={24} color="#111827" />
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={() => navigation.navigate('Notifications')}
              style={styles.notificationButton}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Ionicons name="notifications" size={24} color="#111827" />
              <View style={styles.notificationDot} />
            </TouchableOpacity>
          </View>

          <View style={styles.greeting}>
            <Text style={styles.dateText}>{getFormattedDate()}</Text>
            <Text style={styles.greetingText}>
              Hello, {user?.name?.split(' ')[0] || 'Alex'}
            </Text>
          </View>
        </LinearGradient>

        <View style={styles.content}>
          <LinearGradient
            colors={['#2563eb', '#9333ea']}
            style={styles.missionCard}
          >
            <View style={styles.missionHeader}>
              <View style={styles.missionLabels}>
                <Text style={styles.missionLabel}>Daily Mission</Text>
                <Text style={styles.missionStatus}>Ready for you</Text>
              </View>
              <View style={styles.missionTextContainer}>
                <Text style={styles.missionTitle}>
                  Today's mission is ready
                </Text>
                <Text style={styles.missionDescription}>
                  A small action to build connection and confidence.
                </Text>
              </View>

              <TouchableOpacity 
                style={styles.startButton}
                onPress={() => navigation.navigate('TodaysMission')}
              >
                <Text style={styles.startButtonText}>View Today's Mission</Text>
                <Ionicons name="chevron-forward" size={16} color="#ffffff" />
              </TouchableOpacity>
            </View>
          </LinearGradient>

          <View style={styles.encouragementText}>
            <Text style={styles.encouragementTextContent}>
              You're building a habit. Keep going.
            </Text>
          </View>

          <View style={styles.statsGrid}>
            <TouchableOpacity 
              style={styles.statCard}
              onPress={() => navigation.navigate('MissionsCompleted')}
            >
              <View style={styles.statIconContainer}>
                <Ionicons name="checkmark-circle" size={20} color="#2563eb" />
              </View>
              <Text style={styles.statNumber}>{completedMissions}</Text>
              <Text style={styles.statLabel}>Missions completed</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.statCard}
              onPress={() => navigation.navigate('HistoryTab', { screen: 'History', params: { period: 'all' } })}
            >
              <View style={styles.statIconContainer}>
                <Ionicons name="time" size={20} color="#9333ea" />
              </View>
              <Text style={styles.statNumber}>Last</Text>
              <Text style={styles.statLabel}>View history</Text>
            </TouchableOpacity>
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
          <View style={styles.drawerContent}>
            <View style={styles.drawerHeader}>
              <TouchableOpacity 
                style={styles.closeButton}
                onPress={() => setMenuOpen(false)}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <Ionicons name="close" size={24} color="#111827" />
              </TouchableOpacity>
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
          <TouchableOpacity 
            style={styles.modalBackdrop}
            activeOpacity={1}
            onPress={() => setMenuOpen(false)}
          />
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
  menuButton: {
    padding: 8,
    marginLeft: -8,
  },
  notificationButton: {
    position: 'relative',
    padding: 8,
    marginRight: -8,
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
  dateText: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  content: {
    paddingHorizontal: 24,
    marginTop: -80,
    paddingBottom: 24,
  },
  missionCard: {
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  missionHeader: {
    gap: 16,
  },
  missionLabels: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 4,
  },
  missionLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
  },
  missionStatus: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
  },
  missionTextContainer: {
    gap: 8,
  },
  missionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
  },
  missionDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 20,
  },
  startButton: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 8,
  },
  startButtonText: {
    color: '#2563eb',
    fontSize: 16,
    fontWeight: '600',
  },
  encouragementText: {
    marginBottom: 16,
    alignItems: 'center',
  },
  encouragementTextContent: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    padding: 16,
  },
  statIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f3f4f6',
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
    fontSize: 12,
    color: '#6b7280',
  },
  modalOverlay: {
    flex: 1,
    flexDirection: 'row',
  },
  drawerContent: {
    width: 320,
    backgroundColor: '#ffffff',
    paddingTop: 60,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  drawerHeader: {
    padding: 24,
    marginBottom: 32,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 24,
    right: 24,
    padding: 4,
    zIndex: 10,
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