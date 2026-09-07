import React from 'react';
import { View, Text } from 'react-native';

export default function Array8() {
  let skorSiswa = [98, 85, 90, 75, 80];
  let [juaraSatu, juaraDua, juaraTiga] = skorSiswa;
  console.log('Juara 1:', juaraSatu);
  console.log('Juara 2:', juaraDua);
  console.log('Juara 3:', juaraTiga);

  return (
    <View style={{ padding: 20 }}>
      <Text>Juara 1: {juaraSatu}</Text>
      <Text>Juara 2: {juaraDua}</Text>
      <Text>Juara 3: {juaraTiga}</Text>
    </View>
  );
}
