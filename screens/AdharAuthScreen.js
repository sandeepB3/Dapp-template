import React, { useCallback, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';
import axios from 'axios';
import background_img from '../assets/background_login.jpg';
import block_logo from '../assets/blockchain_logo.png';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../store/userSlice";

const AdharAuthScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  
  const [adharno, setAdharNo] = useState('');
  const [mobileNo, setMobileNo] = useState('');

  const storeUser = useCallback(async(user) => {
    dispatch(setUserData(user));
  },[dispatch])

  const handleAdharAuth = async () => {
    try{
      const response = await axios.post('http://192.168.29.192:3000/api/adharAuth', 
        {adharno},
      );
      console.log(response.data.user);
      setMobileNo(response.data.user.mobileNumber);

      storeUser(response.data.user);
      navigation.navigate('OTP');

    }catch(error) {
      console.log(error);
     
    }
  };

  return (
    <View style={styles.container}>
    <Image style={styles.background_img} source={background_img} />

    <View style={styles.container1}>
      <View style={styles.s1}>
        <Image style={styles.logo} source={block_logo} />
        <Text style={styles.h1}>BlockChain Voting</Text>
        <Text style={styles.h2}>Transperent and Secured </Text>

      </View>

      <View style={styles.s2}>
        <Text style={styles.title}>Enter your Adhar Number:</Text>
        <TextInput style={styles.input} value={adharno} onChangeText={setAdharNo} />
        <TouchableOpacity style={styles.button} onPress={handleAdharAuth}>
          <Text style={styles.buttonText}>Verify Adhar</Text>
        </TouchableOpacity>
        {mobileNo ? <Text>{'\n'}Your mobile number is: {mobileNo}</Text> : null}
      </View>

    </View>
  </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  background_img: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
  },
  container1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  s1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%'
  },
  h1: {
    fontSize: 40,
    color: '#fff',
    fontWeight:'bold'
  },
  h2: {
    fontSize: 25,
    color: '#fff',
  },
  logo: {
     height:100,
     width:100,
     borderRadius:60,
     marginBottom:20
  },
  s2: {
    display: 'flex',
    backgroundColor: '#fff',
    width: '100%',
    height: '50%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: 20,
    alignItems:'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius:30
 
  },
  button: {
    backgroundColor: '#0066cc',
    padding: 15,
    borderRadius: 5,
    width:'50%',
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  }
});

export default AdharAuthScreen;
