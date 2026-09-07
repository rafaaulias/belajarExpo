import React from 'react';
import { View, Text } from 'react-native';

export default function Array10() {
  let keranjangA = ["Sepatu", "Baju"];
  let keranjangB = ["Tas", "Topi"];
  let keranjangUtama = [...keranjangA, ...keranjangB, "Jaket"];
  console.log('Keranjang Utama:', keranjangUtama);

  return (
    <View style={{ padding: 20 }}>
      <Text>Keranjang Utama: {keranjangUtama.join(', ')}</Text>
    </View>
  );
}
