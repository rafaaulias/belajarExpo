import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ModeSelector() {
  const [selected, setSelected] = useState('Light Mode');
  const modes = ['Light Mode', 'Dark Mode', 'System Default'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pilih Mode Tampilan</Text>
      {modes.map((mode) => {
        const isActive = selected === mode;
        return (
          <TouchableOpacity
            key={mode}
            style={[styles.option, isActive && styles.activeOption]}
            onPress={() => setSelected(mode)}
          >
            <Text style={[styles.optionText, isActive && styles.activeText]}>{mode}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  option: { padding: 15, borderRadius: 8, borderWidth: 1, borderColor: '#ccc', marginBottom: 10, backgroundColor: '#fff' },
  activeOption: { backgroundColor: '#007bff', borderColor: '#007bff' },
  optionText: { color: '#333', fontWeight: '500' },
  activeText: { color: '#fff', fontWeight: 'bold' }
});
