import { Stack, useRouter, useSegments } from "expo-router";
import {useEffect, useState} from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
//import { View } from "react-native-reanimated/lib/typescript/Animated";
import { View, ActivityIndicator } from "react-native";

export default function RootLayout() {
  const [initialising, setInitialising] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();
  const router = useRouter();
  const segments = useSegments();

  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    console.log('onAuthStateChanged', user)
    setUser(user);
    if (initialising) setInitialising(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, []);

  useEffect(() => {
    if (initialising) return;

    const inAuthGroup = segments[0] === "auth";

    if (user && !inAuthGroup) {
      router.replace("/auth/home");
    } else if (!user && inAuthGroup) {
      router.replace("/login");
    }

  }, [user, initialising]);


  if (initialising) return(
    <View
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    }}>
      <ActivityIndicator size="large" />
    </View>
  );

  return (
    <Stack>
      <Stack.Screen name="signup" options={{headerShown: false}} />
      <Stack.Screen name="login" options={{headerShown: false}} />
      <Stack.Screen name="index" options={{headerShown: false}} />
      <Stack.Screen name="home" options={{headerShown: false}} />
      <Stack.Screen name="auth" options={{headerShown: false}} />
      <Stack.Screen name="profile" options={{headerShown: false}} />
      <Stack.Screen name="game/startGame" options={{headerShown: false}} />
      <Stack.Screen name="game/Games" options={{headerShown: false}} />
    </Stack>
  );
}