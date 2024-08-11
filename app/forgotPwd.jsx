import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import UserIcon from '../icons/UserIcon';
import PhoneIcon from '../icons/PhoneIcon';
import EmailIcon from '../icons/EmailIcon';

const ForgotPwd = () => {
    const navigation = useNavigation();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [pwd, setPwd] = useState('');
    const [errors, setErrors] = useState({ userName: '', email: '', phone: '', pwd: '' });

    const validateFields = () => {
        let valid = true;
        let errors = { userName: '', email: '', phone: '', pwd: '' };

        if (userName.trim() === '') {
            errors.userName = 'User name is required';
            valid = false;
        } else if (!/^[A-Za-z\s]+$/.test(userName.trim())) {
            errors.userName = 'User name should only contain letters and spaces';
            valid = false;
        }

        if (email.trim() === '') {
            errors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email.trim())) {
            errors.email = 'Email is invalid';
            valid = false;
        }

        if (phone.trim() === '') {
            errors.phone = 'Phone number is required';
            valid = false;
        } else if (!/^\d+$/.test(phone.trim())) {
            errors.phone = 'Phone number should only contain digits';
            valid = false;
        } else if (phone.trim().length < 8 || phone.trim().length > 15) {
            errors.phone = 'Phone number should be between 8 and 15 digits';
            valid = false;
        }

        if (pwd.trim() === '') {
            errors.pwd = 'Password is required';
            valid = false;
        }

        setErrors(errors);
        return valid;
    };

    const handleNext = async () => {
        if (validateFields()) {
            navigation.navigate('welcomeBack');
        }
    };

    const handleUserNameChange = (text) => {
        setUserName(text);
        if (text.trim() === '') {
            setErrors(prev => ({ ...prev, userName: 'User name is required' }));
        } else if (!/^[A-Za-z\s]+$/.test(text.trim())) {
            setErrors(prev => ({ ...prev, userName: 'User name should only contain letters and spaces' }));
        } else {
            setErrors(prev => ({ ...prev, userName: '' }));
        }
    };

    const handleEmailChange = (text) => {
        setEmail(text);
        if (text.trim() === '') {
            setErrors(prev => ({ ...prev, email: 'Email is required' }));
        } else if (!/\S+@\S+\.\S+/.test(text.trim())) {
            setErrors(prev => ({ ...prev, email: 'Email is invalid' }));
        } else {
            setErrors(prev => ({ ...prev, email: '' }));
        }
    };

    const handlePhoneChange = (text) => {
        setPhone(text);
        if (text.trim() === '') {
            setErrors(prev => ({ ...prev, phone: 'Phone number is required' }));
        } else if (!/^\d+$/.test(text.trim())) {
            setErrors(prev => ({ ...prev, phone: 'Phone number should only contain digits' }));
        } else if (text.trim().length < 8 || text.trim().length > 15) {
            setErrors(prev => ({ ...prev, phone: 'Phone number should be between 8 and 15 digits' }));
        } else {
            setErrors(prev => ({ ...prev, phone: '' }));
        }
    };

    const handlePwdChange = (text) => {
        setPwd(text);
        if (text.trim() === '') {
            setErrors(prev => ({ ...prev, pwd: 'Password is required' }));
        } else {
            setErrors(prev => ({ ...prev, pwd: '' }));
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Icon name="angle-left" size={35} color="#000" />
            </TouchableOpacity>
            <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
            <View style={styles.content}>
            <Text style={styles.title}>Forgot Password</Text>
            <Text style={styles.subtitle}>Let’s help recover your account</Text>
                <View style={styles.inputBox}>
                    <Text style={styles.inputLabel}>Username</Text>
                    <View style={styles.inputContainer}>
                    <UserIcon style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            value={userName}
                            onChangeText={handleUserNameChange}
                        />
                    </View>
                    {errors.userName ? <Text style={styles.errorText}>{errors.userName}</Text> : null}
                </View>

                <View style={styles.inputBox}>
                    <Text style={styles.inputLabel}>Email</Text>
                    <View style={styles.inputContainer}>
                        <EmailIcon style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            value={email}
                            onChangeText={handleEmailChange}
                        />
                    </View>
                    {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
                </View>

                <View style={styles.inputBox}>
                    <Text style={styles.inputLabel}>Phone Number</Text>
                    <View style={styles.inputContainer}>
                        <PhoneIcon style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            value={phone}
                            onChangeText={handlePhoneChange}
                        />
                    </View>
                    {errors.phone ? <Text style={styles.errorText}>{errors.phone}</Text> : null}
                </View>

                <View style={styles.inputBox}>
                    <Text style={styles.inputLabel}>Last Remembered password</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            value={pwd}
                            onChangeText={handlePwdChange}
                        />
                    </View>
                    {errors.pwd ? <Text style={styles.errorText}>{errors.pwd}</Text> : null}
                </View>
                <TouchableOpacity style={styles.NextButton} onPress={handleNext}>
                    <Text style={styles.NextButtonText}>Done</Text>
                </TouchableOpacity>
                    <Text style={styles.minitext}>Already have an account? <Text style={styles.signInText}>Sign In</Text></Text>
                    </View>
                </ScrollView>
            </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingTop: 110,
    },
    title: {
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
        marginBottom: 5,
        alignSelf: 'flex-start',
        paddingHorizontal: 45,
        right:20,
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        textAlign: 'left',
        marginBottom: 21,
        alignSelf: 'flex-start',
        paddingHorizontal: 45,
        right:20,
    },
    scrollContainer: {
        flexGrow: 1,
        paddingHorizontal: 20,
    },
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 50,
        top:17
    },
    inputBox: {
        marginBottom: 12,
    },
    inputLabel: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        marginBottom: 6,
        textAlign: 'left',
    },
    NextButton: {
        width: 321,
        height: 49,
        backgroundColor: "#1C3F83",
        borderRadius: 10,
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 37,
        
    },
    NextButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
    },
    minitext: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        marginBottom: 50,
        
    },
    signInText: {
        color: '#1C3F83',
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
    },
    inputContainer: {
        width: 321,
        height: 49,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F2F2F2',
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    icon: {
        marginRight: 10,
        width: 24,
        height: 24,
        color: "#000",
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 40,
        zIndex: 1,
    },
    input: {
        flex: 1,
        height: 40,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
        textAlign: 'left',
        alignSelf: 'flex-start',
    },
});


export default ForgotPwd;
