import React from 'react';
import { View, Text, Image } from 'react-native'
import {Container, ContentContainer, Title, Flavor, Price} from './styles';

const PizzaItem = () => {
  return (
    <Container>
      <View>
        <Image source={require('../../../../assets/images/vector-pizza.png')} style={{ width: 80, height: 80 }} />
      </View>
      <ContentContainer>
        <Title>Pizza Grande</Title>
        <Flavor>Calabresa, 4 queijos</Flavor>
        <Price>R$ 30</Price>
      </ContentContainer>
    </Container>
  )
}
export default PizzaItem