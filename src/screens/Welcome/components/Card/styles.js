import styled from 'styled-components/native'

export const CardContainer = styled.View`
  padding-left: ${({ theme }) => theme.padding}px;
  padding-right: ${({ theme }) => theme.padding}px;
  padding-top: ${({ theme }) => theme.padding * 2}px;
  padding-bottom: ${({ theme }) => theme.padding * 2}px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.background};
  margin: 18px;
`

export const Title = styled.Text`
  text-align: center;
  font-family: bold;
  color: ${({ theme }) => theme.black3};
  font-size: 25px;
`

export const Description = styled.Text`
  font-family: text;
  text-align: center;
`

export const Button = styled.TouchableOpacity`
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 20px;
    margin-left: 30px;
    margin-right: 30px;
    background-color: ${({theme}) => theme.secundary};
    border-radius: 10px;
`

import { StyleSheet } from "react-native";
import { global, colors } from "../../../../assets/css"

const styles = StyleSheet.create({
  ...global,
  cardContainer: {
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 15,
    backgroundColor: '#fff'
  },
  cardTitle: {
    textAlign: 'center'
  },
  cardText: {
    textAlign: 'center',
    marginTop: 20
  },
  buttonCard: {
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 25,
    backgroundColor: colors.orange1,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30
  },
  buttonCardText: {
    textAlign: 'center',
    color: '#fff'
  }
})
export default styles