import React from 'react';
import { View, Text } from 'react-native'
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux'
import { colors } from "../../../../assets/css"

const Navbar = ({cartItens}) => {
  return (
    <View style={styles.navbarContainer}>
      <View style={[styles.iconMenuContainer]}>
        <Icon name="menu" size={30} color={colors.black3} />
      </View>

      <View style={styles.cartContainer}>
        <Text style={[styles.itensCount, styles.text]}>{cartItens}</Text>
        <Icon name="cart-outline" size={30} color={colors.black3} />
      </View>
    </View>
  )
}
const mapStateToProps = store => ({
  cartItens: store.CountCartReducer.value
})
export default connect(mapStateToProps)(Navbar)