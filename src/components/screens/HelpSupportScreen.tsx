import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function HelpSupportScreen() {
  const navigation = useNavigation<any>();

  const handleContact = () => {
    Linking.openURL('mailto:support@humanping.app?subject=Support Request');
  };

  const handleFAQ = () => {
    Alert.alert('FAQ', 'Frequently asked questions coming soon!');
  };

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

          <Text style={styles.title}>Help & Support</Text>
          <Text style={styles.subtitle}>We're here to help you</Text>
        </LinearGradient>

        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Get Help</Text>
            
            <TouchableOpacity 
              style={styles.helpCard}
              onPress={() => navigation.navigate('Feedback')}
            >
              <View style={styles.helpIcon}>
                <Ionicons name="chatbubble-ellipses" size={24} color="#2563eb" />
              </View>
              <View style={styles.helpContent}>
                <Text style={styles.helpTitle}>Send Feedback</Text>
                <Text style={styles.helpSubtitle}>Share your thoughts and suggestions</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.helpCard}
              onPress={handleContact}
            >
              <View style={styles.helpIcon}>
                <Ionicons name="mail" size={24} color="#2563eb" />
              </View>
              <View style={styles.helpContent}>
                <Text style={styles.helpTitle}>Contact Support</Text>
                <Text style={styles.helpSubtitle}>Email us for assistance</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Resources</Text>
            
            <View style={styles.infoCard}>
              <Ionicons name="information-circle" size={24} color="#6b7280" />
              <View style={styles.infoContent}>
                <Text style={styles.infoTitle}>About HumanPing</Text>
                <Text style={styles.infoText}>
                  HumanPing helps you build confidence through small, daily social interactions. 
                  Complete missions, track your progress, and grow at your own pace.
                </Text>
              </View>
            </View>

            <View style={styles.infoCard}>
              <Ionicons name="shield-checkmark" size={24} color="#6b7280" />
              <View style={styles.infoContent}>
                <Text style={styles.infoTitle}>Privacy & Safety</Text>
                <Text style={styles.infoText}>
                  All missions are designed to be safe and can be completed at your comfort level. 
                  Your data is secure and private.
                </Text>
              </View>
            </View>
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
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  helpCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  helpIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#eff6ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  helpContent: {
    flex: 1,
  },
  helpTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 4,
  },
  helpSubtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
  infoCard: {
    flexDirection: 'row',
    backgroundColor: '#f9fafb',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  infoContent: {
    flex: 1,
    marginLeft: 12,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
});

