import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import InfoTitle from '../../components/infoTitle/index'
import InfoDay from '../../components/infoDay/index'
import InfoTenDay from '../../components/infoTenDays/index'
import styled from 'styled-components'

const image = { uri: "https://img.redro.fr/tableaux/le-ciel-etoile-et-la-lune-700-55732386.jpg" };

const hourByHour = [
    {
        hour: "00 h",
        icon: "🌙",
        temp: "7°",
    },
    {
        hour: "01 h",
        icon: "🌙",
        temp: "7°",
    },
    {
        hour: "02 h",
        icon: "🌙",
        temp: "7°",
    },
    {
        hour: "03 h",
        icon: "🌙",
        temp: "7°",
    },
    {
        hour: "04 h",
        icon: "🌙",
        temp: "7°",
    },
    {
        hour: "05 h",
        icon: "🌙",
        temp: "7°",
    },
    {
        hour: "06 h",
        icon: "🌙",
        temp: "7°",
    },
    {
        hour: "07 h",
        icon: "☀️",
        temp: "7°",
    },
    {
        hour: "08 h",
        icon: "☀️",
        temp: "7°",
    },
    {
        hour: "09 h",
        icon: "☀️",
        temp: "7°",
    },
    {
        hour: "10 h",
        icon: "☀️",
        temp: "7°",
    },
    {
        hour: "11 h",
        icon: "☀️",
        temp: "7°",
    },
    {
        hour: "12 h",
        icon: "☀️",
        temp: "7°",
    },
    {
        hour: "13 h",
        icon: "☀️",
        temp: "7°",
    },
    {
        hour: "14 h",
        icon: "☀️",
        temp: "7°",
    },
    {
        hour: "15 h",
        icon: "☀️",
        temp: "7°",
    },
    {
        hour: "16 h",
        icon: "☀️",
        temp: "7°",
    },
    {
        hour: "17 h",
        icon: "☀️",
        temp: "7°",
    },
    {
        hour: "18 h",
        icon: "☀️",
        temp: "7°",
    },
    {
        hour: "19 h",
        icon: "🌙",
        temp: "7°",
    },
    {
        hour: "20 h",
        icon: "🌙",
        temp: "7°",
    },
    {
        hour: "21 h",
        icon: "🌙",
        temp: "7°",
    },
    {
        hour: "22 h",
        icon: "🌙",
        temp: "7°",
    },
    {
        hour: "23 h",
        icon: "🌙",
        temp: "7°",
    },
    {
        hour: "00 h",
        icon: "🌙",
        temp: "7°",
    },
    {
        hour: "11 h",
        icon: "🌙",
        temp: "7°",
    },

]


const CityScreen = () => (
    <>
        <ImageBackground source={image} resizeMode="cover">
            <ScrollView>
                <InfoTitle
                    insee='35238'
                    desc='Temps clair'
                />
                <InfoDay
                    desc='Temps clair ce soir et demain matin.'
                />
                <InfoTenDay />
            </ScrollView>
        </ImageBackground>
    </>
);

const ImageBackground = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     image: {
//         flex: 1,
//         justifyContent: "center"
//     },
// });

export default CityScreen;