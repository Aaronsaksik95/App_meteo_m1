import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import InfoTitle from '../../components/info/infoTitle/index'
import InfoDay from '../../components/info/infoDay/index'
import InfoTenDay from '../../components/info/infoTenDays/index'
import ImageBgd from '../../components/imageBgd/index'
import Search from "../../components/searchIcon";
import ButtonAdd from "../../components/button/buttonAdd/index"
import styled from 'styled-components'
import AsyncStorage from "@react-native-async-storage/async-storage";

const CityScreen = ({ route, navigation }) => {
    const { insee } = route.params;
    const [cities, setCities] = useState([])
    useEffect(() => {
        AsyncStorage.getItem('cities')
            .then((data) => {
                setCities(JSON.parse(data))
            })
    }, [])
    const addCities = async () => {
        const cities = await AsyncStorage.getItem('cities');
        const citiesParse = await JSON.parse(cities);
        if (cities === null) {
            await AsyncStorage.setItem('cities', JSON.stringify([insee]));
        } else {
            await AsyncStorage.setItem('cities', JSON.stringify([...citiesParse, insee]));
        }
        navigation.navigate('List')
        // await AsyncStorage.removeItem('cities')
    }

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
                            <ButtonAdd fontWeight="700" title="Ajouter" onPress={addCities} />
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