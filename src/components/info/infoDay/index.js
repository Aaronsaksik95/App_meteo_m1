import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import weather from '../../weather'
import uuid from 'react-native-uuid';

const InfoDay = (props) => {
  const [dataCity, setDataCity] = useState()

  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://api.meteo-concept.com/api/forecast/nextHours`,
      params: {
        token: '48db8a26a68b70c8dce7b7c2bb37f4ae7c96e1345eb86a478f3cdbac67ac34af',
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
            <ItemHour key={uuid.v4()}>
              <Hour>{new Date(item.datetime).getHours()} h</Hour>
              <Icon>{weather[item.weather][1]}</Icon>
              <Temp>{item.temp2m}°</Temp>
            </ItemHour>
          ))
        }
        {
          dataCity?.forecast?.map((item) => (
            <ItemHour key={uuid.v4()}>
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