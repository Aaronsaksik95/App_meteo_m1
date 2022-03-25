import React from 'react'
import styled from 'styled-components'

const Title = (props) => {
  return (
    <>
      <Text>{props.title}</Text>
    </>
  )
}
const Text = styled.Text`
  margin: 80px 0px 20px 10px;
  color: white;
  font-size: 30px;
  font-weight: 700;
`

export default Title