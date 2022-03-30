import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import weather from '../weather/index'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import Swipeout from 'react-native-swipeout';
import ButtonDelete from '../../components/button/buttonDelete/index'

const WishCities = (props) => {
  const navigation = useNavigation()
  const [dataCity, setDataCity] = useState({})
  const [tmin, setTmin] = useState('')
  const [tmax, setTmax] = useState('')

  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://api.meteo-concept.com/api/forecast/nextHours`,
      params: {
        token: '48db8a26a68b70c8dce7b7c2bb37f4ae7c96e1345eb86a478f3cdbac67ac34af',
        insee: props.insee
      }
    })
      .then(response => {
        setDataCity(response.data)
      })
      .catch(error => {
        console.log(error)
      })

    axios({
      method: 'GET',
      url: `https://api.meteo-concept.com/api/forecast/daily`,
      params: {
        token: '48db8a26a68b70c8dce7b7c2bb37f4ae7c96e1345eb86a478f3cdbac67ac34af',
        insee: props.insee
      }
    })
      .then(response => {
        setTmin(response.data.forecast[0].tmin)
        setTmax(response.data.forecast[0].tmax)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  var swipeoutBtns = [
    {
      backgroundColor: 'black',
      component:
        (
          <ButtonDelete onPress={props.deleteCity} />
        )
    }
  ]
  return (
    <Swipeout backgroundColor='transparent' right={swipeoutBtns}>
      <Button
        onPress={() => {
          navigation.navigate('City', {
            insee: props.insee,
          });
        }}>
        <ImageBackground source={{
          uri: dataCity?.forecast && weather[dataCity?.forecast[0].weather][2]
        }}
          resizeMode="cover"
          imageStyle={{ borderRadius: 15 }}
        >
          <ViewOne>
            <City>{dataCity?.city?.name}</City>
            <Hour>{new Date().getHours()}:{new Date().getMinutes()}</Hour>
            <Desc>{dataCity?.forecast && weather[dataCity?.forecast[0].weather][0]}</Desc>
          </ViewOne>
          <ViewTwo>
            <Temp>{dataCity?.forecast && dataCity?.forecast[0]?.temp2m}°</Temp>
            <MaxMinView>
              <MaxMin>Max. {tmax}°</MaxMin>
              <MaxMin>Min. {tmin}°</MaxMin>
            </MaxMinView>
          </ViewTwo>
        </ImageBackground>
      </Button>
    </Swipeout>
  )
}

const ImageBackground = styled.ImageBackground`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`
const Button = styled.TouchableOpacity`
  margin-top: 10px;
  /* border-radius: 20px; */
  padding: 0px 20px;
`
const ViewOne = styled.View`
  flex-direction: column;
  width: 50%;
`
const ViewTwo = styled.View`
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
`
const City = styled.Text`
  font-size: 22px;
  font-weight: 600;
  color: white;
`
const Hour = styled.Text`
  font-size: 15px;
  color: white;
`
const Temp = styled.Text`
  font-size: 43px;
  font-weight: 300;
  color: white;
`
const Desc = styled.Text`
  font-size: 14px;
  margin-top: 20px;
  color: white;
`
const MaxMinView = styled.View`
  flex-direction: row;
`
const MaxMin = styled.Text`
  font-size: 14px;
  color: white;
  padding: 5px 5px;
`

export default WishCities