import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux'
import {countcartAction} from '../../../../config/actions'
import { colors } from "../../../../assets/css"

const ChooseFlavors = () => {
  return (
    <View>
      <Text> Choose Flavors</Text>
    </View>
  )
}
export default ChooseFlavors