import React from 'react'
import styled from 'styled-components'

const InputForm = (props) => {
  return (
    <>
      <Input
        placeholder="Rechercher une ville"
        onChangeText={props.onChangeText}
      />
    </>
  )
}
const Input = styled.TextInput`
  width: 95%;
  height: 30px;
  margin: 0px auto;
  border-radius: 5px;
  padding-left: 12px;
  color: white;
  background-color: #252525;
`

export default InputForm