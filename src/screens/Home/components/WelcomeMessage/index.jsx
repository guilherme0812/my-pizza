import React from 'react';
import {View, Text} from 'react-native'
import { useHome } from '../../context/Home';
import styles from './styles';

const WelcomeMessage = () => {
  const {name} = useHome()
  return (
    <View>
      <Text style={[styles.textXl, styles.bold, styles.welcomeTitle]}>Olá, {name}</Text>
      <Text style={[styles.text3Xl, styles.bold, styles.orderPizzaTitle]}>Peça sua pizza</Text>
    </View>
  )
}
export default WelcomeMessage