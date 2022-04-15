import React from 'react';
import {View, Text} from 'react-native'
import { useHome } from '../../context/Home';
import styles from './styles';
import { connect } from 'react-redux';

const WelcomeMessage = ({userName}) => {
  const {name} = useHome()
  return (
    <View>
      <Text style={[styles.textXl, styles.bold, styles.welcomeTitle]}>Olá, {userName}</Text>
      <Text style={[styles.text3Xl, styles.bold, styles.orderPizzaTitle]}>Peça sua pizza</Text>
    </View>
  )
}
const mapStateToProps = store => ({
  userName: store.UserReducer.user
})

export default connect(mapStateToProps)(WelcomeMessage)