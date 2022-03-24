import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

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
                token: 'f0c5c1f65c0579d4064425e213cf4fda2a3a78ba16911b2b3ed86a543d93b4b4',
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
            <Title>🗓 PRÉVISIONS SUR 10 JOURS</Title>
            <Border></Border>
            <ViewOneDay>
                {
                    dataCity?.forecast?.map((item) => (
                        <>
                            <ItemDay key={item.datetime}>
                                <Day>{dayWeek[new Date(item.datetime).getDay()]}</Day>
                                <Icon>☀️</Icon>
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
  background-color: #122164c4;
  margin-top: 60px;
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
`
const Icon = styled.Text`
  font-size: 17px;
  color: white;
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