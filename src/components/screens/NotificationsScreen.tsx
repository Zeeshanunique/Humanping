import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function NotificationsScreen() {
  const navigation = useNavigation<any>();

  const notifications = [
    {
      id: 1,
      type: 'success',
      title: 'Mission Completed! 🎉',
      message: 'You completed "Say hi to your neighbor"',
      time: '2 hours ago',
      iconName: 'checkmark-circle' as const,
      iconColor: '#16a34a',
      bgColor: '#dcfce7',
    },
    {
      id: 2,
      type: 'info',
      title: 'New Mission Available',
      message: 'Your daily mission is ready to start',
      time: '1 day ago',
      iconName: 'information-circle' as const,
      iconColor: '#2563eb',
      bgColor: '#dbeafe',
    },
    {
      id: 3,
      type: 'streak',
      title: '5 Day Streak! 🔥',
      message: 'Keep up the amazing work',
      time: '2 days ago',
      iconName: 'alert-circle' as const,
      iconColor: '#ea580c',
      bgColor: '#fed7aa',
    },
    {
      id: 4,
      type: 'success',
      title: 'Achievement Unlocked',
      message: 'You earned the "Social Butterfly" badge',
      time: '3 days ago',
      iconName: 'checkmark-circle' as const,
      iconColor: '#9333ea',
      bgColor: '#f3e8ff',
    }
  ];

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

          <View style={styles.headerRow}>
            <Text style={styles.title}>Notifications</Text>
            <TouchableOpacity>
              <Text style={styles.markAllText}>Mark all read</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        <View style={styles.content}>
          <View style={styles.notificationsList}>
            {notifications.map((notification) => (
              <View
                key={notification.id}
                style={styles.notificationCard}
              >
                <View style={styles.notificationContent}>
                  <View style={[styles.iconContainer, { backgroundColor: notification.bgColor }]}>
                    <Ionicons 
                      name={notification.iconName} 
                      size={20} 
                      color={notification.iconColor} 
                    />
                  </View>
                  <View style={styles.notificationText}>
                    <Text style={styles.notificationTitle}>{notification.title}</Text>
                    <Text style={styles.notificationMessage}>{notification.message}</Text>
                    <Text style={styles.notificationTime}>{notification.time}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>

          {notifications.length === 0 && (
            <View style={styles.emptyState}>
              <View style={styles.emptyIcon}>
                <Ionicons name="checkmark-circle" size={32} color="#9ca3af" />
              </View>
              <Text style={styles.emptyText}>No notifications</Text>
            </View>
          )}
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
    paddingBottom: 32,
  },
  backButton: {
    marginBottom: 24,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
  },
  markAllText: {
    fontSize: 14,
    color: '#2563eb',
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  notificationsList: {
    gap: 12,
  },
  notificationCard: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    padding: 16,
  },
  notificationContent: {
    flexDirection: 'row',
    gap: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationText: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  notificationTime: {
    fontSize: 12,
    color: '#9ca3af',
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 48,
  },
  emptyIcon: {
    width: 64,
    height: 64,
    backgroundColor: '#f3f4f6',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 16,
    color: '#6b7280',
  },
});
