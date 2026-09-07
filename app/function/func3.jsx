import React from 'react';
import { View, Text } from 'react-native';

export default function Func3() {
  function hitungPromo(harga) {
    return harga * 2;
  }
  let hasil = hitungPromo(75000);
  console.log('Harga Promo:', hasil);

  return (
    <View style={{ padding: 20 }}>
      <Text>Harga Promo: {hasil}</Text>
    </View>
  );
}
