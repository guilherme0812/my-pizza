// In App.js in a new project

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Router from './src/__mokcs__/Router'
import {useFonts} from 'expo-font'

function App() {
  const loaded = useFonts({
    text: require('./src/assets/fonts/Poppins-Regular.ttf'),
    bold: require('./src/assets/fonts/Poppins-Bold.ttf'),
  })
  if(!loaded) {
    return null
  }
  return (
    <Router />
  );
}

const styles = StyleSheet.create({
  text: {fontFamily: 'text'},
  bold: {fontFamily: 'bold'}
})

export default App;