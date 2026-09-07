import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const products = Array.from({ length: 50 }, (_, i) => ({
  id: String(i + 1),
  name: `Produk ${i + 1}`,
  price: `Rp ${(i + 1) * 10000}`
}));

export default function ProductList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#eee' },
  name: { fontWeight: 'bold' }
});
