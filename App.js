import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SafariView from 'react-native-safari-view';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';
export default function App() {
  const [result, setResult] = useState(null);
  const _pressHandler = () => {
    SafariView.isAvailable()
      .then(
        SafariView.show({
          url: 'https://pay.google.com/gp/w/u/0/home/activity?sctid=6569341574912291',
          readerMode: true,
          tintColor: '#000',
          barTintColor: '#fff', // optional
        })
      )
      .catch((error) => {
        // Fallback WebView code for iOS 8 and earlier
      });
  };

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync(
      'https://applepaydemo.apple.com/'
    );
    setResult(result);
  };
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View>
        <Button title='Open WebBrowser' onPress={_handlePressButtonAsync} />
        <Text>{result && JSON.stringify(result)}</Text>
        <Button onPress={_pressHandler} title='Show Safari View'></Button>
      </View>
    </View>
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
