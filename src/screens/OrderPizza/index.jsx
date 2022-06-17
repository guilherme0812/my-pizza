import react, { useState, useEffect } from 'react'
import { View, Text, Image, Alert } from 'react-native'
import styles, {Container} from './styles'
import Navbar from '../../components/Navbar'
import DefaultButton from '../../components/DefaultButton'
import { useSelector, useDispatch } from 'react-redux';
import SelectGroup from './components/SelectGroup'
import RadioGroup from './components/RadioGroup'

const OrderPizza = ({ navigation, text = 'text' }) => {

    const selectedPizza = useSelector(state => state.selectedPizza)

    const handleFinish = () => {
        Alert.alert('Essa função ainda não está dispinível')
    }

    return (
        <Container>
            <Navbar navigation={navigation} title="Selecione a pizza" target='Home' />

            <View>
                <Text style={[styles.textXl, styles.bold, styles.infoProductText]}>
                    {selectedPizza.size.description}
                </Text>
                <Text style={[styles.textXl, styles.bold, styles.infoProductText]}>
                    R$ {selectedPizza.price},00
                </Text>
            </View>

            <View style={styles.pizzaContainer}>
                <Image source={require('../../assets/images/vector-pizza.png')} />
            </View>

            <SelectGroup />
            <RadioGroup />

            <DefaultButton title="Adicionar ao pedido" message="Esta função ainda não está pronta" handleOnclick={handleFinish} />
        </Container>
    )
}

export default OrderPizza