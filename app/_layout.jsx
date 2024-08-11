import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="App" options={{headerShown:false}} />
      <Stack.Screen name="index" options={{headerShown:false}} />
      <Stack.Screen name="onboardingScreen1" options={{headerShown:false}} />
      <Stack.Screen name="onboardingScreen4" options={{headerShown:false}} />
      <Stack.Screen name="personalInfo" options={{headerShown:false}} />
      <Stack.Screen name="forgotPwd" options={{headerShown:false}} />
      <Stack.Screen name="welcomeBack" options={{headerShown:false}} />
      <Stack.Screen name="eventDetails" options={{headerShown:false}} />
      <Stack.Screen name="search" options={{headerShown:false}} />
      <Stack.Screen name="myTickets" options={{headerShown:false}} />
    </Stack>
  );
}
