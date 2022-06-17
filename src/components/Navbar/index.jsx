import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Title } from './styles';

const Navbar = (props) => {
  const {
    navigation,
    target,
    title = 'Selecione o título',
    leftButtonName = 'chevron-back-outline',
    rightButtonName
  } = props

  const rightButton = rightButtonName ? <Icon name={rightButtonName} size={25} /> : <View style={{ marginRight: 25 }}></View>

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate(target)}>
        <Icon name="chevron-back-outline" size={25} />
      </TouchableOpacity>

      <View>
        <Title>{title}</Title>
      </View>

      <View>
        {rightButton}
      </View>
    </Container>
  )
}

export default Navbar