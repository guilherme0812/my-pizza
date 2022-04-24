import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import styles from './styles';

const DefaultButton = (props) => {
  const { title, message, handleOnclick } = props
  const showAlert = () => {
    Alert.alert(message)
  }

  return (
    <TouchableOpacity style={[styles.defaultButton]} onPress={ () =>  handleOnclick() }>
      <Text style={[styles.bold, styles.textLg, styles.defaultButtonText]}> {title} </Text>
    </TouchableOpacity>
  )
}
export default DefaultButton