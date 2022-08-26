import {Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-native-snap-carousel';
import {windowWidth} from '../../../utils/Dimension'
import BannerSlider from '../../../components/BannerSlider';
import { commonStyle } from '../../../utils/commonStyle';
import axios from 'axios'

const Banner = () => {
  const [movieSchedule, setMovieSchedule] = useState([])

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://192.168.100.39:3006/api/v1/schedule`,
    }).then((res) => {
      setMovieSchedule(res.data);
    }).catch((err)=> {
      console.log(err)
    })
  }, []);
  

  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} key={index}/>;
  };
  return (
    <View style={{backgroundColor: commonStyle.bgPrimary, paddingTop: 30}}>
      <Text style={{fontFamily: 'Poppins-SemiBold', color: 'lightgray', fontSize: 20, marginHorizontal: 20, marginBottom: 30}}>Now Showing</Text>
      <Carousel
        data={movieSchedule.data}
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
