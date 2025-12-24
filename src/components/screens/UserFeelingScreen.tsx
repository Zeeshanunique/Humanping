import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../AppContext';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function UserFeelingScreen() {
  const navigation = useNavigation<any>();
  const { currentMission, updateMission } = useApp();
  const [selectedFeeling, setSelectedFeeling] = useState<string>('');

  const feelings = [
    { emoji: '😰', label: 'Nervous', value: 'nervous' },
    { emoji: '😟', label: 'Anxious', value: 'anxious' },
    { emoji: '😐', label: 'Neutral', value: 'neutral' },
    { emoji: '🙂', label: 'Calm', value: 'calm' },
    { emoji: '😊', label: 'Confident', value: 'confident' }
  ];

  const handleContinue = () => {
    if (currentMission && selectedFeeling) {
      updateMission(currentMission.id, { feeling: selectedFeeling });
    }
    navigation.navigate('TaskSelection');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
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

          <Text style={styles.title}>How do you feel?</Text>
          <Text style={styles.subtitle}>Let us know your current state</Text>
        </LinearGradient>

        <View style={styles.content}>
          <Text style={styles.description}>
            It's helpful to acknowledge your emotions before starting. There are no wrong answers!
          </Text>

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
  description: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 24,
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
    borderColor: '#2563eb',
    backgroundColor: '#eff6ff',
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
    backgroundColor: '#2563eb',
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
    backgroundColor: '#2563eb',
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
