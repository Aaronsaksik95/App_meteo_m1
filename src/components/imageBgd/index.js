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
        token: 'c0346bcfe1a042c04a46e03232371b3b64c7034c81a7fc3e689d76c527ae125a',
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