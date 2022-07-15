import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import {global, colors} from "../../assets/css";
import styled from 'styled-components/native'

export const RadioContainer = styled.View`
    flex-direction: ${(props) => props.horizontalStyle};
`
export const RadioTouchable = styled.TouchableOpacity`
    flex-direction: row;
    align-content: center;
    margin-left: ${({theme}) => theme.padding}px;
`

export const Circle = styled.View`
    width: 15px;
    height: 15px;
    border-radius: 10px;
    margin-top: 2px;
    margin-right: 2px;
    justify-content: center;
    align-items: center;
    border-width: 2px;
    border-color: ${({theme}) => colors.black4};
`

export const InnerCircle = styled.View`
    border-radius: 10px;
    height: 7px;
    width: 7px;
    background-color: ${({theme}) => colors.black4};
`

// export const Description = styled(Text).attrs(props => ({
//     size: "3"
//   }))`
//     color: ${({theme}) => theme.black5};
// `