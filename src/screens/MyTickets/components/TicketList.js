import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ToastAndroid,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import axios from 'axios';
  import {commonStyle} from '../../../utils/commonStyle';
  import Star from 'react-native-vector-icons/FontAwesome';
  import HalfStar from 'react-native-vector-icons/FontAwesome';
  import Empty from '../../../assets/sad.svg';
  import moment from 'moment';

const TicketList = () => {
  const API_URL_BOOKING = `https://tickitz-backend-1st.herokuapp.com/api/v1/booking`;
  const API_URL = `https://tickitz-backend-1st.herokuapp.com`;

  const [showTicket, setShowTicket] = useState([]);
  const [ refetch, setRefetch ] = useState(false)

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${API_URL_BOOKING}`,
    })
      .then(res => {
        setShowTicket(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [refetch]);

  const handleDelete = (bookingID) => {
      axios({
        method: 'DELETE',
        url: `${API_URL_BOOKING}/${bookingID}`
      })
      .then(res => {
        ToastAndroid.showWithGravity('Delete Successfully', ToastAndroid.SHORT, ToastAndroid.CENTER)
        setRefetch(!refetch)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <View style={{paddingBottom: 20}}>
      {!showTicket.length ? 
        <View style={styles.noDataContainer}>
          <Empty width={200} height={200} />
          <Text style={styles.noDataTxt}>You don't have any tickets</Text>
        </View> : showTicket.map((item, index)=> {
          return (
            <View key={index} style={{paddingHorizontal: 20}}>
              <TouchableOpacity style={styles.ticketCard} onLongPress={()=> handleDelete(item.bookingID)}>
                  <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 10}}>
                      <Image source={{uri: `${API_URL}/uploads/${item.cover}`}} style={styles.imageSize}/>
                        <View style={{marginLeft: 10}}>
                            <Text style={styles.title}>{item.title}</Text>
                            <View style={{flexDirection: 'row', marginVertical: 7}}>
                                <Star name="star" size={12} color={'darkorange'} style={{marginRight: 5}}/>
                                <Star name="star" size={12} color={'darkorange'} style={{marginRight: 5}}/>
                                <Star name="star" size={12} color={'darkorange'} style={{marginRight: 5}}/>
                                <Star name="star" size={12} color={'darkorange'} style={{marginRight: 5}}/>
                                <HalfStar name="star-half-empty" size={12}  color={'darkorange'}/>
                                <Text style={styles.ratingText}>{`( ${item.rating} )`}</Text>
                            </View>
                            <Text style={styles.duration}>{item.durationHours} hour {item.durationMinute} minute</Text>
                            <Text style={styles.cinemaName}>{item.cinemaName} {item.locationName}</Text>
                            <Text style={styles.releaseDate}>{moment(item.created_at).format('DD/MM/YYYY • LT')}</Text>
                        </View>
                  </View>
                  <View style={styles.ticketContainer}>
                    <Image source={require('../../../assets/ticket.png')} style={styles.imageTicket}/>
                  </View>
              </TouchableOpacity>
            </View>
          )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
    ticketContainer: {
      borderLeftWidth: 2, 
      borderStyle: 'dashed',
      borderColor: 'gray', 
      height: '100%', 
      width: '20%',
      justifyContent: 'center', 
      alignItems: 'center', 
      flexDirection: 'row', 
    },
    ticketCard: {
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      backgroundColor: commonStyle.bgFourth,
      borderRadius: 10,
      paddingLeft: 10,
      marginTop: 20
    },
    imageTicket: {
      width: 35,
      height: 35
    },
    releaseDate: {
      fontFamily: 'Poppins-Regular',
      color: 'gray',
      letterSpacing: 1,
      fontSize: 10,
      marginVertical: 2,
    },
    cinemaName: {
      fontFamily: 'Nunito-Regular',
      color: 'gray',
      letterSpacing: 1,
      fontSize: 10,
      marginVertical: 2,
    },
    duration: {
      fontFamily: 'Poppins-Regular',
      color: 'gray',
      fontSize: 10,
      marginVertical: 2,
    },
    ratingText: {
      fontFamily: 'Nunito-Medium',
      color: 'darkorange',
      fontSize: 9,
      marginLeft: 10,
    },
    title: {
      fontFamily: 'Poppins-Medium',
      color: '#fff',
      fontSize: 14
    },
    imageSize: {
      width: 120,
      height: 120,
      borderRadius: 10
    },
    noDataTxt: {
      fontFamily: 'Poppins-Medium',
      color: '#fff',
      fontSize: 16,
      marginTop: 20,
      textAlign: 'center',
    },
    noDataContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 120
    },
    headerContainer: {
      height: 70,
      backgroundColor: commonStyle.bgPrimary,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    headerText: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 18,
      color: 'lightgray',
    },
  });

export default TicketList