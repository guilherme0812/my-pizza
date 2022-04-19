import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux'
import {countcartAction} from '../../../../config/actions'
import { colors } from "../../../../assets/css"

const Navbar = ({cartItens, countcartAction}) => {
  console.log()
  return (
    <View style={styles.navbarContainer}>
      <TouchableOpacity style={[styles.iconMenuContainer]}>
        <Icon name="menu" size={30} color={colors.black3} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.cartContainer} onPress={() => countcartAction(1)}>
        <Text style={[styles.itensCount, styles.text]}>{cartItens}</Text>
        <Icon name="cart-outline" size={30} color={colors.black3} />
      </TouchableOpacity>
    </View>
  )
}
const mapStateToProps = store => ({
  cartItens: store.CountCartReducer.value
})
const mapDispatchToProps = (dispatch) => ({
  countcartAction: (value) => dispatch( countcartAction(value) )
})
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)