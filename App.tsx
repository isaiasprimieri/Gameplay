import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_700Bold, Rajdhani_500Medium } from '@expo-google-fonts/rajdhani';
import Routes from './src/routes/auth.routes';


export default function App() {
  let [fontsLoaded] = useFonts({
       Rajdhani_700Bold,
       Rajdhani_500Medium,
       Inter_400Regular,
       Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Routes/>
  );
}