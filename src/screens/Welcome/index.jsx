import React from 'react';
import { View } from 'react-native'
import Card from './components/Card';
import styles from './styles';
import { colors } from '../../assets/css';
import {Container} from './styles'
import { Text } from '../../components';

const Welcome = ({ navigation }) => {
  return (
    <Container>
      <Card navigation={navigation} />
    </Container>
  )
}
export default Welcome