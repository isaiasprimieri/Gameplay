import { theme } from '../../global/theme';
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container:{
        alignItems: 'center'
    },
    inputBox: {
        width: 365,
        height: 72,
        flexDirection: 'row',
        borderColor: theme.colors.secondary50,
        borderWidth: 2,
        borderRadius: 8,
    },
    input:{
        width: 365,
        height: 70,

    },
    title:{
        fontFamily: theme.fonts.text500,
        fontSize: 16,
        color: theme.colors.heading,
        marginBottom: 6,
    },
    text:{
        fontFamily: theme.fonts.text500,
        fontSize: 16,
        color: theme.colors.heading,
        marginBottom: 6,
        paddingHorizontal: 20,
    },
    box:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    form:{
        marginTop: 20,
        },
    server:{
        flexDirection: 'row',
        marginVertical: 32,
        alignItems:'center',

        width: 365,
        height: 66,
        backgroundColor: theme.colors.secondary90,
        borderWidth: 1,
        borderColor: theme.colors.secondary50,
        borderRadius: 8,
    },
    serverIcon:{
        width: 64,
        height: 66,
        borderWidth: 1,
        borderColor: theme.colors.secondary50,
        borderRadius: 8,

    },
    serverContainer:{
        flexDirection: 'row',
        width: '80%',
        alignItems:'center',
        justifyContent: 'center',
        position: 'relative'
    },
    icon:{
        width: 14,
        height: 14,
        marginLeft: 20,
    },
    avatar:{
        width: 62,
        height: 64,
        borderColor: theme.colors.secondary50
    },
    maxCaracters:{
        fontFamily: theme.fonts.text400,
        fontSize: 12,
        color: theme.colors.highlight,
        marginBottom: 6,
    },
    maxCaractersBox:{
        justifyContent: 'flex-end',
    },
})