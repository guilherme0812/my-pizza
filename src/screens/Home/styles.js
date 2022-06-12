import { StyleSheet } from "react-native";
import {global, colors} from "../../assets/css";
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: #E85D04;
  justify-content: space-between;
  background-color: ${({theme}) => theme.white2};
`

const styles = StyleSheet.create({  
    ...global,
    homeContainer: {
        justifyContent: 'space-between'
    },
    homeContainer: {
        backgroundColor: colors.white2
    }
});
export default styles;