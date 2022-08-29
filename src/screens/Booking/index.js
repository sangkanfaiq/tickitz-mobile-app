import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import BackIcon from 'react-native-vector-icons/Feather'
import { commonStyle } from '../../utils/commonStyle'
import { useNavigation } from '@react-navigation/native';
import Star from 'react-native-vector-icons/FontAwesome';
import HalfStar from 'react-native-vector-icons/FontAwesome';
import { dateShow, timeShow } from '../../model/data';

const BookingScreen = ({route}) => {
  const navigation = useNavigation();
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
    director,
    time
  } = route.params
  
  const [ selectDate, setSelectDate ] = useState('')
  const [ selectTime, setSelectTime ] = useState('')

  const onSelectDate = item => {
    if (selectDate === item) {
      setSelectDate('');
    } else {
      setSelectDate(item);
    }
  };
  const onSelectTime = item => {
    if (selectTime === item) {
      setSelectTime('');
    } else {
      setSelectTime(item);
    }
  };


  return (
    <SafeAreaView style={{backgroundColor: commonStyle.bgPrimary, height: '100%'}}>
      <View style={styles.header}>
        <TouchableOpacity style={{position: 'absolute', left: 20}} onPress={()=> navigation.goBack()}>
          <BackIcon name='chevron-left' size={30} color={'lightgray'}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>Date & Time</Text>
      </View>

      <View style={{flexDirection: 'row', marginHorizontal: 30, marginTop: 30}}>
        <View style={styles.imageCard}>
          <Image source={{uri: `http://192.168.100.39:3006/uploads/${cover}`}} style={styles.imageSize}/>
        </View>
        <View style={styles.details}>
          <Text style={{fontFamily: 'Poppins-Medium', color: '#fff', fontSize: 16}}>{title}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
            <Star name='star' size={12} color={'darkorange'} style={{marginRight: 5}}/>
            <Star name='star' size={12} color={'darkorange'} style={{marginRight: 5}}/>
            <Star name='star' size={12} color={'darkorange'} style={{marginRight: 5}}/>
            <Star name='star' size={12} color={'darkorange'} style={{marginRight: 5}}/>
            <HalfStar name='star-half-empty' size={12} color={'darkorange'} style={{marginRight: 5}}/>
            <Text style={{color: 'darkorange', fontSize: 12}}>{`( ${rating} )`}</Text>
          </View>
          <Text style={styles.textDetails}>{durationHours} hour {durationMinute} minute</Text>
          <Text style={styles.textDetails}>{releaseDate}</Text>
          <View style={{flexDirection: 'row'}}>
            {genre.split(',').map((item, index)=> {
              return (
                <View key={index} style={{marginRight: 5}}>
                  <Text style={styles.genre}>{item}</Text>
                </View>
              )
            })}
          </View>
        </View>
      </View>

      <View style={{marginTop: 30, marginLeft: 30}}>
        <Text style={styles.headingText}>Select Date</Text>
        <ScrollView style={{flexDirection: 'row', marginTop: 20}} horizontal={true} showsHorizontalScrollIndicator={false}>
          {dateShow.map((item, index)=> {
            return (
              <Pressable style={selectDate === item ? styles.dateSelect : styles.dateDefault} key={index} onPress={()=> onSelectDate(item)}>
                <Text style={styles.dateText}>{item.date}</Text>
                <Text style={styles.dateText}>{item.day}</Text>
              </Pressable>
            )
          })}
        </ScrollView>
      </View>

      <View style={{marginLeft: 30, marginTop: 30}}>
        <Text style={styles.headingText}>Time</Text>
        <ScrollView style={{flexDirection: 'row', marginTop: 10}} horizontal={true} showsHorizontalScrollIndicator={false}>
          {timeShow.map((item, index)=> {
            return (
              <Pressable key={index} style={selectTime === item ? styles.timeCardSelected : styles.timeCardDefault} onPress={()=> onSelectTime(item)}>
                <Text style={selectTime === item ? styles.timeCardtextSelected : styles.timeCardtextDefault}>{item.time}</Text>
              </Pressable>
            )
          })}
        </ScrollView>
      </View>
      <View style={{marginTop: 195}}>
        <View style={{backgroundColor: commonStyle.bgSecondary, height: 90, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Payment')}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  timeCardtextDefault: {
    fontFamily: 'Poppins-Regular', 
    fontSize: 12, 
    color: '#fff', 
    letterSpacing: 1
  },
  timeCardtextSelected: {
    fontFamily: 'Poppins-Regular', 
    fontSize: 12, 
    color: commonStyle.bgThird, 
    letterSpacing: 1
  },
  timeCardDefault: {
    width: 80, 
    height: 45,
    backgroundColor: commonStyle.bgFourth,
    marginRight: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  timeCardSelected: {
    width: 80, 
    height: 45,
    backgroundColor: commonStyle.bgFourth,
    marginRight: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: commonStyle.bgThird
  },
  dateDefault: {
    backgroundColor: commonStyle.bgFourth,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 20,
    marginRight: 15,
  },
  dateSelect: {
    backgroundColor: commonStyle.bgThird,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 20,
    marginRight: 15,
  },
  button: {
    backgroundColor: commonStyle.bgThird,
    width: '85%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10
  },
  buttonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#fff',
  },
  headingText: {
    fontFamily: 'Poppins-Medium', 
    color: 'grey', 
    fontSize: 18
  },
  dateText: {
    fontFamily: 'Poppins-Regular',
    color: '#FFF',
    fontSize: 12
  },
  dateTextSelected: {
    fontFamily: 'Poppins-Regular',
    color: commonStyle.bgThird,
    fontSize: 12
  },
  textDetails: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: 'grey',
    marginVertical: 3,
  },
  genre: {
    fontFamily: 'Nunito-Medium',
    color: 'gray',
    fontSize: 12,
    backgroundColor: commonStyle.bgSecondary,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 30,
  },
  details: {
    justifyContent: 'center',
    marginLeft: 15
  },
  imageCard: {
    width: 130, 
    height: 150, 
    borderRadius: 10,
  },
  imageSize: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    borderRadius: 10
  },
  header: {
    height: 70,
    backgroundColor: commonStyle.bgPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: 'lightgray',
  },
})

export default BookingScreen