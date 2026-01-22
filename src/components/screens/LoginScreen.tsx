import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../AppContext';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  const navigation = useNavigation<any>();
  const { login } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    
    setLoading(true);
    const { error } = await login(email, password);
    setLoading(false);

    if (error) {
      Alert.alert('Error', error.message || 'Failed to log in');
      return;
    }

    Alert.alert('Success', 'Welcome back!');
    navigation.navigate('Subscription');
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            style={{ padding: 8, marginLeft: -8, alignSelf: 'flex-start' }}
          >
            <Ionicons name="arrow-back" size={24} color="#111827" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Continue your journey</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <View style={styles.inputWrapper}>
                <Ionicons name="mail" size={20} color="#9ca3af" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.labelRow}>
                <Text style={styles.label}>Password</Text>
                <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                  <Text style={styles.forgotText}>Forgot?</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.inputWrapper}>
                <Ionicons name="lock-closed" size={20} color="#9ca3af" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Enter your password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                />
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity 
              style={[styles.button, loading && styles.buttonDisabled]} 
              onPress={handleLogin}
              disabled={loading}
            >
              <Text style={styles.buttonText}>{loading ? 'Logging in...' : 'Log In'}</Text>
            </TouchableOpacity>

            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signupLink}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    padding: 24,
  },
  content: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 32,
  },
  titleContainer: {
    marginBottom: 48,
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
  form: {
    gap: 24,
    marginBottom: 32,
  },
  inputContainer: {
    gap: 8,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
  forgotText: {
    fontSize: 14,
    color: '#2563eb',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    height: 48,
    paddingHorizontal: 12,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
  },
  footer: {
    marginTop: 'auto',
    paddingBottom: 32,
  },
  button: {
    backgroundColor: '#2563eb',
    borderRadius: 24,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    fontSize: 14,
    color: '#6b7280',
  },
  signupLink: {
    fontSize: 14,
    color: '#2563eb',
    fontWeight: '500',
  },
});
