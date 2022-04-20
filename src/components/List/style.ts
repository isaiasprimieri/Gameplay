import { theme } from '../../global/theme';
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    background:{
        marginTop:20,

    },
    container: {
        alignItems:'center',
        marginBottom:20,

    },
    section:{
         width:'100%',
        height:930,
        alignItems:'center',
        position:'relative',
        backgroundColor: theme.colors.secondary90
    }

})