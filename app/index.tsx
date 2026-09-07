// import { Text, View } from "react-native";
// import Soal10 from "./kondisi/kondisi10";
// import Soal6 from "./kondisi/kondisi6";

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >   
//     <Soal6></Soal6>
//     </View>
  
//   );  
// }

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserCard from './component/UserCard';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Anggota Komunitas</Text>

      <UserCard
        name="Fidan"
        status="Aktif"
        imageUrl="https://i.pravatar.cc/150?img=1"
      />

      <UserCard
        name="Ardiono"
        status="Alumni"
        imageUrl="https://i.pravatar.cc/150?img=2"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});