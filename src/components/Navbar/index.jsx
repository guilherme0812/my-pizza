import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Navbar = (props) => {
  const { 
    navigation,
    target,
    title = 'Selecione o título',
    leftButtonName = 'chevron-back-outline',
    rightButtonName 
  } = props

  const rightButton = rightButtonName? <Icon name={rightButtonName} size={25} /> : <View style={{marginRight:25}}></View>

  return (
    <View style={styles.navbarContainer}>
      <TouchableOpacity onPress={() => navigation.navigate(target)}>
        <Icon name="chevron-back-outline" size={25} />
      </TouchableOpacity>

      <View>
        <Text style={[styles.bold, styles.textXl, styles.navbarTitle]}> {title} </Text>
      </View>

      <View>

        {rightButton}
      </View>
    </View>
  )
}

export default Navbar