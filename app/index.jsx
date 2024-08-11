import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useNavigation } from 'expo-router';

export default function Index() {
  const navigation = useNavigation();
  const scale = useSharedValue(0);
  const rotate = useSharedValue(0);
  const opacity = useSharedValue(1);

  useEffect(() => {
    
    scale.value = withTiming(1, {
      duration: 2000,
      easing: Easing.bounce,
    });

   
    rotate.value = withTiming(360, {
      duration: 2000,
      easing: Easing.linear,
    });

    const timer = setTimeout(() => {
     
      opacity.value = withTiming(0, {
        duration: 1000, 
      });

      
      setTimeout(() => {
        navigation.navigate('onboardingScreen1');
      }, 1000); 
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigation, scale, rotate, opacity]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: scale.value },
        { rotate: `${rotate.value}deg` },
      ],
      opacity: opacity.value, 
    };
  });

  return (
    <View style={styles.container}>
      <Animated.Image 
        source={require("../assets/images/logo.png")} 
        style={[styles.logo, animatedStyle]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C3F83',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
