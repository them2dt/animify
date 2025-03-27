import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function PlansScreen() {
  const [selectedBillingCycle, setSelectedBillingCycle] = useState('monthly');
  
  const handleBack = () => {
    router.back();
  };
  
  const handleSelectPlan = (plan: string) => {
    // TODO: Implement plan selection
    console.log('Selected plan:', plan, 'with billing cycle:', selectedBillingCycle);
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Subscription Plans</Text>
        <View style={styles.emptyView} />
      </View>
      
      {/* Billing Cycle Selector */}
      <View style={styles.billingSelector}>
        <TouchableOpacity 
          style={[styles.billingOption, selectedBillingCycle === 'monthly' && styles.selectedBillingOption]} 
          onPress={() => setSelectedBillingCycle('monthly')}
        >
          <Text style={[styles.billingText, selectedBillingCycle === 'monthly' && styles.selectedBillingText]}>Monthly</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.billingOption, selectedBillingCycle === 'yearly' && styles.selectedBillingOption]} 
          onPress={() => setSelectedBillingCycle('yearly')}
        >
          <Text style={[styles.billingText, selectedBillingCycle === 'yearly' && styles.selectedBillingText]}>Yearly</Text>
          <Text style={styles.savingsText}>Save 8%</Text>
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.plansContainer}
        contentContainerStyle={styles.plansContentContainer}
      >
        {/* Free Plan */}
        <View style={[styles.planCard, styles.planCardFree]}>
          <View style={styles.planHeader}>
            <Text style={styles.planName}>Free</Text>
            <Text style={styles.planPrice}>$0</Text>
          </View>
          
          <View style={styles.planFeatures}>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color="#000000" />
              <Text style={styles.featureText}>3 transforms per day</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color="#000000" />
              <Text style={styles.featureText}>Basic styles only</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color="#000000" />
              <Text style={styles.featureText}>Standard quality</Text>
            </View>
          </View>
          
          <TouchableOpacity 
            style={[styles.selectButton, styles.currentPlanButton]} 
            disabled={true}
          >
            <Text style={styles.currentPlanText}>Current Plan</Text>
          </TouchableOpacity>
        </View>
        
        {/* Essential Plan */}
        <View style={[styles.planCard, styles.planCardEssential]}>
          <View style={styles.popularTag}>
            <Text style={styles.popularTagText}>MOST POPULAR</Text>
          </View>
          
          <View style={styles.planHeader}>
            <Text style={styles.planName}>Essential</Text>
            {selectedBillingCycle === 'monthly' && <Text style={styles.planPrice}>$5/month</Text>}
            {selectedBillingCycle === 'yearly' && <Text style={styles.planPrice}>$55/year</Text>}
          </View>
          
          <View style={styles.planFeatures}>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color="#000000" />
              <Text style={styles.featureText}>50 transforms per day</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color="#000000" />
              <Text style={styles.featureText}>All styles included</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color="#000000" />
              <Text style={styles.featureText}>High quality</Text>
            </View>
          </View>
          
          <TouchableOpacity 
            style={styles.selectButton} 
            onPress={() => handleSelectPlan('essential')}
          >
            <Text style={styles.selectButtonText}>Select Plan</Text>
          </TouchableOpacity>
        </View>
        
        {/* Pro Plan */}
        <View style={[styles.planCard, styles.planCardPro]}>          
          <View style={styles.planHeader}>
            <Text style={[styles.planName, styles.proPlanText]}>Pro</Text>
            {selectedBillingCycle === 'monthly' && <Text style={[styles.planPrice, styles.proPlanText]}>$13/month</Text>}
            {selectedBillingCycle === 'yearly' && <Text style={[styles.planPrice, styles.proPlanText]}>$143/year</Text>}
          </View>
          
          <View style={styles.planFeatures}>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color="#FFFFFF" />
              <Text style={[styles.featureText, styles.proPlanText]}>Unlimited transforms</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color="#FFFFFF" />
              <Text style={[styles.featureText, styles.proPlanText]}>All styles included</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color="#FFFFFF" />
              <Text style={[styles.featureText, styles.proPlanText]}>Premium quality</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color="#FFFFFF" />
              <Text style={[styles.featureText, styles.proPlanText]}>Priority processing</Text>
            </View>
          </View>
          
          <TouchableOpacity 
            style={[styles.selectButton, styles.proSelectButton]} 
            onPress={() => handleSelectPlan('pro')}
          >
            <Text style={styles.proSelectButtonText}>Select Plan</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'Satoshi-Bold',
    color: '#000000',
  },
  emptyView: {
    width: 40,
  },
  billingSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 4,
  },
  billingOption: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 10,
  },
  selectedBillingOption: {
    backgroundColor: '#000000',
  },
  billingText: {
    fontFamily: 'Satoshi-Medium',
    fontSize: 14,
    color: '#000000',
  },
  selectedBillingText: {
    color: '#FFFFFF',
  },
  savingsText: {
    fontSize: 10,
    color: '#FF3B30',
    fontFamily: 'Satoshi-Bold',
    marginTop: 2,
  },
  plansContainer: {
    flex: 1,
    padding: 16,
  },
  plansContentContainer: {
    paddingBottom: 40,
  },
  planCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  planCardFree: {
    borderWidth: 1,
    borderColor: '#E5E5EA',
    backgroundColor: '#FFFFFF',
  },
  planCardEssential: {
    borderWidth: 2,
    borderColor: '#000000',
    position: 'relative',
    paddingTop: 30,
    backgroundColor: '#FFD700',
  },
  planCardPro: {
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#000000',
  },
  popularTag: {
    position: 'absolute',
    top: -10,
    left: '50%',
    transform: [{ translateX: -60 }],
    backgroundColor: '#000000',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    width: 120,
    alignItems: 'center',
  },
  popularTagText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontFamily: 'Satoshi-Bold',
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  planName: {
    fontSize: 20,
    fontFamily: 'Satoshi-Bold',
    color: '#000000',
  },
  planPrice: {
    fontSize: 18,
    fontFamily: 'Satoshi-Medium',
    color: '#000000',
  },
  planFeatures: {
    marginBottom: 20,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureText: {
    marginLeft: 10,
    fontSize: 14,
    fontFamily: 'Satoshi',
    color: '#000000',
  },
  selectButton: {
    backgroundColor: '#000000',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
  },
  selectButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Satoshi-Medium',
  },
  currentPlanButton: {
    backgroundColor: '#F2F2F7',
  },
  currentPlanText: {
    color: '#000000',
    opacity: 0.5,
    fontSize: 16,
    fontFamily: 'Satoshi-Medium',
  },
  proPlanText: {
    color: '#FFFFFF',
  },
  proSelectButton: {
    backgroundColor: '#FFFFFF',
  },
  proSelectButtonText: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Satoshi-Medium',
  },
}); 