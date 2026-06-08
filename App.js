import React, { useEffect } from 'react';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import * as NavigationBar from 'expo-navigation-bar';
import { GAME_HTML } from './assets/web/gameHtml';

export default function App() {
  useEffect(() => {
    // Hide navigation bar on Android for a true immersive fullscreen game experience
    if (Platform.OS === 'android') {
      try {
        NavigationBar.setVisibilityAsync('hidden');
        NavigationBar.setBehaviorAsync('swipe');
      } catch (e) {
        console.warn("Navigation bar controller is not available:", e);
      }
    }
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} translucent={true} />
      <WebView
        source={{ html: GAME_HTML }}
        style={styles.webview}
        originWhitelist={['*']}
        allowFileAccess={true}
        allowFileAccessFromFileURLs={true}
        allowUniversalAccessFromFileURLs={true}
        domStorageEnabled={true}
        javaScriptEnabled={true}
        scrollEnabled={false}
        overScrollMode="never"
        bounces={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090a0f', // Matches Ninja Slice background
  },
  webview: {
    flex: 1,
    backgroundColor: '#090a0f',
  },
});
