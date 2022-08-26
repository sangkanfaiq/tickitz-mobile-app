import { View} from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel';
import {windowWidth} from '../../../utils/Dimension'
import Advertise from '../../../components/Advertise'
import { advertise } from '../../../model/data'

const Advertisement = () => {
    const renderAdvertise = ({item, index}) => {
        return (
            <Advertise data={item} key={index}/>
        )
    }
  return (
    <View style={{backgroundColor: '#fff', paddingVertical: 8}}>
      <Carousel
        data={advertise}
        renderItem={renderAdvertise}
        sliderWidth={windowWidth}
        itemWidth={470}
        enableSnap={true}
        loop={true}
        autoplay={true}
      />
    </View>
  )
}

export default Advertisement