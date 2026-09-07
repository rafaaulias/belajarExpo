import React from 'react';
import { View, Text } from 'react-native';

export default function Array7() {
  let judul = "belajar pemrograman perangkat bergerak smk";
  let slug = judul.split(" ").join("-");
  console.log('Slug:', slug);

  return (
    <View style={{ padding: 20 }}>
      <Text>Slug: {slug}</Text>
    </View>
  );
}
