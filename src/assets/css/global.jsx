import { StyleSheet } from "react-native";

const global = StyleSheet.create({  
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: '#fff'
  },
  verticalAlign: {
    justifyContent: 'space-between',
  },
  text: { fontFamily: 'text' },
  bold: { fontFamily: 'bold' },
  textXs: {fontSize: 10},
  textSm: {fontSize: 12},
  textBase: {fontSize: 14},
  textLg: {fontSize: 16},
  textXl: {fontSize: 18},
  text2Xl: {fontSize: 25},
  text3Xl: {fontSize: 30}

});
export default global;