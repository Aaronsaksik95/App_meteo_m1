import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigation } from '@react-navigation/native'

const ListCity = (props) => {
  const navigation = useNavigation()
  useEffect(() => {

  }, [])

  const renderItem = ({ item }) => (
    <Button
      onPress={() => {
        navigation.navigate('City', {
          insee: item.insee,
        });
      }}
    >
      <TextButton>{item.name}</TextButton>
    </Button>
  );

  return (
    <View>
      <FlatList
        data={props.cities}
        renderItem={renderItem}
        keyExtractor={item => item.insee}
      />

    </View>
  )
}


const FlatList = styled.FlatList`
`
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