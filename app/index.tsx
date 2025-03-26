import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  const handleContinue = () => {
    router.push('/(onboarding)/1');
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Turn your photos</Text>
          <Text style={styles.heading}>into magic,{' '}
            <Text style={styles.headingBlack}>for free.</Text>
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleContinue}>
            <Text style={styles.buttonText}>continue with apple</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.button} onPress={handleContinue}>
            <Text style={styles.buttonText}>continue with gmail</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.termsText}>
          By creating an account, you're accepting our{' '}
          <Text style={styles.termsLink}>terms and services</Text>.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700', // Bright yellow background
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },
  textContainer: {
    marginBottom: 40,
  },
  heading: {
    fontSize: 32,
    lineHeight: 38,
    color: 'rgba(0, 0, 0, 0.2)',
    fontFamily: 'Satoshi-Bold',
  },
  headingBlack: {
    fontSize: 32,
    lineHeight: 38,
    color: '#000000',
    fontFamily: 'Satoshi-Bold',
  },
  buttonContainer: {
    gap: 12,
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Satoshi-Medium',
  },
  termsText: {
    textAlign: 'center',
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.6)',
    fontFamily: 'Satoshi',
    paddingHorizontal: 24,
  },
  termsLink: {
    textDecorationLine: 'underline',
    fontFamily: 'Satoshi',
  },
});
