// In App.js in a new project

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import store from './src/config/store';
import { Provider } from 'react-redux';
import Router from './src/navigation/Router';
import { useFonts } from 'expo-font'
import { ThemeProvider } from 'styled-components/native'
import light from './src/theme/light';

function App() {
  const [loaded] = useFonts({
    text: require('./src/assets/fonts/Poppins-Regular.ttf'),
    bold: require('./src/assets/fonts/Poppins-Bold.ttf'),
  })

  // console.log(store.getState())
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={light}>
          {loaded ? <Router /> : null}
        </ThemeProvider>
      </Provider>
    </>
  );
}


export default App;