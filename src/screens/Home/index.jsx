import react from 'react'
import { View, Text } from 'react-native'
import HomeProvider from './context/Home'
import WelcomeMessage from './components/WelcomeMessage'
import NoticeCard from './components/NoticeCard'
import OptionGroup from './components/OptionsGroup'
import styles from './styles'

const Home = ({ navigation }) => {
    return (
        <HomeProvider>
            <View style={styles.container}>
                <WelcomeMessage />
                <NoticeCard />
                <OptionGroup />
            </View>
        </HomeProvider>
    )
}
export default Home