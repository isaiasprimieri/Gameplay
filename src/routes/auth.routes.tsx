import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Appointment } from '../screen/appointment';
import { SignIn } from '../screen/SignIn';
import { Home } from '../screen/Home';
import { theme } from '../global/theme';
import { ConstraintDetails } from '../components/ConstraintDetails';



export default function Routes() {
  const Stack = createNativeStackNavigator()

  return (
    <>
    <NavigationContainer >
      <Stack.Navigator initialRouteName='SignIn'
      screenOptions={{
        headerShown: false,
        header: () => null,
        contentStyle: { backgroundColor: theme.colors.secondary90}

      }}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Appointment" component={Appointment} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ConstraintDetails" component={ConstraintDetails} />


      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}