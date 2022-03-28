import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import weather from '../weather/index'
import axios from 'axios'

const ImageBgd = (props) => {
  const [dataCity, setDataCity] = useState({})

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

    <ImageBackground source={{
      uri: dataCity?.forecast && weather[dataCity?.forecast[0].weather][2]
    }}
      resizeMode="cover">
      {props.children}
    </ImageBackground>
  )
}
const ImageBackground = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`

export default ImageBgd