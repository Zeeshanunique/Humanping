import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../AppContext';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function TaskCompletionScreen() {
  const navigation = useNavigation<any>();
  const { currentMission, updateMission, incrementStreak } = useApp();

  const handleComplete = () => {
    if (currentMission) {
      updateMission(currentMission.id, {
        completed: true,
        date: new Date().toISOString().split('T')[0]
      });
      incrementStreak();
    }
    Alert.alert('Success', 'Mission completed! 🎉');
    navigation.navigate('HomeTab');
  };

  const handleShare = () => {
    Alert.alert('Info', 'Sharing functionality coming soon!');
  };

  return (
    <LinearGradient
      colors={['#2563eb', '#9333ea']}
      style={styles.container}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <View style={styles.trophyContainer}>
            <View style={styles.trophyCircle}>
              <Ionicons name="trophy" size={64} color="#fbbf24" />
            </View>
          </View>

          <Text style={styles.title}>Mission Complete!</Text>
          <Text style={styles.subtitle}>
            You did it! Every small step builds your confidence.
          </Text>

          <View style={styles.missionCard}>
            <Text style={styles.missionLabel}>Today's Mission</Text>
            <Text style={styles.missionTitle}>{currentMission?.title}</Text>
            
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>+10</Text>
                <Text style={styles.statLabel}>Points</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.statItem}>
                <Text style={styles.statEmoji}>🔥</Text>
                <Text style={styles.statLabel}>Streak</Text>
              </View>
            </View>

            <View style={styles.feelingsSection}>
              {currentMission?.feeling && (
                <View style={styles.feelingCard}>
                  <Text style={styles.feelingLabel}>Before</Text>
                  <Text style={styles.feelingValue}>
                    {currentMission.feeling.charAt(0).toUpperCase() + currentMission.feeling.slice(1)}
                  </Text>
                </View>
              )}
              {currentMission?.postFeeling && (
                <View style={styles.feelingCard}>
                  <Text style={styles.feelingLabel}>After</Text>
                  <Text style={styles.feelingValue}>
                    {currentMission.postFeeling.charAt(0).toUpperCase() + currentMission.postFeeling.slice(1)}
                  </Text>
                </View>
              )}
            </View>
          </View>

          <View style={styles.encouragementCard}>
            <Ionicons name="sparkles" size={24} color="#fbbf24" />
            <Text style={styles.encouragementText}>
              You're building confidence one mission at a time. Keep going!
            </Text>
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity 
              style={styles.homeButton}
              onPress={handleComplete}
            >
              <Text style={styles.homeButtonText}>Back to Home</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.shareButton}
              onPress={handleShare}
            >
              <Ionicons name="share-social" size={16} color="#ffffff" />
              <Text style={styles.shareButtonText}>Share Achievement</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  content: {
    alignItems: 'center',
  },
  trophyContainer: {
    marginBottom: 32,
  },
  trophyCircle: {
    width: 128,
    height: 128,
    backgroundColor: '#ffffff',
    borderRadius: 64,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    marginBottom: 32,
    maxWidth: 384,
  },
  missionCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    width: '100%',
    maxWidth: 384,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  missionLabel: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 8,
    textAlign: 'center',
  },
  missionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 24,
    textAlign: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
    marginBottom: 24,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  statEmoji: {
    fontSize: 24,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  divider: {
    width: 1,
    height: 48,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  feelingsSection: {
    gap: 12,
  },
  feelingCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 12,
  },
  feelingLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 4,
  },
  feelingValue: {
    fontSize: 16,
    color: '#ffffff',
  },
  encouragementCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    width: '100%',
    maxWidth: 384,
  },
  encouragementText: {
    flex: 1,
    fontSize: 14,
    color: '#ffffff',
  },
  buttons: {
    width: '100%',
    maxWidth: 384,
    gap: 12,
  },
  homeButton: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeButtonText: {
    color: '#2563eb',
    fontSize: 16,
    fontWeight: '600',
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderWidth: 2,
    borderColor: '#ffffff',
    borderRadius: 24,
    height: 48,
  },
  shareButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
