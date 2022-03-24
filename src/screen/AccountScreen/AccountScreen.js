import React, { useState } from 'react';
import { View } from 'react-native';
import InputForm from '../../components/inputForm/index';
import ButtonForm from '../../components/buttonForm/index';
import Logo from '../../components/logo/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccountScreen = ({ navigation }) => {
    const logout = async () => {
        await AsyncStorage.removeItem('token')
        navigation.navigate('Login')

    }

    return (
        <View style={{ flex: 0.7, alignItems: 'center', justifyContent: 'center' }}>
            <Logo />
            <ButtonForm
                onPress={logout}
                // () => navigation.navigate('Characters')}
                title="Déconnexion"
                width={300}
                height={50}
            />
        </View>
    );
};

export default AccountScreen;