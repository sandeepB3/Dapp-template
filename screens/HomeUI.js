import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ElectionScreen from './ElectionScreen';
import ResultScreen from './ResultScreen';
import ProfileScreen from './ProfileScreen';
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const HomeUI = () => {
  return (
    
    <Tab.Navigator>
        <Tab.Screen name="Election" 
		component={ElectionScreen} 
		options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="vote" color={color} size={size} />
          )}}
		/>
        <Tab.Screen name="Result" 
		component={ResultScreen} 
		options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="poll" color={color} size={size} />
          )}}
		/>
        <Tab.Screen name="UserProfile" 
		component={ProfileScreen}
		options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={size} />
          )}} />
      </Tab.Navigator>
    
  );
};

export default HomeUI;