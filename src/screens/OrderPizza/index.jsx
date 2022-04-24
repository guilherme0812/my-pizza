import react, { useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import Navbar from '../../components/Navbar'
import Radio from '../../components/Radio'
import DefaultButton from '../../components/DefaultButton'
import Select from '../../components/Select'
import ChooseFlavor from './components/ChooseFlavor'
import { useSelector,useDispatch } from 'react-redux';
import { COUNT_CART_ACTION } from '../../config/actions/actionTypes'

const OrderPizza = ({ navigation, text = 'text' }) => {
    const [flavor, setFlavor] = useState([])
    const [selected, setSelected] = useState(1)

    const selectedFlavors = useSelector(state => state.selectedFlavors)

    const dispatch = useDispatch()

    const handleFinish = () => {
        dispatch({type: COUNT_CART_ACTION, payload: {
            flavor: 'Queijo',
            index: 2
        }})
        console.log(selectedFlavors)
    }

    return (
        <View style={[styles.container, styles.verticalAlign]}>
            <Navbar navigation={navigation} title="Selecione a pizza" target='Home' />

                {selectedFlavors.map((d, i) => <Text key={i}>{d}</Text>)}

            <View>
                <Text style={[styles.textXl, styles.bold, styles.infoProductText]}>Pizza grande</Text>
                <Text style={[styles.textXl, styles.bold, styles.infoProductText]}>R$ 30,00</Text>
            </View>
            <View style={styles.pizzaContainer}>
                <Image source={require('../../assets/images/vector-pizza.png')} />
            </View>

            <View>
                <ChooseFlavor data={flavor} setData={setFlavor} index={0}/>
                <ChooseFlavor data={flavor} setData={setFlavor} index={1}/>
                <ChooseFlavor data={flavor} setData={setFlavor} index={2}/>
            </View>

            <Radio
                selected={selected}
                option={['16 fatias','12 fatias','8 fatias', '6 fatias']}
                horizontal={true}
                onChangeSelect={(index) => setSelected(index)}
            />

            <DefaultButton title="Adicionar ao pedido" message="Esta função ainda não está pronta" handleOnclick={handleFinish} />
        </View>
    )
}

export default OrderPizza