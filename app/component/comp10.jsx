import React, { useState } from 'react';
import { View, Text, Switch, Button, StyleSheet } from 'react-native';

export default function PrivacySettings() {
  const [agreed, setAgreed] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Switch value={agreed} onValueChange={setAgreed} />
        <Text style={styles.label}>Saya menyetujui Syarat & Ketentuan</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="Submit" disabled={!agreed} onPress={() => console.log('submitted')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  label: { marginLeft: 10, flex: 1 },
  buttonWrapper: { marginTop: 10 }
});
