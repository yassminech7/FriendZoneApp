import React, { useCallback, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
const OnboardingScreen1 = () => {
    const navigation = useNavigation();

    SplashScreen.preventAutoHideAsync();
    const [fontsLoaded] = useFonts({
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
        'Poppins-Thin': require('../assets/fonts/Poppins-Thin.ttf'),
        'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
        'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
        
      });

      useEffect(() => {
        async function prepare() {
          await SplashScreen.preventAutoHideAsync();
        }
        prepare();
      }, []);
    
      if (!fontsLoaded) {
        return null;
      }


    return (
        
        <View style={styles.container}>
           <Image source={require("../assets/images/OnBoard1.png")} style={styles.onboardingimage1}></Image>
           <Text style={styles.title}>Explore the World</Text>
           <Text style={styles.subtitle}>Discover New Places and Cultures, {'\n'}Share Your Adventures</Text>
           <TouchableOpacity style={styles.NextButton}>
                    <Text style={styles.NextButtonText}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.SkipButton} onPress={() => navigation.navigate("onboardingScreen4")}>
                    <Text style={styles.SkipButtonText}>Skip</Text>
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
        height: 241,
        width: 300,
        marginVertical: 100,
        marginHorizontal: 56,
        alignItems: "center",
        marginBottom:24,
        marginTop:104
    },
    title:{
        fontSize:20,
        marginBottom:8,
        alignSelf: 'flex-start',
        fontFamily:'Poppins-SemiBold',
        paddingHorizontal: 55,
    },
    subtitle:{
        fontSize:16,
        fontFamily:'Poppins-Medium',
        marginBottom:86,
        alignSelf: 'flex-start',
        paddingHorizontal: 55,
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
