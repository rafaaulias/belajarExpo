import React from 'react';
import { View, Text } from 'react-native';

export default function Func1() {
  function tampilkanPesan() {
    console.log("Selamat Datang di Aplikasi Mobile SMK!");
  }
  tampilkanPesan();

  return (
    <View style={{ padding: 20 }}>
      <Text>Pesan berhasil ditampilkan di console.</Text>
    </View>
  );
}
