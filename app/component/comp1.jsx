import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserCard from './UserCard';

export default function Comp1() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Direktori Anggota</Text>
      <UserCard name="Andi" status="Aktif" imageUrl="https://picsum.photos/100" />
      <UserCard name="Budi" status="Alumni" imageUrl="https://picsum.photos/101" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f0f0f0' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 15 }
});
