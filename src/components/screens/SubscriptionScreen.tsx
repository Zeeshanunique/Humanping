import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function SubscriptionScreen() {
  const navigation = useNavigation<any>();
  const [selectedPlan, setSelectedPlan] = useState<string>('premium');

  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        'Daily missions',
        'Basic progress tracking',
        'Community support',
      ],
      popular: false,
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '$9.99',
      period: 'month',
      features: [
        'Everything in Free',
        'Unlimited missions',
        'Advanced analytics',
        'Priority support',
        'Exclusive content',
        'Ad-free experience',
      ],
      popular: true,
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$19.99',
      period: 'month',
      features: [
        'Everything in Premium',
        'Personalized coaching',
        'Custom mission creation',
        '24/7 support',
        'Early access to features',
      ],
      popular: false,
    },
  ];

  const handleContinue = () => {
    if (selectedPlan === 'free') {
      navigation.navigate('Main');
    } else {
      const plan = plans.find(p => p.id === selectedPlan);
      navigation.navigate('PaymentMethod', { plan });
    }
  };

  const handleSkip = () => {
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color="#111827" />
          </TouchableOpacity>
          <View style={styles.headerContent}>
            <Text style={styles.title}>Choose Your Plan</Text>
            <Text style={styles.subtitle}>Select the plan that works best for you</Text>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.plansContainer}>
            {plans.map((plan) => (
              <TouchableOpacity
                key={plan.id}
                style={[
                  styles.planCard,
                  selectedPlan === plan.id && styles.planCardSelected,
                  plan.popular && styles.planCardPopular,
                ]}
                onPress={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <View style={styles.popularBadge}>
                    <Text style={styles.popularBadgeText}>Most Popular</Text>
                  </View>
                )}
                
                <View style={styles.planHeader}>
                  <Text style={styles.planName}>{plan.name}</Text>
                  <View style={styles.priceContainer}>
                    <Text style={styles.price}>{plan.price}</Text>
                    {plan.period !== 'forever' && (
                      <Text style={styles.period}>/{plan.period}</Text>
                    )}
                  </View>
                </View>

                <View style={styles.featuresContainer}>
                  {plan.features.map((feature, index) => (
                    <View key={index} style={styles.featureRow}>
                      <Ionicons name="checkmark-circle" size={20} color="#10b981" />
                      <Text style={styles.featureText}>{feature}</Text>
                    </View>
                  ))}
                </View>

                {selectedPlan === plan.id && (
                  <View style={styles.selectedIndicator}>
                    <Ionicons name="checkmark-circle" size={24} color="#2563eb" />
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.continueButton} 
          onPress={handleContinue}
        >
          <Text style={styles.continueButtonText}>
            {selectedPlan === 'free' ? 'Continue with Free' : 'Continue to Payment'}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.skipButton} 
          onPress={handleSkip}
        >
          <Text style={styles.skipButtonText}>Skip for now</Text>
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
    paddingBottom: 180,
  },
  header: {
    padding: 24,
    paddingTop: 48,
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  headerContent: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  plansContainer: {
    gap: 16,
  },
  planCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#e5e7eb',
    padding: 24,
    position: 'relative',
  },
  planCardSelected: {
    borderColor: '#2563eb',
    backgroundColor: '#eff6ff',
  },
  planCardPopular: {
    borderColor: '#10b981',
  },
  popularBadge: {
    position: 'absolute',
    top: -12,
    alignSelf: 'center',
    backgroundColor: '#10b981',
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 12,
  },
  popularBadgeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  planHeader: {
    marginBottom: 20,
  },
  planName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
  },
  period: {
    fontSize: 16,
    color: '#6b7280',
    marginLeft: 4,
  },
  featuresContainer: {
    gap: 12,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  featureText: {
    fontSize: 14,
    color: '#374151',
    flex: 1,
  },
  selectedIndicator: {
    position: 'absolute',
    top: 16,
    right: 16,
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
    marginBottom: 12,
  },
  continueButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  skipButton: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  skipButtonText: {
    color: '#6b7280',
    fontSize: 14,
  },
});
