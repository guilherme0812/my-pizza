import React from 'react';
import {View, Text, StatusBar} from 'react-native'
import Card from './components/Card';
import styles from './styles';

const Welcome = ({navigation}) => {
  return (
    <View style={[styles.container, styles.welcomeContainer]}>
      <Card navigation={navigation} />
    </View>
  )
}
export default Welcome