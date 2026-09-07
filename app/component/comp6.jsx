import React, { useState } from 'react';
import { View, Text, Button, Modal, ActivityIndicator, StyleSheet } from 'react-native';

export default function ConnectionIndicator() {
  const [loading, setLoading] = useState(false);

  const handleFetch = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <View style={styles.container}>
      <Button title="Fetch Data" onPress={handleFetch} />
      <Modal visible={loading} transparent animationType="fade">
        <View style={styles.modalBg}>
          <View style={styles.modalBox}>
            <ActivityIndicator size="large" color="#007bff" />
            <Text style={styles.modalText}>Memuat data...</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  modalBg: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  modalBox: { backgroundColor: '#fff', padding: 25, borderRadius: 10, alignItems: 'center' },
  modalText: { marginTop: 10, fontWeight: 'bold' }
});
