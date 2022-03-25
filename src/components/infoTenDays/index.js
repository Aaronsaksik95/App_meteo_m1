import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import weather from '../weather'

const InfoDay = (props) => {
    const [dataCity, setDataCity] = useState()
    const [dayWeek] = useState({
        '0': 'Dim.',
        '1': 'Lun.',
        '2': 'Mar.',
        '3': 'Mer.',
        '4': 'Jeu.',
        '5': 'Ven.',
        '6': 'Sam.',
    })
    useEffect(() => {
        axios({
            method: 'GET',
            url: `https://api.meteo-concept.com/api/forecast/daily`,
            params: {
                token: '1cfabdf6f8f17eaf8933da5b75cb8b7f0bcc90957d59fc8f439b5b5404d1696d',
                insee: props.insee
            }
        })
            .then(response => {
                setDataCity(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <View>
            <Title>🗓 PRÉVISIONS SUR 14 JOURS</Title>
            <Border></Border>
            <ViewOneDay>
                {
                    dataCity?.forecast?.map((item) => (
                        <>
                            <ItemDay key={item.datetime}>
                                <Day>{dayWeek[new Date(item.datetime).getDay()]}</Day>
                                <Icon>{dataCity?.forecast && weather[item.weather][1]}</Icon>
                                <MaxMinView>
                                    <MaxMin>{item.tmin}°</MaxMin>
                                    <MaxMin>{item.tmax}°</MaxMin>
                                </MaxMinView>
                            </ItemDay>
                            <Border></Border>
                        </>
                    ))
                }
            </ViewOneDay>
        </View>
    )
}
const View = styled.View`
  margin: 0px auto;
  width: 90%;
  background-color: #00000099;
  margin-top: 10px;
  padding: 15px;
  border-radius: 15px;
`
const ViewOneDay = styled.View`
  flex-direction: column;
`
const ItemDay = styled.View`
  flex-direction: row;
  justify-content: space-around;
`
const Border = styled.View`
  border: 0.6px solid #ffffff1e;
  margin: 12px 0px;
`
const Title = styled.Text`
  font-size: 13px;
  color: white;
`
const Day = styled.Text`
  font-size: 15px;
  color: white;
  width: 20%;
`
const Icon = styled.Text`
  font-size: 17px;
  color: white;
  width: 20%;
`
const MaxMinView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
`
const MaxMin = styled.Text`
  font-size: 18px;
  color: white;
`


export default InfoDay