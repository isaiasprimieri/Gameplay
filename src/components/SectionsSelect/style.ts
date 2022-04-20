import { theme } from '../../global/theme';
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    background:{
        backgroundColor: theme.colors.primary,

    },
    background1:{
        backgroundColor: theme.colors.highlight,

    },
    container: {
        width:104,
        marginLeft:9,
        height:121,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent:'center',
    },
    icons:{
        width:51,
        height:51,
    },
    title: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.title700,
        fontSize: 15,
    },
    indentifer:{
        alignItems:'center',
        justifyContent:'center',
    }

})