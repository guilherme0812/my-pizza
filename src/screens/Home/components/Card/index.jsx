import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Text } from '../../../../components';
import { Container } from './styles';

const Card = ({navigation, to,  text, image}) => {
  return (
    <Container onPress={() => navigation.navigate(to)}>
      <Image
        source={image}
      />
      <Text>{text}</Text>
    </Container>
  )
}
export default Card