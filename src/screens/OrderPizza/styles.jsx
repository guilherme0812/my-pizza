import { StyleSheet } from "react-native";
import {global, colors} from "../../assets/css";
import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    justify-content: space-between;
`

const styles = StyleSheet.create({  
    ...global,
    infoProductText: {
        textAlign: 'center',
        color: colors.black3,
        marginBottom: -5
    },
    pizzaContainer: {
        paddingTop: 50,
        paddingBottom: 50,
        alignItems: 'center'
    }
});
export default styles;