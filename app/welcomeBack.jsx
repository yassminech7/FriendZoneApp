import React from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeBack = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require("../assets/images/Welcome.png")} style={styles.onboardingimage1}></Image>
            <Text style={styles.title}>Welcome Back !</Text>
            <TouchableOpacity style={styles.NextButton} onPress={() => navigation.navigate("search")}>
                <Text style={styles.NextButtonText}>Continue</Text>
            </TouchableOpacity>
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
    onboardingimage1: {
        height: 272,
        width: 323.7,
        marginVertical: 100,
        marginHorizontal: 56,
        alignItems: "center",
        marginBottom: 40,
        marginTop: 104
    },
    title: {
        fontSize: 24,
        fontFamily:'Poppins-SemiBold',
        marginBottom: 20,
    },
    NextButton: {
        width: 321,
        height: 49,
        backgroundColor: "#1C3F83",
        borderRadius: 10,
        justifyContent: "center",
        marginBottom: 16
    },
    NextButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontFamily:'Poppins-SemiBold',
    },
})

export default WelcomeBack;
