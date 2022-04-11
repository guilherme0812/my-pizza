import { StyleSheet } from "react-native";
import { global, colors } from "../../../../assets/css"

const styles = StyleSheet.create({
  ...global,
  optionsTitle: {
    color: colors.black3,
    marginBottom: 10
  },
  optionContainer: {
    marginBottom: 20
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
    marginRight: 20,
    borderRadius: 10,
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 50,
  },
})
export default styles