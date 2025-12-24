import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useApp } from '../AppContext';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function HistoryScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const params = route.params as { period?: string } | undefined;
  const [period, setPeriod] = useState(params?.period || 'all');
  const { missions } = useApp();

  const completedMissions = missions.filter(m => m.completed);

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

          <Text style={styles.title}>Mission History</Text>
          
          <View style={styles.tabs}>
            <TouchableOpacity 
              style={[styles.tab, period === 'all' && styles.tabActive]}
              onPress={() => setPeriod('all')}
            >
              <Text style={[styles.tabText, period === 'all' && styles.tabTextActive]}>
                All Time
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.tab, period === 'week' && styles.tabActive]}
              onPress={() => setPeriod('week')}
            >
              <Text style={[styles.tabText, period === 'week' && styles.tabTextActive]}>
                Week
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.tab, period === 'month' && styles.tabActive]}
              onPress={() => setPeriod('month')}
            >
              <Text style={[styles.tabText, period === 'month' && styles.tabTextActive]}>
                Month
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        <View style={styles.content}>
          <View style={styles.statsCard}>
            <Text style={styles.statsNumber}>{completedMissions.length}</Text>
            <Text style={styles.statsLabel}>Missions Completed</Text>
          </View>

          <View style={styles.missionsList}>
            {completedMissions.map((mission) => (
              <View key={mission.id} style={styles.missionCard}>
                <View style={styles.missionIcon}>
                  <Ionicons name="checkmark-circle" size={20} color="#16a34a" />
                </View>
                <View style={styles.missionContent}>
                  <Text style={styles.missionTitle}>{mission.title}</Text>
                  <Text style={styles.missionDescription}>{mission.description}</Text>
                  <View style={styles.missionMeta}>
                    <View style={styles.metaItem}>
                      <Ionicons name="time" size={12} color="#9ca3af" />
                      <Text style={styles.metaText}>{mission.date}</Text>
                    </View>
                    {mission.location && (
                      <View style={styles.metaItem}>
                        <Text style={styles.metaEmoji}>📍</Text>
                        <Text style={styles.metaText}>{mission.location}</Text>
                      </View>
                    )}
                  </View>
                  {mission.postFeeling && (
                    <View style={styles.feelingBadge}>
                      <Text style={styles.feelingText}>Felt {mission.postFeeling}</Text>
                    </View>
                  )}
                </View>
              </View>
            ))}

            {completedMissions.length === 0 && (
              <View style={styles.emptyState}>
                <View style={styles.emptyIcon}>
                  <Ionicons name="time" size={32} color="#9ca3af" />
                </View>
                <Text style={styles.emptyTitle}>No completed missions yet</Text>
                <Text style={styles.emptySubtitle}>Start your first mission to see your history</Text>
              </View>
            )}
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
  header: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 32,
  },
  backButton: {
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 6,
  },
  tabActive: {
    backgroundColor: '#2563eb',
  },
  tabText: {
    fontSize: 14,
    color: '#6b7280',
  },
  tabTextActive: {
    color: '#ffffff',
    fontWeight: '600',
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  statsCard: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
  },
  statsNumber: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  statsLabel: {
    fontSize: 16,
    color: '#6b7280',
  },
  missionsList: {
    gap: 12,
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
  missionContent: {
    flex: 1,
  },
  missionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 4,
  },
  missionDescription: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  missionMeta: {
    flexDirection: 'row',
    gap: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    color: '#9ca3af',
  },
  metaEmoji: {
    fontSize: 12,
  },
  feelingBadge: {
    marginTop: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: '#dcfce7',
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  feelingText: {
    fontSize: 12,
    color: '#15803d',
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
  emptyTitle: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 4,
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#9ca3af',
  },
});