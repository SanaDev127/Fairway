import { Stack } from "expo-router";

const Layout = () => {
    return (
        <Stack>
      <Stack.Screen name="LeagueTable" options={{headerShown: false}} />
    </Stack>      
    )
}

export default Layout