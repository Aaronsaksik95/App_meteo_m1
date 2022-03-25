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