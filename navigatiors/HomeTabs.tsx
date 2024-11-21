import React from 'react';
 import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
 import Home from "../screens/main/home";
 import Games from "../screens/main/game/Games";
 import StartGame from "../screens/main/game/startGame";
 import Profile from "../screens/main/profile/profileHome";

 const Tab = createBottomTabNavigator();

 const HomeTabs = () => {
     return(
         <Tab.Navigator>
             <Tab.Screen name="Home" component={Home} />
             <Tab.Screen name="Games" component={Games} />
             <Tab.Screen name="StartGame" component={StartGame} />
             <Tab.Screen name="Profile" component={Profile} />
         </Tab.Navigator>
     )
 };

 export default HomeTabs;