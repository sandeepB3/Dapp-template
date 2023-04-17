import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from './screens/onboardingScreen';
import AdharAutherization from './screens/AdharAutherization';
import Home from './screens/HomeUI';


const Appstack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Appstack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Appstack.Screen name='Onboarding' component={OnboardingScreen}/> */}
        <Appstack.Screen name='Login' component={AdharAutherization}/>
        {/* <Appstack.Screen name='Home' component={Home}/> */}
        
      </Appstack.Navigator>
    </NavigationContainer>
  );
}

