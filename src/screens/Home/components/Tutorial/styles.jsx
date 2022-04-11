import { StyleSheet } from "react-native";
import { global, colors } from "../../../../assets/css"

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