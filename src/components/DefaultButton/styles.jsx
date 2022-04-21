import { StyleSheet } from "react-native";
import {global, colors} from "../../assets/css";

const styles = StyleSheet.create({  
    ...global,
    defaultButton: {
        textAlign: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: colors.orange1,
        borderRadius: 10
    },
    defaultButtonText: {
        color: colors.white
    }
});
export default styles;