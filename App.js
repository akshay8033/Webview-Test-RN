import React from 'react';
import {View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

export default App = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{uri: 'web.bundle/index.html'}}
        javaScriptEnabled={true}
        scalesPageToFit={true}
        originWhitelist={['*']}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
