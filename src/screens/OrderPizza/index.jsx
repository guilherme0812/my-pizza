import react, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import Navbar from '../../components/Navbar'
import ChooseFlavors from './components/ChooseFlavors'
import Radio from '../../components/Radio'
import DefaultButton from '../../components/DefaultButton'

const OrderPizza = ({ navigation, text = 'text' }) => {
    const [fistFlavor, setFirstFlavor] = useState([])
    const [selected, setSelected] = useState(1)

    return (
        <View style={[styles.container, styles.verticalAlign]}>
            <Navbar navigation={navigation} title="Selecione a pizza" target='Home' />
            <View>
                <Text style={[styles.textXl, styles.bold, styles.infoProductText]}>Pizza grande</Text>
                <Text style={[styles.textXl, styles.bold, styles.infoProductText]}>R$ 30,00</Text>
            </View>
            <View style={styles.pizzaContainer}>
                <Image source={require('../../assets/images/vector-pizza.png')} />
            </View>

            <View>
                <ChooseFlavors data={fistFlavor} setData={setFirstFlavor} index={0} />
                <ChooseFlavors data={fistFlavor} setData={setFirstFlavor} index={1}/>
                <ChooseFlavors data={fistFlavor} setData={setFirstFlavor} index={2}/>
            </View>

            <Radio
                selected={selected}
                option={['16 fatias','12 fatias','8 fatias', '6 fatias']}
                horizontal={true}
                onChangeSelect={(index) => setSelected(index)}
            />

            <DefaultButton title="Adicionar ao pedido" message="Esta função ainda não está pronta" />
        </View>
    )
}

export default OrderPizza