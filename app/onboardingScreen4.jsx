import React from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
const OnboardingScreen1 = () => {
    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
      });
    return (
        <View style={styles.container}>
           <Image source={require("../assets/images/OnBoard4.png")} style={styles.onboardingimage1}></Image>
           <Text style={styles.title}>Join Us Now !</Text>
           <TouchableOpacity style={styles.NextButton}>
                    <Text style={styles.NextButtonText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.SkipButton} onPress={() => navigation.navigate("personalInfo")}>
                    <Text style={styles.SkipButtonText}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={styles.minitext}>Already have an account? <Text style={styles.signInText}>Sign In</Text></Text>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
    },
    onboardingimage1:{
        height: 254.97,
        width: 273.9,
        marginVertical: 100,
        marginHorizontal: 56,
        alignItems: "center",
        marginBottom:24,
        marginTop:104
    },
    title:{
        fontSize:40,
        fontFamily:'Poppins-SemiBold',
        marginBottom:104,
    },
    NextButton:{
        width:321,
        height: 49,
        backgroundColor:"#1C3F83",
        borderRadius:10,
        justifyContent:"center",
        marginBottom: 16
    },
    NextButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontFamily:'Poppins-SemiBold',
    },
    SkipButton:{
        width:321,
        height: 49,
        backgroundColor:"#fff",
        borderRadius:10,
        justifyContent:"center",
        borderColor: "#000",
        borderWidth: 1,
        marginBottom: 32
    },
    SkipButtonText: {
        color: '#000',
        textAlign: 'center',
        fontSize: 18,
        fontFamily:'Poppins-SemiBold',
    },
    minitext: {
        fontSize: 14,
        fontFamily:'Poppins-Medium',
        marginBottom: 50,
    },
    signInText: {
        color: '#1C3F83',
        fontSize:14,
        fontFamily:'Poppins-Medium',
    }
})

export default OnboardingScreen1;
