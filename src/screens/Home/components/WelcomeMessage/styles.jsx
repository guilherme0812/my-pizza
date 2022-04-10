import { StyleSheet } from "react-native";
import { global, colors } from "../../../../assets/css"

const styles = StyleSheet.create({
  ...global,
  welcomeTitle: {
    color: colors.orange1,
    marginBottom: -5
  },
  orderPizzaTitle: {
    color: colors.black2
  }
})
export default styles