import react, { useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import Navbar from '../../components/Navbar'
import DefaultButton from '../../components/DefaultButton'
import { useSelector,useDispatch } from 'react-redux';
import SelectGroup from './components/SelectGroup'
import RadioGroup from './components/RadioGroup'

const OrderPizza = ({ navigation, text = 'text' }) => {
    const [selected, setSelected] = useState(1)

    const selectedPizza = useSelector(state => state.selectedPizza)

    const dispatch = useDispatch()

    const handleFinish = () => {
        dispatch({type: 'CHANGE_PRICE', payload: {value: 30} })
    }

    return (
        <View style={[styles.container, styles.verticalAlign]}>
            <Navbar navigation={navigation} title="Selecione a pizza" target='Home' />

            <View>
                <Text style={[styles.textXl, styles.bold, styles.infoProductText]}>Pizza grande</Text>
                <Text style={[styles.textXl, styles.bold, styles.infoProductText]}>R$ 30,00</Text>
            </View>

            <View>
                <Text>{selectedPizza.price}</Text>
                {selectedPizza.flavors.map((d, index) => <Text key={index}>{d}</Text>)}
            </View>
            <View style={styles.pizzaContainer}>
                <Image source={require('../../assets/images/vector-pizza.png')} />
            </View>

            <SelectGroup/>

            <RadioGroup/>

            <DefaultButton title="Adicionar ao pedido" message="Esta função ainda não está pronta" handleOnclick={handleFinish} />
        </View>
    )
}

export default OrderPizza