import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import weather from '../weather'
import { useNavigation } from '@react-navigation/native'

const ListCity = (props) => {
  const navigation = useNavigation()
  useEffect(() => {

  }, [])
  return (
    <View>
      {
        // console.log(props)
        props.cities.map((item) => (
          <Button
            onPress={() => {
              navigation.navigate('City', {
                insee: item.insee,
              });
            }}
          >
            <TextButton>{item.name}</TextButton>
          </Button>
        ))
      }
    </View>
  )
}

const Button = styled.TouchableOpacity`
  margin-top: 22px;
`
const TextButton = styled.Text`
    color: white;
    font-size: 14px;
`
const View = styled.ScrollView`
  flex-direction: column;
  margin: 0px auto;
  width: 90%;
  margin-top: 10px;
`

export default ListCity