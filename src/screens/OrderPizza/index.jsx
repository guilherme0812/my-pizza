import react from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import Navbar from '../../components/Navbar'

const OrderPizza = ({ navigation }) => {
    return (
       <View style={styles.container}>
           <Navbar />
           <Text> Order pizza</Text>
       </View>
    )
}
export default OrderPizza