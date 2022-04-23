import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import {global, colors} from "../../assets/css";

const styles = StyleSheet.create({  
    ...global,
    optionContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        marginRight: 15
    },
    outlineCircle: {
        width: 15,
        height: 15,
        borderRadius: 10,
        borderColor: colors.black4,
        borderWidth: 2,
        marginTop: 2,
        marginRight: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerCircle: {
        width: 7,
        height: 7,
        borderRadius: 15,
        backgroundColor: colors.black4
    }
});
export default styles;