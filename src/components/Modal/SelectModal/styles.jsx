import { StyleSheet } from "react-native";
import {global, colors} from "../../../assets/css";

const styles = StyleSheet.create({  
    ...global,
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        width: '100%',
        height: '60%',
        backgroundColor: colors.white,
        borderRadius: 10,
        elevation: 5,
    },
    option: {
        alignItems: 'flex-start'
    },
    optionText: {
        margin: 15,
    }
});
export default styles;