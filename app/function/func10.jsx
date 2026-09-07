import React from 'react';
import { View, Text } from 'react-native';

export default function Func10() {
  const formatNamaLengkap = (...rest) => {
    let [depan, belakang] = rest;
    return `${depan} ${belakang}`;
  };
  let nama = formatNamaLengkap("Siti", "Aisyah");
  console.log('Nama Lengkap:', nama);

  return (
    <View style={{ padding: 20 }}>
      <Text>Nama Lengkap: {nama}</Text>
    </View>
  );
}
