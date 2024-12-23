 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import Login from '@/screens/auth/login';
 import Home from '@/screens/main/home';

 const Stack = createStackNavigator();

 export default function App() {
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Home" component={Home} />
       </Stack.Navigator>
     </NavigationContainer>
   );
};