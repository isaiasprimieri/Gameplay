import { theme } from '../../global/theme';
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    background:{
        marginTop:20,

    },
    container: {
        alignItems: 'flex-start',
        marginLeft: '2.5%',
        marginTop:20,
        flexDirection: 'row',
    },
    section:{
         width:'100%',
        height:520,
        backgroundColor: theme.colors.secondary90
    },
    title:{
        fontSize: 18,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
    },
    subtitle:{
        fontSize: 15,
        fontFamily: theme.fonts.text500,
        color: theme.colors.heading,
        marginRight: '3.5%',
    },
    subtitleBox:{
        alignItems: 'flex-end',
        flex: 1,
    }



})