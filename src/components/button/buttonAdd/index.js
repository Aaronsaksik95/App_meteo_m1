import React from 'react'
import styled from 'styled-components'
import { StyleSheet, Text, View } from 'react-native';

const ButtonForm = (props) => {
  return (
    <>
      <Button
        onPress={props.onPress}
      >
        <TextButton
          fontWeight={props.fontWeight}
        >{props.title}</TextButton>
      </Button>
    </>
  )
}
const Button = styled.TouchableOpacity`
    padding: 0px 25px;
`

const TextButton = styled.Text`
    color: white;
    font-size: 15px;
    font-weight: ${props => props.fontWeight};
`


export default ButtonForm