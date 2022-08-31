import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Star from 'react-native-vector-icons/FontAwesome'
import HalfStar from 'react-native-vector-icons/FontAwesome'

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
      releaseDate: data.releaseDate,
      cast: data.cast,
      time: data.time,
      description: data.description,
      cover: data.cover
  })}>
      <Image source={{uri: `http://192.168.100.39:3006/uploads/${data.cover}`}} style={styles.imageSize}/>
      <View style={styles.container}>
        <Text style={styles.title}>{data.title}</Text>
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
  container: {
    position: 'absolute', 
    bottom: 20, 
    left: 15
  },
  imageSize: {
    width: 370, 
    height: 230, 
    resizeMode: 'stretch', 
    borderRadius: 10
  },
  title: {
    fontFamily: 'Poppins-Medium', 
    color: '#fff', 
    fontSize: 18
  },
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