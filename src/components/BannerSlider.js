import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Star from 'react-native-vector-icons/FontAwesome'
import HalfStar from 'react-native-vector-icons/FontAwesome'

const BannerSlider = ({data}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={()=> navigation.navigate('MovieDetails', data)}>
      <Image source={data.cover} style={{width: 370, height: 230, resizeMode: 'contain', borderRadius: 5}}/>
      <View style={{position: 'absolute', bottom: 20, left: 15}}>
        <Text style={{fontFamily: 'Poppins-Medium', color: '#fff', fontSize: 20}}>{data.title}</Text>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Star name='star' size={18} color={'darkorange'} style={{marginRight: 10}}/>
          <Star name='star' size={18} color={'darkorange'} style={{marginRight: 10}}/>
          <Star name='star' size={18} color={'darkorange'} style={{marginRight: 10}}/>
          <Star name='star' size={18} color={'darkorange'} style={{marginRight: 10}}/>
          <HalfStar name='star-half-empty' size={18} style={{marginRight: 10}} color={'darkorange'}/>
          <Text style={{fontFamily: 'Roboto-Medium', color: '#111', backgroundColor: 'darkorange', paddingHorizontal: 10, paddingVertical: 1,borderRadius: 10}}>{data.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default BannerSlider