import { Stack } from "expo-router";

const Layout = () => {
    return (
        <Stack>
      <Stack.Screen name="Games" options={{headerShown: false}} />
      <Stack.Screen name="startGame" options={{headerShown: false}} />
      <Stack.Screen name="GameResult" options={{headerShown: false}} />
      <Stack.Screen name="ActiveGame" options={{headerShown: false}} />
      <Stack.Screen name="ActiveGameScorecard" options={{headerShown: false}} />
      
    </Stack>      
    )
}

export default Layout