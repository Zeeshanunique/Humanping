import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function PaymentMethodScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { plan } = route.params;

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [saveCard, setSaveCard] = useState(false);

  const formatCardNumber = (text: string) => {
    const cleaned = text.replace(/\s/g, '');
    const formatted = cleaned.match(/.{1,4}/g)?.join(' ') || cleaned;
    return formatted.substring(0, 19); // 16 digits + 3 spaces
  };

  const formatExpiryDate = (text: string) => {
    const cleaned = text.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return cleaned.substring(0, 2) + '/' + cleaned.substring(2, 4);
    }
    return cleaned;
  };

  const handleCardNumberChange = (text: string) => {
    const formatted = formatCardNumber(text);
    setCardNumber(formatted);
  };

  const handleExpiryDateChange = (text: string) => {
    const formatted = formatExpiryDate(text);
    setExpiryDate(formatted);
  };

  const handleContinue = () => {
    if (!cardNumber || !expiryDate || !cvv || !cardholderName) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (cardNumber.replace(/\s/g, '').length !== 16) {
      Alert.alert('Error', 'Please enter a valid card number');
      return;
    }

    if (expiryDate.length !== 5) {
      Alert.alert('Error', 'Please enter a valid expiry date');
      return;
    }

    if (cvv.length !== 3) {
      Alert.alert('Error', 'Please enter a valid CVV');
      return;
    }

    navigation.navigate('PaymentReview', {
      plan,
      paymentMethod: {
        cardNumber: cardNumber.substring(cardNumber.length - 4),
        cardholderName,
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment Method</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.planSummary}>
          <View style={styles.planSummaryHeader}>
            <Text style={styles.planSummaryTitle}>{plan.name} Plan</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>{plan.price}</Text>
              {plan.period !== 'forever' && (
                <Text style={styles.period}>/{plan.period}</Text>
              )}
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Card Information</Text>
            
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Card Number</Text>
              <View style={styles.inputWrapper}>
                <Ionicons name="card" size={20} color="#9ca3af" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChangeText={handleCardNumberChange}
                  keyboardType="numeric"
                  maxLength={19}
                />
              </View>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Cardholder Name</Text>
              <View style={styles.inputWrapper}>
                <Ionicons name="person" size={20} color="#9ca3af" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="John Doe"
                  value={cardholderName}
                  onChangeText={setCardholderName}
                  autoCapitalize="words"
                />
              </View>
            </View>

            <View style={styles.row}>
              <View style={[styles.inputContainer, { flex: 1 }]}>
                <Text style={styles.label}>Expiry Date</Text>
                <View style={styles.inputWrapper}>
                  <Ionicons name="calendar" size={20} color="#9ca3af" style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    placeholder="MM/YY"
                    value={expiryDate}
                    onChangeText={handleExpiryDateChange}
                    keyboardType="numeric"
                    maxLength={5}
                  />
                </View>
              </View>

              <View style={[styles.inputContainer, { flex: 1 }]}>
                <Text style={styles.label}>CVV</Text>
                <View style={styles.inputWrapper}>
                  <Ionicons name="lock-closed" size={20} color="#9ca3af" style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    placeholder="123"
                    value={cvv}
                    onChangeText={setCvv}
                    keyboardType="numeric"
                    maxLength={3}
                    secureTextEntry
                  />
                </View>
              </View>
            </View>

            <TouchableOpacity 
              style={styles.checkboxContainer}
              onPress={() => setSaveCard(!saveCard)}
            >
              <View style={[styles.checkbox, saveCard && styles.checkboxChecked]}>
                {saveCard && <Ionicons name="checkmark" size={16} color="#ffffff" />}
              </View>
              <Text style={styles.checkboxLabel}>Save card for future payments</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.securityNote}>
            <Ionicons name="shield-checkmark" size={24} color="#10b981" />
            <Text style={styles.securityNoteText}>
              Your payment information is encrypted and secure
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.continueButton} 
          onPress={handleContinue}
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 48,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  planSummary: {
    backgroundColor: '#eff6ff',
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  planSummaryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  planSummaryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2563eb',
  },
  period: {
    fontSize: 14,
    color: '#6b7280',
    marginLeft: 4,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  section: {
    gap: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  inputContainer: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    height: 48,
    paddingHorizontal: 12,
    backgroundColor: '#ffffff',
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#d1d5db',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#2563eb',
    borderColor: '#2563eb',
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#374151',
  },
  securityNote: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#f0fdf4',
    padding: 16,
    borderRadius: 12,
    marginTop: 24,
  },
  securityNoteText: {
    flex: 1,
    fontSize: 14,
    color: '#166534',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    padding: 24,
    paddingBottom: 32,
  },
  continueButton: {
    backgroundColor: '#2563eb',
    borderRadius: 24,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

