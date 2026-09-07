import React from 'react';
import { View, Text } from 'react-native';

export default function Array2() {
  let nilaiUjian = [78, 90, 65, 88, 92, 70];
  nilaiUjian.sort((a, b) => a - b);
  console.log('Nilai terurut:', nilaiUjian);

  return (
    <View style={{ padding: 20 }}>
      <Text>Nilai terurut: {nilaiUjian.join(', ')}</Text>
    </View>
  );
}
