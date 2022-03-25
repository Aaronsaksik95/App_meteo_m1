import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import weather from '../weather/index'
import loupe from '../../../assets/loupe.png'

const Search = (props) => {
    return (
            <Button
                onPress={props.onPress}
            >
                <Image
                    source={loupe}
                />
            </Button>

    )
}
const Button = styled.TouchableOpacity`
    top: 80px;
    left: 90%;
    /* background-color: white; */
`
const Image = styled.Image`
    width: 25px;
    height: 25px;
`
export default Search