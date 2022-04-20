import { theme } from '../../global/theme';
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    background:{
        backgroundColor: theme.colors.background,
        flex: 1,

    },
    container: {
        width:440,
        height:120,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',

    },
    title: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.title700,
        fontSize: 18,
        marginLeft:16,
        marginBottom:8,

    }

})