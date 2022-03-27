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

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }  

const ListScreen = ({ navigation }) => {
    const [city, setCity] = useState('')
    const [cities, setCities] = useState([])
    const [citiesStor, setCitiesStor] = useState([])
    const [refreshing, setRefreshing] = React.useState(false);
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
                token: 'c0346bcfe1a042c04a46e03232371b3b64c7034c81a7fc3e689d76c527ae125a',
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
        console.log(item)
        AsyncStorage.getItem("cities")
            .then((data) => {
                const arrayCities = JSON.parse(data).filter(value => value != item)
                console.log(arrayCities)
                AsyncStorage.setItem('cities', JSON.stringify(arrayCities));
                onRefresh()
            })
    }
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <View>
            <Title title="Météo" />
            <InputForm
                onChangeText={textValue => setCity(textValue)}
            />
            {city == "" && citiesStor && (
                <ViewWish showsVerticalScrollIndicator={false}>
                    {citiesStor.map((cityStor) => (
                        <WishCities insee={cityStor} deleteCity={() => deleteCity(cityStor)} />
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