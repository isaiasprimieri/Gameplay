import { theme } from '../../global/theme';
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    background:{
        backgroundColor: theme.colors.background,
        flex: 1,
    },
    container: {
        width:370,
        marginLeft:9,
        height: 100,
        borderBottomColor: theme.colors.secondary80,
        borderBottomWidth: 2,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: theme.colors.secondary90,

    },
    icons:{
        width:51,
        height:51,
        borderRadius: 4,
    },
    iconsBox:{
        marginRight: 9,
        alignItems:'center',
        justifyContent:'center',
        width:54,
        height:54,
        backgroundColor: theme.colors.secondary60,
        borderRadius: 4,
    },
    title: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.title700,
        fontSize: 18,
    },
    indentifer:{
        width:308,
    },
    typeCategory:{
        color: theme.colors.highlight,
        fontFamily: theme.fonts.text400,
    },
    name:{
        fontSize: 13,
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
    },
    identiferHead:{
        flexDirection:'row',
    },

    typeBox:{
        position: 'absolute',
        right: 0,

    },
    matchBox:{
        flexDirection: 'row',
        width: '100%',
        height:16,
        // justifyContent: 'space-between',


    },
    match:{
        color: theme.colors.heading,
        fontFamily: theme.fonts.title500,
        fontSize: 14

    },
    agenda:{
        width: 12,
        height: 12,

    },
    agendaBox:{
        borderRadius: 9,
        width: 18,
        height: 18,
        alignItems: 'center',
        backgroundColor: theme.colors.secondary30,
        justifyContent: 'center',
        marginRight: 10
    },
    agendaBoxOf:{
        borderRadius: 9,
        width: 18,
        height: 18,
        backgroundColor: theme.colors.primaryDark,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    }
})