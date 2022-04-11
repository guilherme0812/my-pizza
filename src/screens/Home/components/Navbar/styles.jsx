import { StyleSheet } from "react-native";
import { global, colors } from "../../../../assets/css"

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