import { View, Text, Image, StyleSheet, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import Star from 'react-native-vector-icons/FontAwesome'
import HalfStar from 'react-native-vector-icons/FontAwesome'
import { time } from '../../model/data'
import Location from 'react-native-vector-icons/Ionicons';
import { useState } from 'react'
import Ticket from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native';
import Heart from 'react-native-vector-icons/Ionicons'
import { commonStyle } from '../../utils/commonStyle'
import BackIcon from 'react-native-vector-icons/Feather'


const MovieDetails = ({route}) => {
  const {title, cover, genre, releaseDate,releaseYear, director, rating, description, duration} = route.params
  const [ selectTime, setSelectTime ] = useState('')
  const navigation = useNavigation();

  // const onSelect = (item) => {
  //   if(selectTime === item) {
  //     setSelectTime('')
  //   } else {
  //     setSelectTime(item)
  //   }
    
  // }

  return (
    <ScrollView style={{backgroundColor: commonStyle.bgPrimary}}>
        <View style={styles.imageSize}>
          <TouchableOpacity style={styles.backIconBox} onPress={() => navigation.goBack()}>
            <BackIcon name='chevron-left' size={25} color={'#fff'} style={{marginLeft: -2}}/>
          </TouchableOpacity>
          <Image source={cover} style={styles.image}/>
        </View>

      {/* Details */}
      <View style={{backgroundColor: commonStyle.bgPrimary, marginTop: -40, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
        <View style={{width: '100%'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, marginTop: 30}}>
            <Text style={styles.title}>{title}</Text>
            <Heart name='ios-heart-outline' size={30} color={'#fff'}/>
          </View>
          <View style={{marginLeft: 30, marginBottom: 5,flexDirection: 'row'}}>
            <Star name='star' size={20} color={'darkorange'} style={{marginRight: 5}}/>
            <Star name='star' size={20} color={'darkorange'} style={{marginRight: 5}}/>
            <Star name='star' size={20} color={'darkorange'} style={{marginRight: 5}}/>
            <Star name='star' size={20} color={'darkorange'} style={{marginRight: 5}}/>
            <HalfStar name='star-half-empty' size={20} color={'darkorange'} style={{marginRight: 5}}/>
            <Text style={{color: '#000', fontSize: 16, fontWeight: 'bold',marginLeft: 10, backgroundColor: 'darkorange', paddingHorizontal: 10, borderRadius: 30}}>{rating}</Text>
          </View>
          <View style={styles.details}>
              <Text style={styles.text}>{duration}</Text>
          </View>
          <View style={styles.details}>
              <Text style={styles.genre}>{genre}</Text>
          </View>
        </View>
      </View>

      {/* Information */}
      <View style={{marginHorizontal: 30, marginTop: 30}}>
        <View style={styles.informationBox}>
          <Text style={styles.informationText}>Information</Text>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 40}}>
          <Text style={styles.detailsText}>Director : </Text>
          <Text style={styles.detailsTextLight}>{director}</Text>
        </View>
        <Text style={{color: '#f0f0f0', fontFamily: 'Poppins-Regular', lineHeight: 25, fontSize: 16}}>{description}</Text>
      </View>

      {/* Jadwal Tayang */}
      <View style={{marginTop: 40}}>
        {/* <Text style={{fontFamily: 'Poppins-Medium', color: '#fff', fontSize: 23}}>Jadwal Tayang</Text>
        <View style={{width: '100%', height: 1, backgroundColor: 'gray', marginVertical: 20}}></View>
        <View style={{marginVertical: 10, marginHorizontal: 10, justifyContent: 'space-between', flexDirection: 'row'}}>
          <View>
            <Text style={styles.cinemaName}>CGV Blitz Braga</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Location name='location-sharp' color={'gray'} size={14}/>
              <Text style={styles.locationInfo}>Braga Mall (Bandung)</Text>
            </View>
          </View>
          <Text style={styles.cgv}>CGV</Text>
        </View>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
          {time.map((item2, index)=> {
            return (
                <Pressable style={selectTime2 === item2 ? styles.bg1 : styles.bg2} key={index} onPress={()=> onSelect2(item2)}>
                  <Text style={styles.time}>{item2.time}</Text>
                </Pressable>
            )
          })}
        </View>
        <View style={{width: '100%', height: 1, backgroundColor: 'gray', marginVertical:20}}></View>
        <View style={{marginVertical: 10, marginHorizontal: 10, justifyContent: 'space-between', flexDirection: 'row'}}>
          <View>
            <Text style={styles.cinemaName}>XXI Premiere</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Location name='location-sharp' color={'gray'} size={14}/>
              <Text style={styles.locationInfo}>Bandung Indah Plaza (Bandung)</Text>
            </View>
          </View>
          <Text style={styles.xxi}>XXI</Text>
        </View>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
          {time.map((item, index)=> {
            return (
                <Pressable style={selectTime === item ? styles.bg1 : styles.bg2} key={index} onPress={()=> onSelect(item)}>
                  <Text style={styles.time}>{item.time}</Text>
                </Pressable>
            )
          })}
        </View> */}
        {/* <View style={{width: '100%', height: 1, backgroundColor: 'gray', marginVertical: 20}}></View> */}
        <View style={{backgroundColor: commonStyle.bgSecondary, height: 100, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity style={styles.buyTicketSquare} onPress={()=> navigation.navigate('Booking')}>
            {/* <Ticket name='ticket-alt' color={'lightgray'} size={20}/> */}
            <Text style={styles.buyTicketText}>Book Seat</Text>
          </TouchableOpacity>
        </View>        
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  backIconBox: {
    position: 'absolute', 
    zIndex: 1, 
    top: 20, 
    left: 10,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  detailsTextLight: {
    fontFamily: 'Poppins-Medium',
    color: 'lightgray',
    fontSize: 14,
    marginTop: 20,
    marginLeft: 10
  },
  detailsText: {
    fontFamily: 'Poppins-Medium',
    color: 'gray',
    fontSize: 14,
    marginTop: 20
  },
  informationBox: {
    borderBottomWidth: 2, 
    borderColor: 'darkorange',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: commonStyle.bgSecondary,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  informationText: {
    fontFamily: 'Poppins-Medium',
    color: 'lightgray',
    fontSize: 14,
  },
  bg1: {
    width: 90,
    height: 45,
    marginHorizontal: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 10,
    backgroundColor: commonStyle.bgThird
  },
  bg2: {
    width: 90,
    height: 45,
    marginHorizontal: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 10
  },
  imageSize: {
    width: '100%',
    height: 400,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    width: '100%',
    marginVertical: 8,
    marginHorizontal: 30
  },
  title: {
    fontFamily: 'Poppins-Medium', 
    color: '#fff', 
    fontSize: 22, 
    marginBottom: 10
  },
  text: {
    fontFamily: 'Poppins-Medium',
    color: 'gray',
    fontSize: 14,
  },
  genre: {
    fontFamily: 'Nunito-SemiBold',
    color: 'gray',
    fontSize: 16,
    backgroundColor: commonStyle.bgSecondary,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  line: {
    width: '95%', 
    height:1, 
    backgroundColor:'rgba(255,255,255,0.2)',
  },
  ratingCard: {
    paddingTop: 5,
    paddingHorizontal: 20,
    width: '50%'
  },
  wishlistCard: {
    paddingTop: 5,
    paddingHorizontal: 20,
    width: '50%'
  },
  wishlistText: {
    fontFamily: 'Poppins-Medium',
    color: '#f0f0f0',
    fontSize: 14,
  },
  ratingText: {
    fontFamily: 'Poppins-Medium',
    color: '#f0f0f0',
    fontSize: 14,
  },
  cinemaName: {
    fontFamily: 'Poppins-Medium', 
    color: '#fff', 
    textTransform: 'uppercase',
    fontSize: 16
  },
  cgv: {
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
    backgroundColor: 'red',
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderRadius: 20,
    alignSelf: 'center'
  },
  xxi: {
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
    backgroundColor: 'darkorange',
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderRadius: 20,
    alignSelf: 'center'
  },
  locationInfo: {
    fontFamily: 'Nunito-Medium', 
    color: 'gray', 
    textTransform: 'uppercase',
    marginLeft: 5,
    marginVertical: 5
  },
  timeCard: {
    width: 90,
    height: 45,
    marginHorizontal: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 10
  },
  time: {
    fontFamily: 'Poppins-Medium',
    color: '#fff',
    fontSize: 14,
    letterSpacing: 1
  },
  buyTicketSquare: {
    backgroundColor: commonStyle.bgThird,
    width: '90%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10
  },
  buyTicketText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: 'lightgray',
    marginLeft: 10,
  }
})

export default MovieDetails