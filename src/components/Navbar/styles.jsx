import { StyleSheet } from "react-native";
import {global, colors} from "../../assets/css";

const styles = StyleSheet.create({  
    ...global,
    navbarContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 20,
      paddingBottom: 20,
    },
    navbarTitle: {
      color: colors.black2
    }
});
export default styles;