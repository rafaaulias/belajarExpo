import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const categories = ['Matematika', 'Fisika', 'Biologi', 'Kimia', 'Sejarah', 'Bahasa'];

export default function LearningPage() {
  return (
    <View style={styles.container}>
      <View style={{ height: 60 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((cat, idx) => (
            <View key={idx} style={styles.catBadge}>
              <Text style={styles.catText}>{cat}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <ScrollView style={styles.content}>
        <Text style={styles.articleTitle}>Artikel Pembelajaran</Text>
        <Text style={styles.articleBody}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          {'\n\n'}
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 10 },
  catBadge: { backgroundColor: '#007bff', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 20, marginHorizontal: 5, justifyContent: 'center' },
  catText: { color: '#fff', fontWeight: 'bold' },
  content: { flex: 1, padding: 15 },
  articleTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  articleBody: { fontSize: 16, lineHeight: 24 }
});
