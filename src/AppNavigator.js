import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from './Register';
import SplashScreen from './SplashScreen';
import LogIn from './LogIn';
import Home from './Home';

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen screen */}
        <Stack.Screen
          name="SplashScreen"
          options={{
            headerShown: false,
          }}>
          {props => (
            <SplashScreen {...props} channelName={'educative system'} />
          )}
        </Stack.Screen>

        {/* Register screen */}
        <Stack.Screen name="Register" component={Register} />
        {/* LogIn screen */}
        <Stack.Screen name="LogIn" component={LogIn} />
        {/* Home screen */}
        <Stack.Screen name="Home" component={Home} />
        {/*
   <Contactus />
    <SignInScreen/>
        */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
