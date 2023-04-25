import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AdharAuthScreen from './screens/AdharAuthScreen';
import Home from './screens/HomeUI';
import OTPScreen from './screens/OTPScreen';
import FingerprintScanner from './screens/FingerPrintScreen';
import DetailsElection from './screens/DetailsElection';
import ElectionScreen from './screens/ElectionScreen';
import { Provider } from 'react-redux';
import store from './store/store'


const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name='Login' component={AdharAuthScreen}/>
          <Stack.Screen name='OTP' component={OTPScreen}/> */}
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='ElectionScreen' component={ElectionScreen}/>
          <Stack.Screen name='DetailsScreen' component={DetailsElection}/>

          {/* <Stack.Screen name='FingerPrint' component={FingerprintScanner}/> */}
          {/* <Stack.Screen name='OTP' component={}/> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

