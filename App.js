import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import WebView from 'react-native-webview'
export default function App() {
  return (
    <WebView
      source = {{ uri:'http://sxwfeed.s3-website.ap-south-1.amazonaws.com/' }}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
