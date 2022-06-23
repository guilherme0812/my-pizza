import { StyleSheet } from "react-native";
import {global, colors} from "../../assets/css";
import styled from 'styled-components/native'
import { Text } from "../../components";

export const Container = styled.View`
    flex: 1;
    justify-content: space-between;
`

export const Title = styled(Text).attrs(props => ({
    bold: true,
    size: "4"
  }))`
    color: ${({theme}) => theme.black4};
    text-align: center;
`

export const Price = styled(Text).attrs(props => ({
    bold: true,
    size: "4"
  }))`
    color: ${({theme}) => theme.black4};
    text-align: center;
`
export const ImagePizzaContainer = styled.View`
    align-items: center;
    padding-top: ${({theme}) => theme.padding}px;
    padding-bottom: ${({theme}) => theme.padding}px;
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