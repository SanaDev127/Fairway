import { Stack } from "expo-router";

const Layout = () => {
    return (
        <Stack>
      <Stack.Screen name="noticeBoard" options={{headerShown: false}} />
    </Stack>      
    )
}

export default Layout