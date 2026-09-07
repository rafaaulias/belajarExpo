import React from 'react';
import { View, Text } from 'react-native';

export default function Array3() {
  let antreanVaksin = [];
  antreanVaksin.push("Andi");
  antreanVaksin.push("Budi");
  antreanVaksin.push("Siti");
  antreanVaksin.pop();
  console.log('Kondisi akhir antrean:', antreanVaksin);

  return (
    <View style={{ padding: 20 }}>
      <Text>Antrean akhir: {antreanVaksin.join(', ')}</Text>
    </View>
  );
}
