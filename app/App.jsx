import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect } from "react";
import { useFonts } from 'expo-font';

const App = () => {
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
    
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }
    return (
        <AuthProvider>
        <NavigationContainer 
          theme={navigationTheme}
          onReady={onLayoutRootView}
        >
            {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </AuthProvider>
    );
}


export default App;
