import { theme } from '../../global/theme';
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container:{
        alignItems: 'center'
    },
    input: {
        width: 48,
        marginTop: 8,
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: theme.colors.secondary50,
        borderWidth: 2,
        borderRadius: 8,
    },
    title:{
        fontFamily: theme.fonts.text500,
        fontSize: 16,
        color: theme.colors.heading,
    },
    box:{
        flexDirection: 'row',
    },
    form:{
    },
    divider:{
        width: 20,
        marginTop: 6,
        height: 48,
        alignItems:'center',
        justifyContent: 'center',

    },
    inputBox:{
        width: 48,
        paddingLeft: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
})