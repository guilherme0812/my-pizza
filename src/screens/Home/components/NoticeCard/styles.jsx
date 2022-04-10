import { StyleSheet } from "react-native";
import { global, colors } from "../../../../assets/css"

const styles = StyleSheet.create({
  ...global,
  noticeCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#ffddce',
    borderRadius: 10,
    marginTop: 40,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  cardMessageContainer: {
    width: '60%'
  },
  cardMessage: {
    color: colors.orange1,
    textAlign: 'left'
  },
  shadow: {
    shadowOffset: { width: 10, height: 10, },
    shadowColor: '#000000',
    shadowOpacity: 1.0,
  }

})
export default styles