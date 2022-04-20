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
        width: '100%',
        height: 220,
    },
    title:{
        color: theme.colors.heading,
        fontFamily: theme.fonts.title700,
        fontSize: 28,
        // marginBottom: 20,
    },
    subtitle:{
        fontSize: 15,
        fontFamily: theme.fonts.text500,
        color: theme.colors.highlight,

    },
    textBox:{
        opacity: 1,
        flex: 1,
        backgroundColor: 'rgba(11,11,11,0.6)',
        paddingHorizontal: 20,
        justifyContent: 'flex-end',
        paddingBottom: 20,

    },



})