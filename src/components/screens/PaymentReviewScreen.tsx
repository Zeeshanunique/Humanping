import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function PaymentReviewScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { plan, paymentMethod } = route.params;
  const [loading, setLoading] = useState(false);

  const handleConfirmPayment = () => {
    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('PaymentSuccess', { plan });
    }, 2000);
  };

  const taxRate = 0.1; // 10% tax
  const basePrice = parseFloat(plan.price.replace('$', '')) || 0;
  const tax = basePrice * taxRate;
  const total = basePrice + tax;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          style={styles.backButton}
          disabled={loading}
        >
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Review Payment</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Subscription Details</Text>
            <View style={styles.card}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Plan</Text>
                <Text style={styles.detailValue}>{plan.name}</Text>
              </View>
              <View style={styles.separator} />
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Billing Cycle</Text>
                <Text style={styles.detailValue}>
                  {plan.period === 'forever' ? 'One-time' : `Monthly`}
                </Text>
              </View>
              <View style={styles.separator} />
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Next Billing Date</Text>
                <Text style={styles.detailValue}>
                  {plan.period === 'forever' 
                    ? 'N/A' 
                    : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })
                  }
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Payment Method</Text>
            <View style={styles.card}>
              <View style={styles.paymentMethodRow}>
                <View style={styles.cardIcon}>
                  <Ionicons name="card" size={24} color="#2563eb" />
                </View>
                <View style={styles.cardDetails}>
                  <Text style={styles.cardName}>{paymentMethod.cardholderName}</Text>
                  <Text style={styles.cardNumber}>•••• {paymentMethod.cardNumber}</Text>
                </View>
                <TouchableOpacity 
                  onPress={() => navigation.goBack()}
                  disabled={loading}
                >
                  <Text style={styles.changeText}>Change</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Payment Summary</Text>
            <View style={styles.card}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Subtotal</Text>
                <Text style={styles.detailValue}>${basePrice.toFixed(2)}</Text>
              </View>
              <View style={styles.separator} />
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Tax (10%)</Text>
                <Text style={styles.detailValue}>${tax.toFixed(2)}</Text>
              </View>
              <View style={styles.separator} />
              <View style={styles.detailRow}>
                <Text style={styles.totalLabel}>Total</Text>
                <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
              </View>
            </View>
          </View>

          <View style={styles.termsContainer}>
            <Ionicons name="information-circle" size={20} color="#6b7280" />
            <Text style={styles.termsText}>
              By confirming this payment, you agree to our Terms of Service and Privacy Policy. 
              You can cancel anytime from your account settings.
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={[styles.confirmButton, loading && styles.confirmButtonDisabled]} 
          onPress={handleConfirmPayment}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#ffffff" />
          ) : (
            <Text style={styles.confirmButtonText}>
              Confirm Payment • ${total.toFixed(2)}
            </Text>
          )}
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
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  detailLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  totalValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563eb',
  },
  separator: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 4,
  },
  paymentMethodRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cardIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#eff6ff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardDetails: {
    flex: 1,
  },
  cardName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 4,
  },
  cardNumber: {
    fontSize: 14,
    color: '#6b7280',
  },
  changeText: {
    fontSize: 14,
    color: '#2563eb',
    fontWeight: '500',
  },
  termsContainer: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: '#f9fafb',
    padding: 16,
    borderRadius: 12,
    marginTop: 8,
  },
  termsText: {
    flex: 1,
    fontSize: 12,
    color: '#6b7280',
    lineHeight: 18,
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
  confirmButton: {
    backgroundColor: '#2563eb',
    borderRadius: 24,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmButtonDisabled: {
    opacity: 0.7,
  },
  confirmButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

