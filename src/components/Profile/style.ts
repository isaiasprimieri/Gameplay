import { theme } from '../../global/theme';
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
   container: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 24,
    height: 100,
    alignItems: 'center',
   },
   content:{
    marginLeft: 21,
   },
   text: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
   },

   title:{
    color: theme.colors.highlight,
    fontFamily: theme.fonts.title500,
    fontSize: 24,
   },
   username:{
       marginLeft: 8,
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 24,
   },
   message: {
    flexDirection:'column',
    },
    messageText: {
    flexDirection:'column',
    color: theme.colors.highlight,
   },
   buttonAdd:{
    flex:1,
    alignItems:'flex-end',
   },

})