import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import axios from 'axios';
import CardDetail from '../../components/cardDetail/index';

const DetailScreen = ({ route, navigation }) => {
    const { itemId } = route.params;
    const [character, setCharacter] = useState({})
    useEffect(() => {
        axios.get(`https://gateway.marvel.com/v1/public/characters/${itemId}?ts=1&apikey=51f5653d973d80fcbea3d50882ddaa93&hash=711890d64d763846dd2c44750a224905`)
            .then((response) => {
                setCharacter(response.data.data.results[0])
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])
    return (
        <>
            <CardDetail
                name={character.name}
                img={`https:${character?.thumbnail?.path.split(":")[1]}`}
                ext={character?.thumbnail?.extension}
            />
        </>
    );
};

export default DetailScreen;