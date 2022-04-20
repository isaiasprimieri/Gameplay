import { theme } from '../../global/theme';
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 104,
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
})