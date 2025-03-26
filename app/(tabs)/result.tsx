import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function ResultScreen() {
  const handleShare = () => {
    // TODO: Implement share functionality
  };

  const handleSave = () => {
    // TODO: Implement save functionality
  };

  const handleTryAgain = () => {
    router.replace("/(tabs)");
  };

  return (
    <View style={styles.container}>
      {/* Result Image */}
      <View style={styles.imageContainer}>
        <View style={styles.imagePlaceholder} />
      </View>

      {/* Action Buttons */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={handleShare}>
          <Ionicons name="share-outline" size={24} color="#000000" />
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handleSave}>
          <Ionicons name="download-outline" size={24} color="#000000" />
          <Text style={styles.actionText}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handleTryAgain}>
          <Ionicons name="refresh-outline" size={24} color="#000000" />
          <Text style={styles.actionText}>Try Again</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700',
    padding: 16,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 32,
  },
  imagePlaceholder: {
    width: width * 0.8,
    height: width * 0.8,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 24,
  },
  actionButton: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 16,
    gap: 8,
  },
  actionText: {
    fontSize: 14,
    fontFamily: 'Satoshi-Medium',
    color: '#000000',
  },
}); 