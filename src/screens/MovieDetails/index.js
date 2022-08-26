import { View, Text, Image, StyleSheet, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import Star from 'react-native-vector-icons/FontAwesome'
import HalfStar from 'react-native-vector-icons/FontAwesome'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Heart from 'react-native-vector-icons/Ionicons'
import { commonStyle } from '../../utils/commonStyle'
import BackIcon from 'react-native-vector-icons/Feather'


const MovieDetails = ({route}) => {
  const {
    title, 
    cover, 
    genre, 
    releaseDate, 
    durationHours, 
    durationMinute,
    cast, 
    rating, 
    description, 
    writer,
    director
  } = route.params
  const [ wishlist, setWishlist ] = useState(false)
  const navigation = useNavigation();

  return (
    <ScrollView style={{backgroundColor: commonStyle.bgPrimary}}>
        <View style={styles.imageSize}>
          <TouchableOpacity style={styles.backIconBox} onPress={() => navigation.goBack()}>
            <BackIcon name='chevron-left' size={25} color={'#fff'} style={{marginLeft: -2}}/>
          </TouchableOpacity>
          <Image source={{uri: `http://192.168.100.39:3006/uploads/${cover}`}} style={styles.image}/>
        </View>

      {/* Details */}
      <View style={{backgroundColor: commonStyle.bgPrimary, marginTop: -40, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
        <View style={{width: '100%'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, marginTop: 30}}>
            <Text style={styles.title}>{title} {`( ${releaseDate} )`}</Text>
            <TouchableOpacity onPress={()=> setWishlist(!wishlist)}>
              {wishlist ? <Heart name='ios-heart-sharp' size={30} color={'#20c781'}/> : <Heart name='ios-heart-outline' size={30} color={'#fff'}/> }
            </TouchableOpacity>
          </View>
          <View style={{marginLeft: 30, marginBottom: 5,flexDirection: 'row'}}>
            <Star name='star' size={20} color={'darkorange'} style={{marginRight: 5}}/>
            <Star name='star' size={20} color={'darkorange'} style={{marginRight: 5}}/>
            <Star name='star' size={20} color={'darkorange'} style={{marginRight: 5}}/>
            <Star name='star' size={20} color={'darkorange'} style={{marginRight: 5}}/>
            <HalfStar name='star-half-empty' size={20} color={'darkorange'} style={{marginRight: 5}}/>
            <Text style={{color: '#000', fontSize: 14, fontWeight: 'bold', fontFamily: 'Nunito-Regular',marginLeft: 10, backgroundColor: 'darkorange', paddingHorizontal: 10, borderRadius: 30}}>{rating}</Text>
          </View>
          <View style={styles.details}>
              <Text style={styles.text}>{durationHours} hours {durationMinute} minute</Text>
          </View>
          <View style={{flexDirection: 'row', marginHorizontal: 30}}>
            {genre.split(',').map((item, index)=> {
              return (
                <View style={{marginRight: 7}} key={index}>
                    <Text style={styles.genre}>{item}</Text>
                </View>
              )
            })}
          </View>
        </View>
      </View>

      {/* Information */}
      <View style={{marginHorizontal: 30, marginTop: 30}}>
        <View style={styles.informationBox}>
          <Text style={styles.informationText}>Information</Text>
        </View>
        <View style={{marginVertical: 20}}>
          <View style={{flexDirection: 'row', paddingVertical: 2}}>
            <Text style={styles.detailsText}>Director : </Text>
            <Text style={styles.detailsTextLight}>{director}</Text>
          </View>
          <View style={{flexDirection: 'row', paddingVertical: 2}}>
            <Text style={styles.detailsText}>Writer : </Text>
            <Text style={styles.detailsTextLight}>{writer}</Text>
          </View>
          <View style={{flexDirection: 'row', paddingVertical: 2}}>
            <Text style={styles.detailsText}>Cast : </Text>
            <Text style={styles.detailsTextLight}>{cast}</Text>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{color: '#f0f0f0', fontFamily: 'Poppins-Regular', lineHeight: 25, fontSize: 14}}>{description}</Text>
        </View>
      </View>

      {/* Jadwal Tayang */}
      <View style={{marginTop: 40}}>
        <View style={{backgroundColor: commonStyle.bgSecondary, height: 100, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity style={styles.buyTicketSquare} onPress={()=> navigation.navigate('Booking')}>
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
    marginLeft: 10
  },
  detailsText: {
    fontFamily: 'Poppins-Medium',
    color: 'gray',
    fontSize: 14,
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
    marginVertical: 8,
    marginHorizontal: 30,
  },
  title: {
    fontFamily: 'Poppins-Medium', 
    color: '#fff', 
    fontSize: 22, 
    marginBottom: 10
  },
  text: {
    fontFamily: 'Poppins-Regular',
    color: 'gray',
    fontSize: 14,
  },
  genre: {
    fontFamily: 'Nunito-Medium',
    color: 'gray',
    fontSize: 14,
    backgroundColor: commonStyle.bgSecondary,
    paddingVertical: 5,
    paddingHorizontal: 15,
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