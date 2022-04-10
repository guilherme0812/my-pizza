import React from 'react';
import { View } from 'react-native'
import Card from './components/Card';
import styles from './styles';
import { colors } from '../../assets/css';

const Welcome = ({ navigation }) => {
  return (
    <View style={[styles.container, styles.welcomeContainer]}>
      <Card navigation={navigation} />
    </View>
  )
}
export default Welcome