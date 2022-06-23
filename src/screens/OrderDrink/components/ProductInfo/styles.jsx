import { StyleSheet } from "react-native";
import {global, colors} from "../../../../assets/css";
import styled from 'styled-components/native'
import { Text } from "../../../../components";

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
const styles = StyleSheet.create({  
    ...global,
    infoProductText: {
        textAlign: 'center',
        color: colors.black3,
        marginBottom: -5
    },
});
export default styles;