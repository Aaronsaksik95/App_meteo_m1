import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import weather from '../weather/index'
import axios from 'axios'

const InfoTitle = (props) => {
  const [dataCity, setDataCity] = useState({})
  const [tmin, setTmin] = useState('')
  const [tmax, setTmax] = useState('')

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

    axios({
      method: 'GET',
      url: `https://api.meteo-concept.com/api/forecast/daily`,
      params: {
        token: '1cfabdf6f8f17eaf8933da5b75cb8b7f0bcc90957d59fc8f439b5b5404d1696d',
        insee: props.insee
      }
    })
      .then(response => {
        setTmin(response.data.forecast[0].tmin)
        setTmax(response.data.forecast[0].tmax)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <View>
      <City>{dataCity?.city?.name}</City>
      <Temp>{dataCity?.forecast && dataCity?.forecast[0]?.temp2m}°</Temp>
      <Desc>{dataCity?.forecast && weather[dataCity?.forecast[0].weather][0]}</Desc>
      <MaxMinView>
        <MaxMin>Max. {tmax}°</MaxMin>
        <MaxMin>Min. {tmin}°</MaxMin>
      </MaxMinView>
    </View>
  )
}
const View = styled.View`
  align-items: center;
  vertical-align: top;
  margin-top: 20%;
`
const City = styled.Text`
  font-size: 34px;
  color: white;
`
const Temp = styled.Text`
  font-size: 100px;
  font-weight: 200;
  color: white;
  margin-left: 30px;
`
const Desc = styled.Text`
  font-size: 18px;
  color: white;
`
const MaxMinView = styled.View`
  flex-direction: row;
`
const MaxMin = styled.Text`
  font-size: 18px;
  color: white;
  padding: 0px 5px;
`

export default InfoTitle