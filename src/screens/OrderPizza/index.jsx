import react from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import Navbar from '../../components/Navbar'

const OrderPizza = ({ navigation, text = 'text' }) => {
    return (
       <View style={styles.container}>
           <Navbar navigation={navigation} title="Selecione a pizza" rightButtonName="ios-add" target='Home' />
           <View>
               <Text style={[styles.textXl, styles.bold, styles.infoProductText]}>Pizza grande</Text>
               <Text style={[styles.textXl, styles.bold, styles.infoProductText]}>R$ 30,00</Text>
           </View>
       </View>
    )
}

export default OrderPizza