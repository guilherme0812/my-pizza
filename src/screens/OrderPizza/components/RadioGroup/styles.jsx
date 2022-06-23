import { StyleSheet } from "react-native";
import {global, colors} from "../../../../assets/css";
import styled from 'styled-components/native'

export const Container = styled.View`
    margin-bottom: ${({theme}) => theme.padding}px;
`

export const ScrollContainer = styled.ScrollView`
    padding-top: ${({theme}) => theme.padding}px;
    padding-bottom: ${({theme}) => theme.padding}px;
`
const styles = StyleSheet.create({  
    ...global,
    radioGroupContainer: {
        marginBottom: 20
    },
    scroolContainer: {
        paddingTop: 20,
        paddingBottom: 20,
    }
});
export default styles;