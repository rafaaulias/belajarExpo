import React from 'react';
import { View, Text } from 'react-native';

export default function Func2() {
  function dapatkanKodeUnik() {
    return 404;
  }
  let kode = dapatkanKodeUnik();
  console.log('Kode Unik:', kode);

  return (
    <View style={{ padding: 20 }}>
      <Text>Kode Unik: {kode}</Text>
    </View>
  );
}
