import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import League from "../screens/league/LeagueTable"
import Games from "../screens/main/game/Games";

const Tab = createBottomTabNavigator();

const ClubTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="League" component={League} />
            <Tab.Screen name="Games" component={Games} />
        </Tab.Navigator>
    );
};

export default ClubTabs;