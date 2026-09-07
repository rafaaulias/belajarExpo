import React from 'react';
import { View, Text } from 'react-native';

export default function Func8() {
  const hitungLuasPersegiPanjang = function(panjang, lebar) {
    return panjang * lebar;
  };
  let luas = hitungLuasPersegiPanjang(5, 6);
  console.log('Luas Persegi Panjang:', luas);

  return (
    <View style={{ padding: 20 }}>
      <Text>Luas (5 x 6): {luas}</Text>
    </View>
  );
}
