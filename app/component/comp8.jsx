import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

const DATA = [
  {
    title: 'Mata Pelajaran Kejuruan',
    data: [
      { name: 'Pemrograman Perangkat Bergerak', score: 90 },
      { name: 'Basis Data', score: 88 },
      { name: 'Pemrograman Web', score: 92 }
    ]
  },
  {
    title: 'Mata Pelajaran Umum',
    data: [
      { name: 'Matematika', score: 85 },
      { name: 'Bahasa Indonesia', score: 89 },
      { name: 'Bahasa Inggris', score: 87 }
    ]
  }
];

export default function StudentDashboard() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item.name + index}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.subject}>{item.name}</Text>
            <Text style={styles.score}>{item.score}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  header: { fontSize: 18, fontWeight: 'bold', backgroundColor: '#e9ecef', padding: 8, marginTop: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between', padding: 12, borderBottomWidth: 1, borderBottomColor: '#eee' },
  subject: { fontSize: 15 },
  score: { fontWeight: 'bold' }
});
