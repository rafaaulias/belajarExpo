import React from 'react';
import { View, Text } from 'react-native';

export default function Func5() {
  function hitungOngkir(jarak, tarif = 5000) {
    return jarak * tarif;
  }
  let ongkir1 = hitungOngkir(3, 7000);
  let ongkir2 = hitungOngkir(4);
  console.log('Ongkir 1 (3 km, tarif 7000):', ongkir1);
  console.log('Ongkir 2 (4 km, default):', ongkir2);

  return (
    <View style={{ padding: 20 }}>
      <Text>Ongkir 1: {ongkir1}</Text>
      <Text>Ongkir 2: {ongkir2}</Text>
    </View>
  );
}
