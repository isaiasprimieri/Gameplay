import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    status:{
        width: 10,
        height: 10,
        borderRadius: 5
    },
    avatar:{
        width: 46,
        height: 46,
        borderRadius: 8,
    },
    statusBox:{
        width: 12,
        height: 12,
        backgroundColor: theme.colors.overlay,
        marginLeft: 18,
        alignItems: 'center',
        borderRadius: 6,
        justifyContent: 'center'
    },

})