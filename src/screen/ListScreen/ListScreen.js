import React, { useState, useEffect } from 'react';
// import { View } from 'react-native';
import InputForm from '../../components/inputForm/index';
import Title from '../../components/title/index'
import ListCity from '../../components/listCity';
import axios from 'axios';
import styled from 'styled-components'

const ListScreen = ({ navigation }) => {
    const [city, setCity] = useState('')
    const [cities, setCities] = useState([])
    const [insee, setInsee] = useState('')

    useEffect(() => {
        axios({
            method: 'GET',
            url: `https://api.meteo-concept.com/api/location/cities`,
            params: {
                token: 'f0c5c1f65c0579d4064425e213cf4fda2a3a78ba16911b2b3ed86a543d93b4b4',
                search: city
            }
        })
            .then(response => {
                console.log(response.data.cities)
                setCities(response.data.cities)
            })
            .catch(error => {
                console.log(error)
            })
    }, [city])

    return (
        <View>
            <Title title="Météo" />
            <InputForm
                onChangeText={textValue => setCity(textValue)}
            />
            <ListCity cities={cities}/>
        </View>
    );
};
const View = styled.View`
  background-color: black;
  height: 100%;
`

export default ListScreen;