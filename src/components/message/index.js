import React from 'react'
import styled from 'styled-components'

const Message = (props) => {
  return (
    <>
      <Text
        fontSize={props.fontSize}
      >{props.title}</Text>
    </>
  )
}
const Text = styled.Text`
  font-size: ${props => props.fontSize};
  color: ${props => props.theme.red};
`

export default Message