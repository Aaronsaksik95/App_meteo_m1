import React from 'react'
import styled from 'styled-components'
import marvel from '../../../assets/marvel.png'
import { Image } from 'react-native';

const Logo = () => {
  return (
    <>
      <LogoMarvel
        source={marvel}
      />
    </>
  )
}
const LogoMarvel = styled.Image`
  width: 200px;
  height: 90px;
  margin-bottom: 20px;
`

export default Logo