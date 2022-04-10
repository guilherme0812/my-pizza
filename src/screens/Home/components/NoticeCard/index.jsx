import React from 'react';
import { View, Text, Image } from 'react-native'
import styles from './styles';
import { useHome } from '../../context/Home';

const NoticeCard = () => {
  const { cardMessage } = useHome()
  return (
    <View style={styles.noticeCardContainer}>
      <View>
      <Image
        source={require('../../../../assets/images/moto.png')}
      />
      </View>
      <View style={[styles.cardMessageContainer, styles.shadow]}>
        <Text style={[styles.bold, styles.text2Xl, styles.cardMessage]}> {cardMessage} </Text>
      </View>
    </View>
  )
}
export default NoticeCard