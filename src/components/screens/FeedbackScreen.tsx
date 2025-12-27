import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../AppContext';

export default function FeedbackScreen() {
  const navigation = useNavigation<any>();
  const { submitFeedback } = useApp();
  const [feedback, setFeedback] = useState('');
  const [category, setCategory] = useState<string>('general');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!feedback.trim()) {
      Alert.alert('Error', 'Please enter your feedback');
      return;
    }

    setLoading(true);
    const { error } = await submitFeedback(category, feedback);
    setLoading(false);

    if (error) {
      Alert.alert('Error', 'Failed to submit feedback. Please try again.');
      return;
    }

    Alert.alert('Success', 'Thank you for your feedback!');
    setFeedback('');
    setTimeout(() => navigation.goBack(), 1000);
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
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

          <Text style={styles.title}>Feedback</Text>
          <Text style={styles.subtitle}>We'd love to hear from you</Text>
        </LinearGradient>

        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.label}>Category</Text>
            <View style={styles.categoryGrid}>
              <TouchableOpacity
                style={[
                  styles.categoryButton,
                  category === 'general' && styles.categoryButtonActive
                ]}
                onPress={() => setCategory('general')}
              >
                <Text style={styles.categoryEmoji}>💬</Text>
                <Text style={[
                  styles.categoryText,
                  category === 'general' && styles.categoryTextActive
                ]}>General</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.categoryButton,
                  category === 'bug' && styles.categoryButtonActive
                ]}
                onPress={() => setCategory('bug')}
              >
                <Text style={styles.categoryEmoji}>🐛</Text>
                <Text style={[
                  styles.categoryText,
                  category === 'bug' && styles.categoryTextActive
                ]}>Bug</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.categoryButton,
                  category === 'feature' && styles.categoryButtonActive
                ]}
                onPress={() => setCategory('feature')}
              >
                <Text style={styles.categoryEmoji}>✨</Text>
                <Text style={[
                  styles.categoryText,
                  category === 'feature' && styles.categoryTextActive
                ]}>Feature</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>Your Feedback</Text>
            <TextInput
              value={feedback}
              onChangeText={setFeedback}
              placeholder="Tell us what you think..."
              placeholderTextColor="#9ca3af"
              multiline
              style={styles.textArea}
              textAlignVertical="top"
            />
          </View>

          <TouchableOpacity 
            style={styles.submitButton}
            onPress={handleSubmit}
            disabled={loading}
          >
            <Ionicons name="send" size={16} color="#ffffff" />
            <Text style={styles.submitButtonText}>{loading ? 'Sending...' : 'Send Feedback'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 12,
  },
  categoryGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  categoryButton: {
    flex: 1,
    padding: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#e5e7eb',
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  categoryButtonActive: {
    borderColor: '#2563eb',
    backgroundColor: '#eff6ff',
  },
  categoryEmoji: {
    fontSize: 24,
    marginBottom: 4,
  },
  categoryText: {
    fontSize: 12,
    color: '#6b7280',
  },
  categoryTextActive: {
    color: '#2563eb',
  },
  textArea: {
    minHeight: 200,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#111827',
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#2563eb',
    borderRadius: 24,
    height: 48,
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
