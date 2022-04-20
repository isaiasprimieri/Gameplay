import { theme } from '../../global/theme';
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    background:{
        backgroundColor: theme.colors.background,
        flex: 1,

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
    },
    check:{
        width: 12,
        height: 12,
        backgroundColor: theme.colors.primary,
        borderColor: theme.colors.primaryDark,
        borderWidth: 2,
        borderRadius: 3,
        position: 'absolute',
        top: 8,
        right: 8,
    },
    checked:{
        width: 12,
        height: 12,
        backgroundColor: theme.colors.secondary50,
        borderColor: theme.colors.secondary30,
        borderWidth: 2,
        borderRadius: 3,
        position: 'absolute',
        top: 8,
        right: 8,


    },

})