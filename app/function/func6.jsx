import React from 'react';
import { View, Text } from 'react-native';

export default function Func6() {
  function cekKelulusan(nilaiUjian) {
    if (nilaiUjian >= 75) {
      return "Lulus Kompeten";
    } else {
      return "Remedial";
    }
  }
  let status = cekKelulusan(80);
  console.log('Status Kelulusan:', status);

  return (
    <View style={{ padding: 20 }}>
      <Text>Status (Nilai 80): {status}</Text>
    </View>
  );
}
