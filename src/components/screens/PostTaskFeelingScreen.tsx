import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../AppContext';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function PostTaskFeelingScreen() {
  const navigation = useNavigation<any>();
  const { currentMission, updateMission } = useApp();
  const [selectedFeeling, setSelectedFeeling] = useState<string>('');

  const feelings = [
    { emoji: '😣', label: 'Uncomfortable', value: 'uncomfortable' },
    { emoji: '😐', label: 'Okay', value: 'okay' },
    { emoji: '🙂', label: 'Good', value: 'good' },
    { emoji: '😊', label: 'Proud', value: 'proud' },
    { emoji: '🤩', label: 'Accomplished', value: 'accomplished' }
  ];

  const handleContinue = () => {
    if (currentMission && selectedFeeling) {
      updateMission(currentMission.id, { postFeeling: selectedFeeling });
    }
    navigation.navigate('TaskCompletion');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <LinearGradient
          colors={['#dcfce7', '#d1fae5']}
          style={styles.header}
        >
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={styles.backButton}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons name="arrow-back" size={24} color="#111827" />
          </TouchableOpacity>

          <Text style={styles.title}>How do you feel now?</Text>
          <Text style={styles.subtitle}>Reflect on your experience</Text>
        </LinearGradient>

        <View style={styles.content}>
          <View style={styles.encouragementCard}>
            <Text style={styles.encouragementEmoji}>🎉</Text>
            <Text style={styles.encouragementText}>
              Great job completing the mission! Your feelings are valid, whatever they may be.
            </Text>
          </View>

          <View style={styles.feelingsList}>
            {feelings.map((feeling) => (
              <TouchableOpacity
                key={feeling.value}
                style={[
                  styles.feelingButton,
                  selectedFeeling === feeling.value && styles.feelingButtonActive
                ]}
                onPress={() => setSelectedFeeling(feeling.value)}
              >
                <Text style={styles.feelingEmoji}>{feeling.emoji}</Text>
                <Text style={[
                  styles.feelingLabel,
                  selectedFeeling === feeling.value && styles.feelingLabelActive
                ]}>
                  {feeling.label}
                </Text>
                {selectedFeeling === feeling.value && (
                  <View style={styles.checkIcon}>
                    <Ionicons name="checkmark" size={16} color="#ffffff" />
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={[
            styles.continueButton,
            !selectedFeeling && styles.continueButtonDisabled
          ]}
          onPress={handleContinue}
          disabled={!selectedFeeling}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
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
    padding: 8,
    marginLeft: -8,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  encouragementCard: {
    backgroundColor: '#dcfce7',
    borderWidth: 1,
    borderColor: '#bbf7d0',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    gap: 8,
    marginBottom: 24,
  },
  encouragementEmoji: {
    fontSize: 18,
  },
  encouragementText: {
    flex: 1,
    fontSize: 16,
    color: '#166534',
  },
  feelingsList: {
    gap: 12,
  },
  feelingButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#e5e7eb',
    backgroundColor: '#ffffff',
    gap: 16,
  },
  feelingButtonActive: {
    borderColor: '#16a34a',
    backgroundColor: '#dcfce7',
  },
  feelingEmoji: {
    fontSize: 40,
  },
  feelingLabel: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
  },
  feelingLabelActive: {
    fontWeight: '600',
  },
  checkIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#16a34a',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 16,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  continueButton: {
    backgroundColor: '#16a34a',
    borderRadius: 24,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueButtonDisabled: {
    opacity: 0.5,
  },
  continueButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
