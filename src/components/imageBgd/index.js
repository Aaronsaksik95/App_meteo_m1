import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import weather from '../weather/index'
import axios from 'axios'

const image = { uri: "https://img.redro.fr/tableaux/le-ciel-etoile-et-la-lune-700-55732386.jpg" };

const ImageBgd = (props) => {
  const [dataCity, setDataCity] = useState({})

  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://api.meteo-concept.com/api/forecast/nextHours`,
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