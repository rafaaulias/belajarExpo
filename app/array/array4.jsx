import React from 'react';
import { View, Text } from 'react-native';

export default function Array4() {
  let darurat = ["Kebakaran", "Kecelakaan"];
  darurat.unshift("Medis Darurat");
  darurat.shift();
  console.log('Hasil akhir darurat:', darurat);

  return (
    <View style={{ padding: 20 }}>
      <Text>Hasil akhir darurat: {darurat.join(', ')}</Text>
    </View>
  );
}
