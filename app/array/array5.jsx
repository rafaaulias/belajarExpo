import React from 'react';
import { View, Text } from 'react-native';

export default function Array5() {
  let transaksi = [1000, 2500, 3200, 4100, 5000];
  let sampelData = transaksi.slice(1, 4);
  console.log('Sampel data:', sampelData);

  return (
    <View style={{ padding: 20 }}>
      <Text>Sampel data: {sampelData.join(', ')}</Text>
    </View>
  );
}
