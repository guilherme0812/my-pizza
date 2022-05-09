import { StyleSheet } from "react-native";
import { global, colors } from "../../../../assets/css";

const styles = StyleSheet.create({
    ...global,
    orderItem: {
        flexDirection: 'row',
        borderRadius: 20,
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#f7f7f7',
        marginBottom: 15
    },
    contentContainer: {
        marginLeft: 20
    },
    priceColor: {color: colors.orange1}
});
export default styles;