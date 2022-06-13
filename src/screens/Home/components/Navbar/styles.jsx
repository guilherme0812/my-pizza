import { StyleSheet } from "react-native";
import { global, colors } from "../../../../assets/css"
import styled from 'styled-components/native'

export const Container = styled.View`
  margin-bottom: 40px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.padding}px;
  margin-left:${({ theme }) => theme.padding}px;
  margin-right:${({ theme }) => theme.padding}px;
`

export const IconMenu = styled.TouchableOpacity`
  padding: 12px
`
export const CartContainer = styled.TouchableOpacity`
`

export const Counter = styled.Text`
  font-size: 12px;
  margin-bottom: -10px;
  text-align: center;
`

const styles = StyleSheet.create({
  ...global,
  navbarContainer: {
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconMenuContainer: {
    paddingTop: 12
  },
  itensCount: {
    fontSize: 12,
    marginBottom: -10,
    textAlign: 'center'
  }
})
export default styles