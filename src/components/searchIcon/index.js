import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import weather from '../weather/index'
import liste from '../../../assets/liste.png'

const SearchIcon = (props) => {
    return (
            <Button
                onPress={props.onPress}
            >
                <Image
                    source={liste}
                />
            </Button>

    )
}
const Button = styled.TouchableOpacity`
    top: 80px;
    left: 90%;
`
const Image = styled.Image`
    width: 25px;
    height: 25px;
`
export default SearchIcon