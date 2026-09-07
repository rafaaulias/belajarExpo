import React, { useState } from 'react';
import { View, Image, ActivityIndicator, StyleSheet } from 'react-native';

export function CustomImage({ source, style }) {
  const [loading, setLoading] = useState(false);

  return (
    <View style={[style, styles.container]}>
      <Image
        source={source}
        style={style}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="small" color="#007bff" />
        </View>
      )}
    </View>
  );
}

export default function Comp7() {
  return (
    <View style={styles.screen}>
      <CustomImage
        source={{ uri: 'https://picsum.photos/300/200' }}
        style={{ width: 300, height: 200, borderRadius: 8 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  container: { justifyContent: 'center', alignItems: 'center' },
  loader: { position: 'absolute' }
});
