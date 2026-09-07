import React from 'react';
import { View, Text } from 'react-native';

export default function Array6() {
  let menu = ["Burger", "Pizza", "Hotdog", "Pasta"];
  menu.splice(2, 1, "Spaghetti", "Salad");
  console.log('Menu baru:', menu);

  return (
    <View style={{ padding: 20 }}>
      <Text>Menu baru: {menu.join(', ')}</Text>
    </View>
  );
}
