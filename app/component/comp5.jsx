import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export function MyButton({ title, onPress, variant = 'primary' }) {
  const getBgColor = () => {
    if (variant === 'success') return '#28a745';
    if (variant === 'danger') return '#dc3545';
    return '#007bff';
  };

  return (
    <TouchableOpacity style={[styles.btn, { backgroundColor: getBgColor() }]} onPress={onPress}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default function Comp5() {
  return (
    <View style={styles.container}>
      <MyButton title="Primary Button" variant="primary" onPress={() => {}} />
      <MyButton title="Success Button" variant="success" onPress={() => {}} />
      <MyButton title="Danger Button" variant="danger" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', gap: 10 },
  btn: { padding: 12, borderRadius: 6, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: 'bold' }
});
