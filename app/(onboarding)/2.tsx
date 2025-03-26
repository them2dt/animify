import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const { width } = Dimensions.get('window');

export default function SecondOnboarding() {
  const handleNext = () => {
    router.push('/(onboarding)/3');
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <View style={styles.placeholder} />
        </View>
        
        <View style={styles.textContainer}>
          <ThemedText style={styles.title}>Multiple Art Styles</ThemedText>
          <ThemedText style={styles.description}>
            Choose from various styles including anime, brick-style, claymotion, and many more
          </ThemedText>
        </View>

        <View style={styles.footer}>
          <View style={styles.dots}>
            <View style={styles.dot} />
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
          </View>
          
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <ThemedText style={styles.buttonText}>Next</ThemedText>
          </TouchableOpacity>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingBottom: 40,
    paddingTop: 60,
  },
  imageContainer: {
    width: width * 0.8,
    height: width * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
  },
  textContainer: {
    alignItems: 'center',
    gap: 12,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Satoshi-Bold',
    textAlign: 'center',
    color: '#000000',
  },
  description: {
    fontSize: 16,
    fontFamily: 'Satoshi',
    textAlign: 'center',
    opacity: 0.8,
    lineHeight: 24,
    color: '#000000',
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dots: {
    flexDirection: 'row',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#000000',
    opacity: 0.2,
  },
  activeDot: {
    opacity: 1,
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 25,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Satoshi-Medium',
  },
}); 