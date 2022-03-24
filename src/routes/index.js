import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CityScreen from '../screen/CityScreen/CityScreen';
import ListScreen from '../screen/ListScreen/ListScreen';

const Stack = createNativeStackNavigator()

const Routes = () => {
    return (

        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="List" component={ListScreen} />
                <Stack.Screen name="City" component={CityScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;