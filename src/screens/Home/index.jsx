import react from 'react'
import { View, Text } from 'react-native'
import HomeProvider from './context/Home'
import styles from './styles'

const Home = ({ navigation }) => {
    return (
        <HomeProvider>
            <View style={styles.container}>
                <Text> Home </Text>
            </View>
        </HomeProvider>
    )
}
export default Home