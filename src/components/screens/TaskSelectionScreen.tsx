import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../AppContext';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function TaskSelectionScreen() {
  const navigation = useNavigation<any>();
  const { currentMission, updateMission } = useApp();
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  const locations = [
    { icon: '🏠', label: 'At home', value: 'home' },
    { icon: '☕', label: 'Local cafe', value: 'cafe' },
    { icon: '🏪', label: 'Store/Shop', value: 'store' },
    { icon: '🏃', label: 'Park/Outside', value: 'park' },
    { icon: '🏢', label: 'Work/School', value: 'work' },
    { icon: '🌆', label: 'Other public place', value: 'other' }
  ];

  const handleContinue = () => {
    if (currentMission && selectedLocation) {
      const locationLabel = locations.find(l => l.value === selectedLocation)?.label || selectedLocation;
      updateMission(currentMission.id, { location: locationLabel });
    }
    navigation.navigate('Suggestion');
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

          <View style={styles.headerContent}>
            <View style={styles.iconContainer}>
              <Ionicons name="location" size={24} color="#ffffff" />
            </View>
            <View>
              <Text style={styles.title}>Where are you?</Text>
              <Text style={styles.subtitle}>Select your location</Text>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.content}>
          <Text style={styles.description}>
            This helps us understand the context of your mission
          </Text>

          <View style={styles.locationsGrid}>
            {locations.map((location) => (
              <TouchableOpacity
                key={location.value}
                style={[
                  styles.locationButton,
                  selectedLocation === location.value && styles.locationButtonActive
                ]}
                onPress={() => setSelectedLocation(location.value)}
              >
                <Text style={styles.locationIcon}>{location.icon}</Text>
                <Text style={[
                  styles.locationLabel,
                  selectedLocation === location.value && styles.locationLabelActive
                ]}>
                  {location.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={[
            styles.continueButton,
            !selectedLocation && styles.continueButtonDisabled
          ]}
          onPress={handleContinue}
          disabled={!selectedLocation}
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
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconContainer: {
    width: 48,
    height: 48,
    backgroundColor: '#2563eb',
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
  description: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 24,
  },
  locationsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  locationButton: {
    width: '47%',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#e5e7eb',
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  locationButtonActive: {
    borderColor: '#2563eb',
    backgroundColor: '#eff6ff',
  },
  locationIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  locationLabel: {
    fontSize: 14,
    color: '#111827',
    textAlign: 'center',
  },
  locationLabelActive: {
    fontWeight: '600',
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
