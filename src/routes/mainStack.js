import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CityScreen from '../screen/CityScreen/CityScreen';
import ListScreen from '../screen/ListScreen/ListScreen';

const BottomTab = createBottomTabNavigator()
const MainStack = () => {
    return (
        <BottomTab.Navigator
            screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: "#112062" } }}

        >
            <BottomTab.Screen name="City" component={CityScreen} />
            <BottomTab.Screen name="List" component={ListScreen} />
        </BottomTab.Navigator>
    );
};

export default MainStack;