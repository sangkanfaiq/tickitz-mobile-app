import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Location from 'react-native-vector-icons/Ionicons';
import { commonStyle } from '../../../utils/commonStyle';
import { balance, social } from '../../../model/data';
import TopupIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector } from 'react-redux';
import toRupiah from '@develoka/angka-rupiah-js';
import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';
import moment from 'moment'
import Empty from '../../../assets/sad.svg'

const ProfilePage = () => {
  const {data} = useSelector((state)=>state.auth)

  const API_URL_BOOKING = `https://tickitz-backend-1st.herokuapp.com/api/v1/booking`;

  const [orderHistory, setOrderHistory] = useState([]);

  const [ refetch, setRefetch ] = useState(false)

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${API_URL_BOOKING}`,
    })
      .then(res => {
        setOrderHistory(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleDelete = (bookingID) => {
    axios({
      method: 'DELETE',
      url: `${API_URL_BOOKING}/${bookingID}`
    })
    .then(res => {
      alert('delete success')
      setRefetch(!refetch)
    })
    .catch(err => {
      console.log(err)
    })
}

  return (
    <ScrollView style={{paddingHorizontal: 30}} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <View style={styles.backgroundProfile}>
        <Image source={require('../../../assets/images/photo.jpg')} style={styles.backgroundSize}/>
      </View>
      <View style={{marginTop: -60, paddingBottom: 30}}>
        <View style={styles.profileBox}>
          <Image source={require('../../../assets/images/dp.jpg')} style={styles.profileSize}/>
        </View>
        <View style={{marginTop: 10, alignItems: 'center'}}>
          {data.email === 'admin' ? <Text style={{fontFamily: 'Poppins-Medium', fontSize: 20, color: '#fff', textTransform: 'capitalize'}}>{data.email}</Text> : <Text style={{fontFamily: 'Poppins-Medium', fontSize: 20, color: '#fff', textTransform: 'capitalize'}}>{data.firstName} {data.lastName}</Text> }
          <Text style={{fontFamily: 'Poppins-Medium', fontSize: 10, color: 'gray', marginVertical: 5}}>{data.email}</Text>
          <View style={{flexDirection: 'row', marginTop: 5, alignItems: 'center'}}>
            {data.city && data.country ?
            <>
              <Location name='location-outline' size={10} color={'lightgray'}/> 
              <Text style={{fontFamily: 'Nunito-Medium', textTransform: 'capitalize',fontSize: 12, marginLeft: 3, color: 'lightgray'}}>{data.city}, {data.country}</Text>
            </> : "" }
          </View>
          <View style={{flexDirection: 'row', marginTop: 30, justifyContent: 'space-between', width: '35%'}}>
            {social.map((item, index)=> {
              return (
                <TouchableOpacity key={index} style={{width: 20, height: 20}}>
                  <Image source={item.image} style={{width: '100%', height: '100%', resizeMode: 'contain'}}/>
                </TouchableOpacity>
              )
            })}
          </View>
        </View>

        <View style={styles.balanceContainer}>
          <View style={{justifyContent: 'space-between', height: '70%'}}>
            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12, color: 'lightgray'}}>Balance</Text>
            <Text style={{fontFamily: 'Poppins-Medium', color: '#fff', fontSize: 18}}>{toRupiah(balance, {symbol: 'IDR', formal: false, floatingPoint: 0})}</Text>
          </View>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <TopupIcon name='credit-card-plus-outline' size={25} color={'#fff'}/>
            <Text style={{fontFamily: 'Poppins-Medium', color: 'lightgray', fontSize: 12, marginTop: 5}}>Top up</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 50}}>
          <Text style={{fontFamily: 'Poppins-Medium', fontSize: 16, color: 'lightgray'}}>Order History</Text>
          
          {/* Ticket history active */}
          {!orderHistory.length ?
            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 30, paddingBottom: 20}}>
              <Empty width={200} height={200}/>
              <Text style={{fontFamily: 'Poppins-Regular', color: '#fff', fontSize: 16, marginTop: 10}}>No order history</Text>
            </View> : orderHistory.map((item, index)=> {
              return (
                <TouchableOpacity style={styles.cinemaBox} key={index} onLongPress={handleDelete}>
                  <View style={styles.cinemaCard}>
                    <View>
                      <Text style={styles.cinemaInfoTextActive}>{item.cinemaName}</Text>
                      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                        <Location name='location-outline' size={10} color={'#fff'} style={{marginRight: 5}}/>
                        <Text style={styles.cinemaInfoTextActive}>{item.cinemaPlace} {`( ${item.locationName} )`}</Text>
                      </View>
                    </View>
                    <View>
                      <Text style={item.cinemaShortname === 'XXI' ? styles.cinemaTextActiveXXI : styles.cinemaTextActive}>{item.cinemaShortname}</Text>
                    </View>
                  </View>
                  <View style={{height: 1, width: '100%', backgroundColor: 'rgba(255,255,255,0.3)', marginVertical: 20}}></View>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <View>
                      <Text style={{fontFamily: 'Poppins-Regular', color: '#fff'}}>{item.title} {` (${moment(item.releaseDate).format('YYYY')})`}</Text>
                      <Text style={{fontFamily: 'Poppins-Regular', color: '#fff', fontSize: 14}}>{item.selected_time}</Text>
                      <Text style={{fontFamily: 'Poppins-Regular', color: '#fff', fontSize: 14}}>Monday, 16 2022</Text>
                    </View>
                    <View style={{paddingRight: 15}}>
                      <View style={{height: 15, width: 15, borderRadius: 30, backgroundColor: '#20c781'}}></View>
                    </View>
                  </View>
                </TouchableOpacity>
              )
          })}
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  cinemaBox: {
    backgroundColor: commonStyle.bgSecondary,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 20,
  },
  cinemaCard: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cinemaInfoTextActive: {
    fontFamily: 'Roboto-Regular', 
    color: '#fff', 
    fontSize: 12,
    letterSpacing: 0.5
  },
  cinemaInfoTextInactive: {
    fontFamily: 'Roboto-Regular', 
    color: 'gray', 
    fontSize: 12,
    letterSpacing: 0.5
  },
  cinemaTextActive: {
    fontFamily: 'Poppins-Medium', 
    color: '#fff', 
    backgroundColor: 'red', 
    fontSize: 12, 
    paddingHorizontal: 10,
    borderRadius: 20
  },
  cinemaTextInactiveCGV: {
    fontFamily: 'Poppins-Medium', 
    color: 'lightgray', 
    backgroundColor: 'darkred', 
    fontSize: 12, 
    paddingHorizontal: 10,
    borderRadius: 20
  },
  cinemaTextInactiveXXI: {
    fontFamily: 'Poppins-Medium', 
    color: 'lightgray', 
    backgroundColor: '#755808', 
    fontSize: 12, 
    paddingHorizontal: 10,
    borderRadius: 20
  },
  cinemaTextActiveXXI: {
    backgroundColor: '#e3a507',
    fontFamily: 'Poppins-Medium', 
    color: '#fff',
    fontSize: 12, 
    paddingHorizontal: 10,
    borderRadius: 20
  },
  balanceContainer: {
    marginTop: 50, 
    height: 100, 
    backgroundColor: commonStyle.bgSecondary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderRadius: 20
  },
  historyText: {
    fontFamily: 'Poppins-Medium', 
    color: 'lightgray', 
    fontSize: 16
  },
  profileBox: {
    width: 120, 
    height: 120,
    padding: 5,
    backgroundColor: commonStyle.bgPrimary,
    borderRadius: 100,
    alignSelf: 'center'
  },
  profileSize: {
    width: '100%',
    height: '100%',
    borderRadius: 100, 
    resizeMode: 'contain',
  },
  backgroundProfile: {
    height: 200,
    marginTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  headerText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: 'lightgray',
  },
  header: {
    height: 70,
    backgroundColor: commonStyle.bgPrimary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundSize: {
    width: '100%', 
    height: '100%', 
    resizeMode: 'stretch',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  }
})

export default ProfilePage