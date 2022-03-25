import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import InfoTitle from '../../components/infoTitle/index'
import InfoDay from '../../components/infoDay/index'
import InfoTenDay from '../../components/infoTenDays/index'
import ImageBgd from '../../components/imageBgd/index'
import Search from "../../components/search";
import ButtonAdd from "../../components/buttonAdd/index"
import styled from 'styled-components'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from '@react-navigation/native';

const CityScreen = ({ route, navigation }) => {
    const { insee } = route.params;
    const [cities, setCities] = useState([])
    useEffect(() => {
        AsyncStorage.getItem('cities')
            .then((data) => {
                setCities(JSON.parse(data))
            })
    }, [])
    // if (cities === null) {
    //     await AsyncStorage.setItem('cities', JSON.stringify([insee]));
    // } else {
    //     setCities([...cities, insee]);
    //     await AsyncStorage.setItem('cities', JSON.stringify(cities));
    // }

    return (
        <>
            <ImageBgd insee={insee}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {cities != null && cities.includes(insee) ? (
                        <Search
                            onPress={() => {
                                navigation.navigate('List')
                            }}
                        />
                    ) : (
                        <ViewButtonAdd>
                            <ButtonAdd fontWeight="400" title="Annuler" onPress={() => {
                                navigation.navigate('List')
                            }} />
                            <ButtonAdd fontWeight="700" title="Ajouter" onPress={async () => {
                                const cities = await AsyncStorage.getItem('cities');
                                const citiesParse = await JSON.parse(cities);
                                if (cities === null) {
                                    await AsyncStorage.setItem('cities', JSON.stringify([insee]));
                                } else {
                                    await AsyncStorage.setItem('cities', JSON.stringify([...citiesParse, insee]));
                                }
                                navigation.navigate('List')
                                // await AsyncStorage.removeItem('cities')
                            }} />
                        </ViewButtonAdd>
                    )
                    }
                    <InfoTitle
                        insee={insee}
                    />

                    <InfoDay
                        insee={insee}
                    />
                    <InfoTenDay
                        insee={insee}
                    />
                </ScrollView>

            </ImageBgd>
        </>
    );
};

const ViewButtonAdd = styled.View`
    flex-direction: row;
    position: absolute;
    top: 50px;
    justify-content: space-between;
    width: 100%;
`

export default CityScreen;