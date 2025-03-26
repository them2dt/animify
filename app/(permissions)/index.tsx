import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function PermissionsScreen() {
  const [cameraPermission, setCameraPermission] = useState(false);
  const [photoPermission, setPhotoPermission] = useState(false);

  const handleCameraPermission = () => {
    // TODO: Implement actual permission request
    setCameraPermission(!cameraPermission);
  };

  const handlePhotoPermission = () => {
    // TODO: Implement actual permission request
    setPhotoPermission(!photoPermission);
  };

  const handleContinue = () => {
    if (cameraPermission && photoPermission) {
      router.replace('/(tabs)');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Enable Permissions</Text>
          <Text style={styles.description}>
            We need a few permissions to make the magic happen
          </Text>
        </View>

        <View style={styles.permissionsContainer}>
          <TouchableOpacity 
            style={[styles.permissionButton, cameraPermission && styles.permissionEnabled]} 
            onPress={handleCameraPermission}
          >
            <View style={styles.iconContainer}>
              <Ionicons 
                name={cameraPermission ? "checkmark" : "close"} 
                size={24} 
                color={cameraPermission ? "#000" : "#FF3B30"}
              />
            </View>
            <View style={styles.permissionText}>
              <Text style={styles.permissionTitle}>Camera Access</Text>
              <Text style={styles.permissionDescription}>Required to take photos for transformation</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.permissionButton, photoPermission && styles.permissionEnabled]} 
            onPress={handlePhotoPermission}
          >
            <View style={styles.iconContainer}>
              <Ionicons 
                name={photoPermission ? "checkmark" : "close"} 
                size={24} 
                color={photoPermission ? "#000" : "#FF3B30"}
              />
            </View>
            <View style={styles.permissionText}>
              <Text style={styles.permissionTitle}>Photo Library Access</Text>
              <Text style={styles.permissionDescription}>Required to select existing photos</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={[
            styles.continueButton,
            (!cameraPermission || !photoPermission) && styles.continueButtonDisabled
          ]} 
          onPress={handleContinue}
          disabled={!cameraPermission || !photoPermission}
        >
          <Text style={[
            styles.continueButtonText,
            (!cameraPermission || !photoPermission) && styles.continueButtonTextDisabled
          ]}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
    justifyContent: 'space-between',
  },
  headerContainer: {
    alignItems: 'center',
    gap: 12,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Satoshi-Bold',
    color: '#000000',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    fontFamily: 'Satoshi',
    color: '#000000',
    opacity: 0.8,
    textAlign: 'center',
    lineHeight: 24,
  },
  permissionsContainer: {
    gap: 16,
  },
  permissionButton: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    gap: 16,
  },
  permissionEnabled: {
    backgroundColor: '#FFFFFF',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F2F2F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  permissionText: {
    flex: 1,
  },
  permissionTitle: {
    fontSize: 16,
    fontFamily: 'Satoshi-Bold',
    color: '#000000',
    marginBottom: 4,
  },
  permissionDescription: {
    fontSize: 14,
    fontFamily: 'Satoshi',
    color: '#000000',
    opacity: 0.6,
  },
  continueButton: {
    backgroundColor: '#000000',
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  continueButtonDisabled: {
    backgroundColor: '#000000',
    opacity: 0.3,
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Satoshi-Medium',
  },
  continueButtonTextDisabled: {
    opacity: 0.7,
  },
});
