import React from 'react'
import styled from 'styled-components'
import { StyleSheet, Text, View } from 'react-native';

const ButtonForm = (props) => {
  return (
    <>
      <Button
        onPress={props.onPress}
        width={props.width}
        height={props.height}
      >
        <TextButton>{props.title}</TextButton>
      </Button>
    </>
  )
}
const Button = styled.TouchableOpacity`
    background-color:${props => props.theme.red};
    border-radius: 10px;
    padding: 20px 50px;
    margin: 30px;
`

const TextButton = styled.Text`
    color: white;
    font-size: 20px;
`


export default ButtonForm