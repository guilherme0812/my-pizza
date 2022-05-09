import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native'
import styles from './styles';
import {  useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../../../config/actions/user';
import { usersApi } from '../../../../service/api';

const WelcomeMessage = () => {
  const [user, setUser] = useState([])

  const dispatch = useDispatch()
  const userName = useSelector(state => state.UserReducer)

  return (
    <View>
      <Text style={[styles.textXl, styles.bold, styles.welcomeTitle]}>Olá, {userName?.nome}</Text>
      <Text style={[styles.text3Xl, styles.bold, styles.orderPizzaTitle]}>Peça sua pizza</Text>
    </View>
  )
}

export default WelcomeMessage