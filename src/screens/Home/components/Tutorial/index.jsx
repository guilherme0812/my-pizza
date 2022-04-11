import React from 'react';
import { View, Text, Image } from 'react-native'
import styles from './styles';
import { useHome } from '../../context/Home';

const Navbar = () => {
  return (
    <View>
      <Text style={[styles.bold, styles.textXl, styles.TutorialTitle]}> Aprenda à usar o app </Text>
      <View style={styles.videoContainer}>
        <Image
          source={require('../../../../assets/icons/video-icon.png')}
        />
      </View>
    </View>
  )
}
export default Navbar