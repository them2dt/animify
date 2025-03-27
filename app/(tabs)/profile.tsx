import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function ProfileScreen() {
  const handleBack = () => {
    router.back();
  };

  const handleUpgrade = () => {
    router.push('/(tabs)/plans');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={styles.emptyView} />
      </View>

      <View style={styles.content}>
        {/* Subscription Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Subscription</Text>
          
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.planName}>Free Plan</Text>
              <TouchableOpacity style={styles.upgradeButton} onPress={handleUpgrade}>
                <Text style={styles.upgradeButtonText}>Upgrade</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.planDetails}>
              <Text style={styles.planDetail}>• 5 transforms per day</Text>
              <Text style={styles.planDetail}>• Basic styles only</Text>
              <Text style={styles.planDetail}>• Standard quality</Text>
            </View>
          </View>
        </View>

        {/* Usage Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Usage</Text>
          
          <View style={styles.card}>
            <View style={styles.usageItem}>
              <Text style={styles.usageLabel}>Daily transforms</Text>
              <View style={styles.usageBar}>
                <View style={[styles.usageProgress, { width: '40%' }]} />
              </View>
              <Text style={styles.usageText}>2/5 used today</Text>
            </View>
          </View>
        </View>
      </View>
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
  content: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Satoshi-Bold',
    color: '#000000',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  planName: {
    fontSize: 18,
    fontFamily: 'Satoshi-Bold',
    color: '#000000',
  },
  upgradeButton: {
    backgroundColor: '#000000',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  upgradeButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Satoshi-Medium',
  },
  planDetails: {
    gap: 8,
  },
  planDetail: {
    fontSize: 14,
    fontFamily: 'Satoshi',
    color: '#000000',
  },
  usageItem: {
    gap: 8,
  },
  usageLabel: {
    fontSize: 14,
    fontFamily: 'Satoshi-Medium',
    color: '#000000',
  },
  usageBar: {
    height: 8,
    backgroundColor: '#F2F2F7',
    borderRadius: 4,
    overflow: 'hidden',
  },
  usageProgress: {
    height: '100%',
    backgroundColor: '#FFD700',
    borderRadius: 4,
  },
  usageText: {
    fontSize: 12,
    fontFamily: 'Satoshi',
    color: '#666666',
  },
}); 