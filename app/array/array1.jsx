import React from 'react';
import { View, Text } from 'react-native';

export default function Array1() {
  let gudang = [101, 102, 103, 104, 105];
  let barangTerakhir = gudang[4];
  console.log('Barang indeks ke-4:', barangTerakhir);

  return (
    <View style={{ padding: 20 }}>
      <Text>Barang indeks ke-4: {barangTerakhir}</Text>
    </View>
  );
}
