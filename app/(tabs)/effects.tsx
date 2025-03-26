import { StyleSheet, View, TouchableOpacity, Text, FlatList, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';

const { width } = Dimensions.get('window');
const EFFECTS = [
  { id: '1', name: 'Anime', style: '#FFB6C1' },
  { id: '2', name: 'Brick', style: '#CD853F' },
  { id: '3', name: 'Claymotion', style: '#DEB887' },
  { id: '4', name: 'Cartoon', style: '#87CEEB' },
  { id: '5', name: 'Pixel', style: '#98FB98' },
  { id: '6', name: 'Watercolor', style: '#DDA0DD' },
];

const GRID_COLUMNS = 2;
const GRID_SPACING = 16;
const ITEM_WIDTH = (width - (GRID_SPACING * 3)) / GRID_COLUMNS;

export default function EffectsScreen() {
  const [selectedEffect, setSelectedEffect] = useState<string | null>(null);

  const handleEffectSelect = (effectId: string) => {
    setSelectedEffect(effectId);
  };

  const handleSubmit = () => {
    if (selectedEffect) {
      router.push('/loading');
    }
  };

  const renderEffect = ({ item }: { item: typeof EFFECTS[0] }) => (
    <TouchableOpacity
      style={[
        styles.effectItem,
        { backgroundColor: item.style },
        selectedEffect === item.id && styles.selectedEffect,
      ]}
      onPress={() => handleEffectSelect(item.id)}
    >
      <Text style={styles.effectText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Effect</Text>
      
      <FlatList
        data={EFFECTS}
        renderItem={renderEffect}
        keyExtractor={(item) => item.id}
        numColumns={GRID_COLUMNS}
        contentContainerStyle={styles.gridContainer}
        columnWrapperStyle={styles.row}
      />

      <TouchableOpacity 
        style={[
          styles.submitButton,
          !selectedEffect && styles.submitButtonDisabled
        ]}
        onPress={handleSubmit}
        disabled={!selectedEffect}
      >
        <Text style={[
          styles.submitButtonText,
          !selectedEffect && styles.submitButtonTextDisabled
        ]}>Generate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700',
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Satoshi-Bold',
    color: '#000000',
    marginBottom: 24,
    textAlign: 'center',
  },
  gridContainer: {
    paddingBottom: 24,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: GRID_SPACING,
  },
  effectItem: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  selectedEffect: {
    borderWidth: 3,
    borderColor: '#000000',
  },
  effectText: {
    fontSize: 16,
    fontFamily: 'Satoshi-Bold',
    color: '#000000',
  },
  submitButton: {
    backgroundColor: '#000000',
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 'auto',
  },
  submitButtonDisabled: {
    opacity: 0.3,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Satoshi-Medium',
  },
  submitButtonTextDisabled: {
    opacity: 0.7,
  },
}); 