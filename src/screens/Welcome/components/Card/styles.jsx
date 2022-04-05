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