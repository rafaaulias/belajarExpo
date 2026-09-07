import React from 'react';
import { View, Text } from 'react-native';

export default function Func4() {
  function jumlahkanBelanja(hargaBarangA, hargaBarangB) {
    return hargaBarangA + hargaBarangB;
  }
  let total = jumlahkanBelanja(120000, 85000);
  console.log('Total Belanja:', total);

  return (
    <View style={{ padding: 20 }}>
      <Text>Total Belanja: {total}</Text>
    </View>
  );
}
