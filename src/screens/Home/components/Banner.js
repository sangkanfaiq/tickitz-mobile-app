import {Text, View} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {windowWidth} from '../../../utils/Dimension'
import { sliderData } from '../../../model/data';
import BannerSlider from '../../../components/BannerSlider';
import { commonStyle } from '../../../utils/commonStyle';

const Banner = () => {
  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} key={index}/>;
  };
  return (
    <View style={{backgroundColor: commonStyle.bgPrimary, paddingTop: 30}}>
      <Text style={{fontFamily: 'Poppins-SemiBold', color: 'lightgray', fontSize: 20, marginHorizontal: 20, marginBottom: 30}}>Now Showing</Text>
      <Carousel
        data={sliderData}
        renderItem={renderBanner}
        sliderWidth={windowWidth}
        itemWidth={370}
        enableSnap={true}
        loop={true}
        autoplay={true}
      />
    </View>
  );
};

export default Banner;
