import { theme } from '../../global/theme';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        alignItems: 'center',

        justifyContent: 'center'
    },
    button:{
        backgroundColor: theme.colors.primary,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center',
        marginTop: 24,
        width: 365,
        borderRadius: 8,
        height: 56,
        marginBottom: 30,
    },
    title: {
        color: theme.colors.heading,
        fontSize: 15,
        fontFamily: theme.fonts.text500,
        flexDirection: 'row'
    },
    iconImg:{
        width: 24,
        height: 18,
        flexDirection: 'row',
    },
    textView:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        height: '100%',
        borderLeftWidth: 2,
        borderColor: theme.colors.line,
    },
    textViewWithoutIcon:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        height: '100%',
        borderColor: theme.colors.line,
    },
    iconWrapper:{
        width: 56,
        height: 56,
        alignItems:'center',
        justifyContent:'center',
    }



})