import React from 'react';
import { View, Image } from 'react-native'
import {Container, CardMessageConatiner, TextCard} from './styles';
import { useHome } from '../../context/Home';

const NoticeCard = () => {
  const { cardMessage } = useHome()
  return (
    <Container>
      <View>
      <Image
        source={require('../../../../assets/images/moto.png')}
      />
      </View>
      <CardMessageConatiner>
        <TextCard> {cardMessage} </TextCard>
      </CardMessageConatiner>
    </Container>
  )
}
export default NoticeCard