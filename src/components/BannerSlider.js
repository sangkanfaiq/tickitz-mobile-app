import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Star from 'react-native-vector-icons/FontAwesome'
import HalfStar from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'

const BannerSlider = ({data}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={()=> navigation.navigate('MovieDetails', {
      title: data.title,
      genre: data.genre,
      durationHours: data.durationHours,
      durationMinute: data.durationMinute,
      rating: data.rating,
      director: data.director,
      writer: data.writer,
      releaseDate: moment(data.releaseDate).format('YYYY'),
      cast: data.cast,
      time: data.time,
      description: data.description,
      cover: data.cover
  })}>
      <Image source={{uri: `http://192.168.100.39:3006/uploads/${data.cover}`}} style={{width: 370, height: 230, resizeMode: 'stretch', borderRadius: 5}}/>
      <View style={{position: 'absolute', bottom: 20, left: 15}}>
        <Text style={{fontFamily: 'Poppins-Medium', color: '#fff', fontSize: 18}}>{data.title}</Text>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Star name='star' size={16} color={'darkorange'} style={{marginRight: 10}}/>
          <Star name='star' size={16} color={'darkorange'} style={{marginRight: 10}}/>
          <Star name='star' size={16} color={'darkorange'} style={{marginRight: 10}}/>
          <Star name='star' size={16} color={'darkorange'} style={{marginRight: 10}}/>
          <HalfStar name='star-half-empty' size={16} style={{marginRight: 10}} color={'darkorange'}/>
          <Text style={styles.rating}>{data.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  rating: {
    fontFamily: 'Roboto-Medium', 
    color: '#111', 
    backgroundColor: 'darkorange',
    paddingHorizontal: 10, 
    paddingVertical: 1,
    borderRadius: 10,
    fontSize: 12
  }
})

export default BannerSlider