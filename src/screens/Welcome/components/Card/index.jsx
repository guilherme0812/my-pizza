import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './styles';

const Card = ({navigation}) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={[styles.text2Xl, styles.bold, styles.cardTitle]}> Você não vai comer apenas uma </Text>
      <Text style={[ styles.cardText, styles.text]}> Lorem ipsum dolor sit amet. Sed consequuntur sed amet velit ut odio rerum </Text>
    
      <TouchableOpacity style={styles.buttonCard} onPress={() => navigation.navigate('Home')}>
        <Text style={[styles.buttonCardText, styles.text2Xl, styles.bold]}> Pedir </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Card