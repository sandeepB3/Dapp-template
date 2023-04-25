import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { useSelector } from "react-redux";

 const ProfileScreen =()=> {
  const userData = useSelector(state => state.user.data);
    return (
      <View>
        <Text> {userData.name} </Text>
        <Text> {userData.mobileNumber} </Text>
      </View>
    )
  
}

export default ProfileScreen;