import React from 'react';
import { View, Text } from 'react-native';

export default function Func9() {
  const konversiIDRkeUSD = (rupiah) => {
    return rupiah / 15000;
  };
  let usd = konversiIDRkeUSD(300000);
  console.log('Hasil Konversi (300000 IDR):', usd);

  return (
    <View style={{ padding: 20 }}>
      <Text>300,000 IDR = ${usd} USD</Text>
    </View>
  );
}
