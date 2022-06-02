import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import styles, {CardContainer, Description, Title} from './styles';

const Card = ({navigation}) => {
  return (
    <CardContainer>
      <Title> Você não vai comer apenas uma </Title>
      <Description> Lorem ipsum dolor sit amet. Sed consequuntur sed amet velit ut odio rerum </Description>
    
      <TouchableOpacity style={styles.buttonCard} onPress={() => navigation.navigate('Home')}>
        <Text style={[styles.buttonCardText, styles.text2Xl, styles.bold]}> Pedir </Text>
      </TouchableOpacity>
    </CardContainer>
  )
}

export default Card