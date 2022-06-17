import { StyleSheet } from "react-native";
import { global, colors } from "../../../../assets/css"
import styled from 'styled-components/native'
import { Text } from "../../../../components";

export const Container = styled.View`
  margin-bottom: ${({theme}) => theme.padding}px;
`

export const Title = styled(Text).attrs(props => ({
  size: "5",
  bold: true,
}))`
  color: ${({theme}) => theme.black5};
  margin-left: ${({theme}) => theme.padding}px;
`

const styles = StyleSheet.create({
  ...global,
  optionsTitle: {
    color: colors.black3,
    marginBottom: 10
  },
  optionContainer: {
    marginBottom: 20,
  },
  optionItensContainer: {
    flexDirection: "row",
  },
  optionItem: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    width: 90,
    height: 90,
    borderRadius: 10,
    elevation: 5,
    padding: 20,
    marginBottom: 10,
    marginTop: 10,
    marginRight: 20,
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 50,
  },
})
export default styles