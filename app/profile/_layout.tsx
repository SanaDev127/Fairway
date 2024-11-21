import { Stack } from "expo-router";

const Layout = () => {
    return (
        <Stack>
      <Stack.Screen name="buddies" options={{headerShown: false}} />
      <Stack.Screen name="clubDetails" options={{headerShown: false}} />
      <Stack.Screen name="personalDetails" options={{headerShown: false}} />
      <Stack.Screen name="profileHome" options={{headerShown: false}} />
    </Stack>      
    )
}

export default Layout