import { theme } from '../../global/theme';
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container:{
        alignItems: 'center'
    },
    input: {
        width: 160,
        marginHorizontal: 20,
        marginTop: 6,
        paddingHorizontal: 20,
        height: 48,
        flexDirection: 'row',
        marginBottom: 32,
        borderColor: theme.colors.secondary50,
        borderWidth: 2,
        borderRadius: 8,
    },
    title:{
        fontFamily: theme.fonts.text500,
        fontSize: 16,
        color: theme.colors.heading,
        paddingHorizontal: 20,
    },
    box:{
        width:365,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    form:{
        marginTop: 20,
    },
    server:{
        flexDirection: 'row',
        marginVertical: 16,
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
})