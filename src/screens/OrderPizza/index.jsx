import react from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import Navbar from '../../components/Navbar'
import ChooseFlavors from './components/ChooseFlavors'
import DefaultButton from '../../components/DefaultButton'

const OrderPizza = ({ navigation, text = 'text' }) => {
    return (
       <View style={[styles.container, styles.verticalAlign]}>
           <Navbar navigation={navigation} title="Selecione a pizza" target='Home'  />
           <View>
               <Text style={[styles.textXl, styles.bold, styles.infoProductText]}>Pizza grande</Text>
               <Text style={[styles.textXl, styles.bold, styles.infoProductText]}>R$ 30,00</Text>
           </View>
           <View style={styles.pizzaContainer}>
                <Image source={require('../../assets/images/vector-pizza.png')}/>
           </View>

           <ChooseFlavors/>
           
           <DefaultButton title="Adicionar ao pedido" message="Esta função ainda não está pronta" />
       </View>
    )
}

export default OrderPizza