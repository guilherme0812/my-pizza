import { StyleSheet } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { global, colors } from "../../../../assets/css"

const styles = StyleSheet.create({
  ...global,
  select: {
    padding: 10,
    borderBottomWidth: 4,
    borderColor: colors.black3
  },
})
export default styles