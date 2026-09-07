import React from 'react';
import { View, Text } from 'react-native';

export default function Array9() {
  let semuaNilai = [95, 88, 90, 85, 78, 82];
  let [nilaiUtama, ...sisaNilai] = semuaNilai;
  console.log('Nilai Utama:', nilaiUtama);
  console.log('Sisa Nilai:', sisaNilai);

  return (
    <View style={{ padding: 20 }}>
      <Text>Nilai Utama: {nilaiUtama}</Text>
      <Text>Sisa Nilai: {sisaNilai.join(', ')}</Text>
    </View>
  );
}
