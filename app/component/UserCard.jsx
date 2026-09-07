import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserCard = ({ name, status, imageUrl }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
      />

      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.status}>{status}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  status: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
});

export default UserCard;