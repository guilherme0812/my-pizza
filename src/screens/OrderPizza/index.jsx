import react, { useState, useEffect } from 'react'
import { View, Text, Image, Alert } from 'react-native'
import { Container, Title, Price, ImagePizzaContainer, ButtonContainer } from './styles'
import Navbar from '../../components/Navbar'
import DefaultButton from '../../components/DefaultButton'
import { useSelector, useDispatch } from 'react-redux';
import SelectGroup from './components/SelectGroup'
import RadioGroup from './components/RadioGroup'
import { usePizzaContext } from '../../config/pizzacontext'

const OrderPizza = ({ navigation, text = 'text' }) => {
    const { sizeSelected, flavorsSelected,  handleSelectPizza } = usePizzaContext()

    const selectedPizza = useSelector(state => state.selectedPizza)

    const handleFinish = () => {
        if (sizeSelected && flavorsSelected.length > 0) {
            handleSelectPizza()
        } else {
            Alert.alert('É necessário inserir ao menos um sabor e preencher o tamanho da pizza')
        }
    }

    return (
        <Container>
            <Navbar navigation={navigation} title="Selecione a pizza" target='Home' />

            <View>
                <Title>
                    {sizeSelected?.id ? sizeSelected?.descricao : 'Tamanho da pizza'}
                </Title>
                <Price>
                    R$ { sizeSelected?.id ? sizeSelected?.price : '0'},00
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