import react, { useState, useEffect } from 'react'
import { View, Text, Image, Alert } from 'react-native'
import { Container, Title, Price, ImagePizzaContainer, ButtonContainer } from './styles'
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
                <Title>
                    {selectedPizza.size.description}
                </Title>
                <Price>
                    R$ {selectedPizza.price},00
                </Price>
            </View>

            <ImagePizzaContainer>
                <Image source={require('../../assets/images/vector-pizza.png')} />
            </ImagePizzaContainer>

            <SelectGroup />
            <RadioGroup />

            <ButtonContainer>
                <DefaultButton title="Adicionar ao pedido" message="Esta função ainda não está pronta" handleOnclick={handleFinish} />
            </ButtonContainer>
        </Container>
    )
}

export default OrderPizza