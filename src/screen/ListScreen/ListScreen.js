import React, { useState } from 'react';
import { View } from 'react-native';
import InputForm from '../../components/inputForm/index';
import ButtonForm from '../../components/buttonForm/index';
import Logo from '../../components/logo/index';
import Message from '../../components/message/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const verifyUsername = () => {
        if (username.length < 3) {
            setMessage("Username doit contenir plus de 3 caractères.")
            return false
        }
        setMessage('')
        return true
    }
    const verifyPassword = () => {
        if (password.length < 8) {
            setMessage("Password doit contenir plus de 8 caractères.")
            return false
        }
        setMessage('')
        return true
    }
    const login = () => {
        verifyUsername()
        verifyPassword()
        if (verifyUsername() && verifyPassword()) {
            axios.post('https://easy-login-api.herokuapp.com/users/login', {
                username: username,
                password: password
            })
                .then(async function (response) {
                    await AsyncStorage.setItem(
                        'token',
                        response.headers['x-access-token']
                    );
                    navigation.navigate('Characters')
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    return (
        <View style={{ flex: 0.7, alignItems: 'center', justifyContent: 'center' }}>
            <Logo />
            <InputForm
                onChangeText={textValue => setUsername(textValue)}
                placeholder="Username"
                width={300}
                height={50}
            />
            <InputForm
                onChangeText={textValue => setPassword(textValue)}
                placeholder="Password"
                width={300}
                height={50}
                secureTextEntry={true}
            />
            <ButtonForm
                onPress={login}
                // () => navigation.navigate('Characters')}
                title="Connexion"
                width={300}
                height={50}
            />

            <Message fontSize='20px' title={message} />
        </View>
    );
};

export default LoginScreen;