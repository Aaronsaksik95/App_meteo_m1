import React from 'react'
import styled from 'styled-components'

const InputForm = (props) => {
  return (
    <>
      <Input
        placeholder={props.placeholder}
        placeholderTextColor="grey"
        width={props.width}
        height={props.height}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
      />
    </>
  )
}
const Input = styled.TextInput`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${10};
  padding-left: 10px;
  margin: 10px ;
  background-color: ${props => props.theme.bluelight};
`

export default InputForm