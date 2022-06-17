import React from 'react';
import { View, Text, Image } from 'react-native'
import styles, { Title } from './styles';
import { useHome } from '../../context/Home';

const Navbar = () => {
  return (
    <View style={{marginBottom: 20}}>
      <Title> Aprenda à usar o app </Title>
      <View style={styles.videoContainer}>
        <Image
          source={require('../../../../assets/icons/video-icon.png')}
        />
      </View>
    </View>
  )
}
export default Navbar