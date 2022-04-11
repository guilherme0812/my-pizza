import react from 'react'
import { View, Text } from 'react-native'
import HomeProvider from './context/Home'
import WelcomeMessage from './components/WelcomeMessage'
import NoticeCard from './components/NoticeCard'
import OptionGroup from './components/OptionsGroup'
import Tutorial from './components/Tutorial'
import Navbar from './components/Navbar'
import styles from './styles'

const Home = ({ navigation }) => {
    return (
        <HomeProvider>
            <View style={[styles.container, styles.verticalAlign, styles.homeContainer]}>
                <Navbar />
                <WelcomeMessage />
                <NoticeCard />
                <OptionGroup navigation={navigation} />
                <Tutorial />
            </View>
        </HomeProvider>
    )
}
export default Home