import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import weather from '../weather'

const InfoDay = (props) => {
    const [dataCity, setDataCity] = useState()

    useEffect(() => {
        axios({
            method: 'GET',
            url: `https://api.meteo-concept.com/api/forecast/nextHours`,
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
            <Desc>{dataCity?.forecast && weather[dataCity?.forecast[0].weather][0]}.</Desc>
            <Border></Border>
            <ViewHour
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {
                    dataCity?.forecast?.map((item) => (
                        <ItemHour key={item.datetime}>
                            <Hour>{new Date(item.datetime).getHours()} h</Hour>
                            <Icon>{weather[item.weather][1]}</Icon>
                            <Temp>{item.temp2m}°</Temp>
                        </ItemHour>
                    ))
                }
                {
                    dataCity?.forecast?.map((item) => (
                        <ItemHour key={item.datetime}>
                            <Hour>{new Date(item.datetime).getHours()} h</Hour>
                            <Icon>{weather[item.weather][1]}</Icon>
                            <Temp>{item.temp2m}°</Temp>
                        </ItemHour>
                    ))
                }
            </ViewHour>
        </View>
    )
}
const View = styled.View`
  margin: 0px auto;
  width: 90%;
  background-color: #00000099;
  margin-top: 50px;
  padding: 15px;
  border-radius: 15px;
`
const ViewHour = styled.ScrollView`
  flex-direction: row;
`
const ItemHour = styled.View`
  flex-direction: column;
  margin: 0px 12px;
`
const Border = styled.View`
  border: 0.6px solid #ffffff1e;
  margin: 20px 0px;
`
const Desc = styled.Text`
  font-size: 13px;
  color: white;
`
const Hour = styled.Text`
  font-size: 15px;
  color: white;
`
const Icon = styled.Text`
  font-size: 17px;
  color: white;
  margin: 5px 0px;
`
const Temp = styled.Text`
  font-size: 18px;
  color: white;
`


export default InfoDay