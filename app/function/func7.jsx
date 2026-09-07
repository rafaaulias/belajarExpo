import React from 'react';
import { View, Text } from 'react-native';

export default function Func7() {
  let logOutput = [];
  function jalankanHitungMundur(batas) {
    for (var i = 0; i < batas; i++) {
      console.log(i);
      logOutput.push(i);
    }
  }
  jalankanHitungMundur(4);

  return (
    <View style={{ padding: 20 }}>
      <Text>Hitung Mundur: {logOutput.join(', ')}</Text>
    </View>
  );
}
