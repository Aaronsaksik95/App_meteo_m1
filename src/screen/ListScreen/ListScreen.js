import React, { useState, useEffect, useRef } from 'react';
// import { View } from 'react-native';
import InputSearch from '../../components/inputSearch/index';
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
                token: '48db8a26a68b70c8dce7b7c2bb37f4ae7c96e1345eb86a478f3cdbac67ac34af',
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
    const deleteCity = async (item) => {
        AsyncStorage.getItem("cities")
            .then((data) => {
                const arrayCities = JSON.parse(data).filter(value => value !== item)
                setCitiesStor(arrayCities)
                AsyncStorage.setItem('cities', JSON.stringify(arrayCities));
            })
    }

    return (
        <View>
            <Title title="Météo" />
            <InputSearch
                onChangeText={textValue => setCity(textValue)}
            />
            {city == "" && citiesStor && (
                <ViewWish showsVerticalScrollIndicator={false}>
                    {citiesStor.map((cityStor) => (
                        <WishCities key={cityStor} insee={cityStor} deleteCity={() => deleteCity(cityStor)} />
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