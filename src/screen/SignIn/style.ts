import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      marginTop: -40,
      color: theme.colors.heading,
      fontSize: 40,
      textAlign: 'center',
      fontFamily: theme.fonts.title700,
    },
    subtitle:{
      color:theme.colors.highlight,
      fontSize: 15,
      textAlign: 'center',
      fontFamily: theme.fonts.text400
    },
    image:{
      width:'100%',
      height: 375,
    },
  });