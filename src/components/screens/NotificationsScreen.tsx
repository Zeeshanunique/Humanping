import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function NotificationsScreen() {
  const navigation = useNavigation<any>();

  // Empty notifications for now - will be populated when user completes missions
  const notifications: any[] = [];

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

          <View style={styles.headerRow}>
            <Text style={styles.title}>Notifications</Text>
            {notifications.length > 0 && (
              <TouchableOpacity>
                <Text style={styles.markAllText}>Mark all read</Text>
              </TouchableOpacity>
            )}
          </View>
        </LinearGradient>

        <View style={styles.content}>
          {notifications.length === 0 ? (
            <View style={styles.emptyState}>
              <Ionicons name="notifications-off" size={64} color="#d1d5db" />
              <Text style={styles.emptyTitle}>No notifications yet</Text>
              <Text style={styles.emptyMessage}>
                You'll see updates here when you complete missions
              </Text>
            </View>
          ) : (
            <View style={styles.notificationsList}>
              {notifications.map((notification: any) => (
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
    padding: 8,
    marginLeft: -8,
    alignSelf: 'flex-start',
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
    paddingVertical: 64,
    paddingHorizontal: 24,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyMessage: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
});
