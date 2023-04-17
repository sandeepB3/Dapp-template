import React from 'react'
import { Text, View,Button,StyleSheet ,Image} from 'react-native'
// import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen=({navigation}) => {

    return (
        // <Onboarding 
        //     pages ={[
        //         {
        //             backgroundColor:'#fff',
        //             image:<Image source={require
        //             ('../assets/blockchain1.png')}/>,
        //             title:'onboarding1',
        //             subtitle:'Blockchain information'
        //         },
        //         {
        //             backgroundColor:'#fff',
        //             image:<Image source={require
        //             ('../assets/blockchain1.png')}/>,
        //             title:'onboarding1',
        //             subtitle:'Blockchain information'
        //         }
        //     ]}


        // />
        <View>
            <Text>Starting screen</Text>
        </View>
    )

}

export default OnboardingScreen;


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'

    }
})