import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../AppContext';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function SuggestionScreen() {
  const navigation = useNavigation<any>();
  const { currentMission } = useApp();

  const suggestions = [
    'Start with a friendly smile and make eye contact',
    'Use a casual greeting like "Hi" or "Good morning"',
    'Keep it brief - you don\'t need a long conversation',
    'A simple nod and smile counts as success too'
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <LinearGradient
          colors={['#fef3c7', '#fed7aa']}
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
              colors={['#fbbf24', '#f97316']}
              style={styles.iconContainer}
            >
              <Ionicons name="bulb" size={24} color="#ffffff" />
            </LinearGradient>
            <View>
              <Text style={styles.title}>Suggestions</Text>
              <Text style={styles.subtitle}>Here are some tips</Text>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.content}>
          <View style={styles.missionCard}>
            <Text style={styles.missionTitle}>{currentMission?.title}</Text>
            <Text style={styles.missionDescription}>{currentMission?.description}</Text>
          </View>

          <Text style={styles.sectionTitle}>Ways to approach this:</Text>

          <View style={styles.suggestionsList}>
            {suggestions.map((suggestion, index) => (
              <LinearGradient
                key={index}
                colors={['#fef3c7', '#fed7aa']}
                style={styles.suggestionItem}
              >
                <LinearGradient
                  colors={['#fbbf24', '#f97316']}
                  style={styles.suggestionNumber}
                >
                  <Text style={styles.suggestionNumberText}>{index + 1}</Text>
                </LinearGradient>
                <Text style={styles.suggestionText}>{suggestion}</Text>
              </LinearGradient>
            ))}
          </View>

          <TouchableOpacity style={styles.moreButton}>
            <Ionicons name="refresh" size={16} color="#2563eb" />
            <Text style={styles.moreButtonText}>Get more suggestions</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.readyButton}
          onPress={() => navigation.navigate('TaskStatus')}
        >
          <Text style={styles.readyButtonText}>I'm Ready to Start</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.skipButton}
          onPress={() => navigation.navigate('TaskStatus')}
        >
          <Text style={styles.skipButtonText}>Skip Suggestions</Text>
        </TouchableOpacity>
      </View>
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
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 32,
  },
  backButton: {
    marginBottom: 24,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  missionCard: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  missionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  missionDescription: {
    fontSize: 14,
    color: '#374151',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  suggestionsList: {
    gap: 12,
    marginBottom: 24,
  },
  suggestionItem: {
    flexDirection: 'row',
    gap: 12,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#fed7aa',
  },
  suggestionNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  suggestionNumberText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#ffffff',
  },
  suggestionText: {
    flex: 1,
    fontSize: 16,
    color: '#374151',
  },
  moreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
  },
  moreButtonText: {
    fontSize: 16,
    color: '#2563eb',
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 16,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    gap: 12,
  },
  readyButton: {
    backgroundColor: '#2563eb',
    borderRadius: 24,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  readyButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  skipButton: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 24,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipButtonText: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '600',
  },
});
