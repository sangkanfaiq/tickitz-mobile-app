import { View, Image } from 'react-native'
import React from 'react'

const Advertise = ({data}) => {
  return (
    <View style={{backgroundColor: 'lightgray'}}>
      <Image source={data.image} style={{width: 470, height: 250, resizeMode: 'stretch', borderRadius: 10}}/>
    </View>
  )
}

export default Advertise