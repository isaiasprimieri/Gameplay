import { theme } from '../../global/theme';
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 84,
        backgroundColor: theme.colors.secondary70,
        flexDirection: 'row',
        marginBottom: 32,


    },
    backButton:{
        marginLeft: 20,
        marginBottom: 20,
        justifyContent: 'flex-end'
    },
    backButtonImage:{
        width: 32,
        height: 32,
    },
    title:{
        fontFamily: theme.fonts.title700,
        fontSize: 20,
        color: theme.colors.heading,

    },
    titleBox:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 20,

    },
    icon:{
        position: 'absolute',
        bottom: 0,
        right: 20,
    }
})