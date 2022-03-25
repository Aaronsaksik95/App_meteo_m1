import React, { useState, useEffect, useRef } from 'react';
// import { View } from 'react-native';
import InputForm from '../../components/inputForm/index';
import Title from '../../components/title/index'
import ListCity from '../../components/listCity';
import axios from 'axios';
import styled from 'styled-components'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import WishCities from '../../components/wishCities';

const ListScreen = ({ navigation }) => {
    const [city, setCity] = useState('')
    const [cities, setCities] = useState([])
    const [citiesStor, setCitiesStor] = useState([])
    const timerRef = useRef(null)
    useFocusEffect(
        React.useCallback(() => {
            AsyncStorage.getItem("cities")
                .then((data) => {
                    setCitiesStor(JSON.parse(data))
                    console.log(citiesStor)
                })

            clearTimeout(timerRef.current)
            timerRef.current = setTimeout(() => {
                callCity()
            }, 300)
        }, [city])
    );

    const callCity = () => {
        axios({
            method: 'GET',
            url: `https://api.meteo-concept.com/api/location/cities`,
            params: {
                token: '1cfabdf6f8f17eaf8933da5b75cb8b7f0bcc90957d59fc8f439b5b5404d1696d',
                search: city
            }
        })
            .then(response => {
                setCities(response.data.cities.splice(0, 20))
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <View>
            <Title title="Météo" />
            <InputForm
                onChangeText={textValue => setCity(textValue)}
            />
            {city == "" && citiesStor && (
                <ViewWish showsVerticalScrollIndicator={false}>
                    {citiesStor.map((cityStor) => (
                        <WishCities insee={cityStor} />
                    ))
                    }
                </ViewWish>
            )
            }
            <ListCity cities={cities} />
        </View>
    );
};
const View = styled.View`
  background-color: black;
  height: 100%;
`
const ViewWish = styled.ScrollView`
`

export default ListScreen;