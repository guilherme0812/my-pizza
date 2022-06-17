import { StyleSheet } from "react-native";
import { global, colors } from "../../../../assets/css"
import { Text } from "../../../../components";
import styled from 'styled-components/native'

export const Title = styled(Text).attrs(props => ({
  bold: true,
  size: "4"
}))`
  color: ${({theme}) => theme.black5};
  margin-bottom: 10px;
  margin-left: ${({theme}) => theme.padding}px;
`

const styles = StyleSheet.create({
  ...global,
  TutorialTitle: {
    color: colors.black3,
    marginBottom: 10
  },
  optionContainer: {
    flexDirection: "row",
  },
  videoContainer: {
    alignItems: 'center'
  }
})
export default styles