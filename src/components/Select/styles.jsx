import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import {global, colors} from "../../assets/css";

const styles = StyleSheet.create({  
    ...global,
    select: {
        padding: 10,
        borderBottomWidth: 2,
        borderColor: '#ccc',
      },
});
export default styles;