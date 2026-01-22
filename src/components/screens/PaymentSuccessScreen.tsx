import { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function PaymentSuccessScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { plan } = route.params;

  const scaleAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleContinue = () => {
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Animated.View 
          style={[
            styles.iconContainer,
            {
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          <View style={styles.iconCircle}>
            <Ionicons name="checkmark" size={64} color="#ffffff" />
          </View>
        </Animated.View>

        <Animated.View style={[styles.textContainer, { opacity: fadeAnim }]}>
          <Text style={styles.title}>Payment Successful!</Text>
          <Text style={styles.subtitle}>
            Welcome to {plan.name}! Your subscription is now active.
          </Text>
        </Animated.View>

        <Animated.View style={[styles.detailsCard, { opacity: fadeAnim }]}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Plan</Text>
            <Text style={styles.detailValue}>{plan.name}</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Amount</Text>
            <Text style={styles.detailValue}>{plan.price}</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Next Billing</Text>
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
        </Animated.View>

        <Animated.View style={[styles.benefitsContainer, { opacity: fadeAnim }]}>
          <View style={styles.benefitRow}>
            <Ionicons name="checkmark-circle" size={24} color="#10b981" />
            <Text style={styles.benefitText}>Full access to all premium features</Text>
          </View>
          <View style={styles.benefitRow}>
            <Ionicons name="checkmark-circle" size={24} color="#10b981" />
            <Text style={styles.benefitText}>Priority customer support</Text>
          </View>
          <View style={styles.benefitRow}>
            <Ionicons name="checkmark-circle" size={24} color="#10b981" />
            <Text style={styles.benefitText}>Cancel anytime from settings</Text>
          </View>
        </Animated.View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.continueButton} 
          onPress={handleContinue}
        >
          <Text style={styles.continueButtonText}>Continue to App</Text>
        </TouchableOpacity>
        
        <Text style={styles.footerNote}>
          A receipt has been sent to your email
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 32,
  },
  iconCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#10b981',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#10b981',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  detailsCard: {
    width: '100%',
    backgroundColor: '#f9fafb',
    borderRadius: 16,
    padding: 20,
    marginBottom: 32,
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
    fontWeight: '600',
    color: '#111827',
  },
  separator: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 4,
  },
  benefitsContainer: {
    width: '100%',
    gap: 16,
  },
  benefitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  benefitText: {
    flex: 1,
    fontSize: 14,
    color: '#374151',
  },
  footer: {
    padding: 24,
    paddingBottom: 32,
  },
  continueButton: {
    backgroundColor: '#2563eb',
    borderRadius: 24,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  continueButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  footerNote: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
  },
});

