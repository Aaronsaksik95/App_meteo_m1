import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainStack from './mainStack';

const Stack = createNativeStackNavigator()

const Routes = () => {
    // const [token, setToken] = useState('')
    // const getToken = async () => {
    //     setToken(AsyncStorage.getItem('token'))
    // }
    // useEffect(() => {
    //     getToken()
    // }, [])

    return (

        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="MainStack" component={MainStack} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;