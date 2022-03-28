import React from 'react'
import styled from 'styled-components'
import { StyleSheet, Text, View } from 'react-native';
import corbeille from '../../../../assets/corbeille.png'

const ButtonForm = (props) => {
  return (
    <>
      <ButtonDelete onPress={props.onPress}>
        <Image
          source={corbeille}
        />
      </ButtonDelete>
    </>
  )
}
const Image = styled.Image`
  width: 30px;
  height: 30px;
  margin: auto;
`
const ButtonDelete = styled.TouchableOpacity`
  background-color: red;
  height: 90%;
  width: 100%;
  border-radius: 20px;
  margin: 10px auto;
`


export default ButtonForm