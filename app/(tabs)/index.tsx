import { StyleSheet, View, TouchableOpacity, Dimensions, Text } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
const CAMERA_HEIGHT = height * 0.75; // 75% of screen height

export default function HomeScreen() {
  const handleTakePhoto = () => {
    // TODO: Implement camera capture
    router.push('/effects');
  };

  const handleOpenGallery = () => {
    // TODO: Implement gallery selection
    router.push('/effects');
  };

  const handleOpenProfile = () => {
    router.push('/(tabs)/profile');
  };

  return (
    <View style={styles.container}>
      {/* Camera Preview Container */}
      <View style={styles.cameraContainer}>
        <View style={styles.cameraPlaceholder} />
      </View>

      {/* Bottom Actions Container */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity 
          style={styles.galleryButton}
          onPress={handleOpenGallery}
        >
          <Ionicons name="images" size={24} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.captureButton}
          onPress={handleTakePhoto}
        >
          <View style={styles.captureButtonInner} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.profileButton}
          onPress={handleOpenProfile}
        >
          <Ionicons name="person-circle" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  cameraContainer: {
    height: CAMERA_HEIGHT,
    width: width,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    borderBottomLeftRadius: 25, 
    borderBottomRightRadius: 25,
  },
  cameraPlaceholder: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  actionsContainer: {
    flex: 1,
    backgroundColor: '#FFD700',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 24,
  },
  galleryButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
  },
  captureButtonInner: {
    flex: 1,
    width: '100%',
    backgroundColor: '#000000',
    borderRadius: 33,
  },
  profileButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
