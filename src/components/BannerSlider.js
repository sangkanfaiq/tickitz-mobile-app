import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Star from 'react-native-vector-icons/FontAwesome'
import HalfStar from 'react-native-vector-icons/FontAwesome'
import { useSelector } from 'react-redux';

const BannerSlider = ({item}) => {
  const navigation = useNavigation();
  const {data} = useSelector((state)=> state.auth)

  const API_URL = `https://tickitz-backend-1st.herokuapp.com`
  
  return (
    <TouchableOpacity onPress={()=> navigation.navigate('MovieDetails', {
      scheduleID: item.scheduleID,
      title: item.title,
      genre: item.genre,
      durationHours: item.durationHours,
      durationMinute: item.durationMinute,
      rating: item.rating,
      director: item.director,
      writer: item.writer,
      releaseDate: item.releaseDate,
      cast: item.cast,
      time: item.time,
      locationName: item.locationName,
      cinemaID: item.cinemaID,
      cinemaName: item.cinemaName,
      cinemaShortname: item.cinemaShortname,
      description: item.description,
      cover: item.cover,
      cinemaCover: item.cinemaCover,
      cinemaPlace: item.cinemaPlace,
      cinemaAddress: item.cinemaAddress,
      price: item.price,
      firstName: data.firstName,
      lastName: data.lastName,
      user_id: data.user_id,
  })}>
      <Image source={{uri: `${API_URL}/uploads/${item.cover}`}} style={styles.imageSize}/>
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Star name='star' size={16} color={'darkorange'} style={{marginRight: 10}}/>
          <Star name='star' size={16} color={'darkorange'} style={{marginRight: 10}}/>
          <Star name='star' size={16} color={'darkorange'} style={{marginRight: 10}}/>
          <Star name='star' size={16} color={'darkorange'} style={{marginRight: 10}}/>
          <HalfStar name='star-half-empty' size={16} style={{marginRight: 10}} color={'darkorange'}/>
          <Text style={styles.rating}>{item.rating}</Text>
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
    resizeMode: 'cover', 
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