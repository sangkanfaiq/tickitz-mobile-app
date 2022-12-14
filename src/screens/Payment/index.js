import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import { commonStyle } from '../../utils/commonStyle';
import BackIcon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import Star from 'react-native-vector-icons/FontAwesome';
import HalfStar from 'react-native-vector-icons/FontAwesome';
import moment from 'moment'
import Modal from 'react-native-modal'
import toRupiah from '@develoka/angka-rupiah-js';
import axios from 'axios'

const PaymentScreen = ({route}) => {

  const API_URL = `https://tickitz-backend-1st.herokuapp.com`
  const API_URL_PAYMENT = `https://tickitz-backend-1st.herokuapp.com/api/v1/payment`

  const navigation = useNavigation()
  const { selectTime, cinemaName, price, cover, title, rating, durationHours, durationMinute, genre, releaseDate, cinemaAddress, locationName, firstName, lastName, selectSeats, subTotal, cinemaPlace, user_id, id } = route.params

  const [ modal, setModal ] = useState(false)

  const handlePayment = () => {
      axios({
        method: "POST",
        url: `${API_URL_PAYMENT}`,
        data: {
          id: id
        }
      })
        .then((res) => {
          setModal(true)
          navigation.replace('Home', {screen: 'MyTickets'})
        })
        .catch((err) => {
          ToastAndroid.showWithGravity(err.response.data.message, ToastAndroid.SHORT, ToastAndroid.CENTER)
        });
    
  };

  return (
    <ScrollView style={{backgroundColor: commonStyle.bgPrimary}}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{position: 'absolute', left: 20}}
          onPress={() => navigation.goBack()}>
          <BackIcon name="chevron-left" size={30} color={'lightgray'} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Payment</Text>
      </View>

      <View style={{backgroundColor: commonStyle.bgFourth, padding: 20, marginHorizontal: 30, marginTop: 30, borderRadius: 15}}>
        <View style={{flexDirection: 'row' }}>
            <View style={styles.imageCard}>
              <Image source={{uri: `${API_URL}/uploads/${cover}`}} style={styles.pictureSize}/>
            </View>
            <View style={styles.details}>
              <Text style={{fontFamily: 'Poppins-Medium', color: '#fff', fontSize: 16}}>{title}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
                <Star name='star' size={12} color={'darkorange'} style={{marginRight: 5}}/>
                <Star name='star' size={12} color={'darkorange'} style={{marginRight: 5}}/>
                <Star name='star' size={12} color={'darkorange'} style={{marginRight: 5}}/>
                <Star name='star' size={12} color={'darkorange'} style={{marginRight: 5}}/>
                <HalfStar name='star-half-empty' size={12} color={'darkorange'} style={{marginRight: 5}}/>
                <Text style={{color: 'darkorange', fontSize: 12}}>{`( ${rating} )`}</Text>
              </View>
              <Text style={styles.textDetails}>{durationHours} hour {durationMinute} minute</Text>
              <Text style={styles.textDetails}>{moment(releaseDate).format('YYYY')}</Text>
              <Text style={styles.textDetails}>{genre}</Text>
            </View>
        </View>
      </View>
      {/* Summary */}
      <View style={{marginTop: 30, marginHorizontal: 30}}>
        <Text style={{fontFamily: 'Poppins-Medium', color: 'lightgray', fontSize: 16}}>Summary</Text>
      </View>

      {/* Booking details info */}
      <View style={{backgroundColor: commonStyle.bgFourth, paddingVertical: 20, paddingHorizontal: 10,marginHorizontal: 30, marginTop: 10,borderRadius: 15}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5}}>
          <Text style={{fontFamily: 'Poppins-Medium', color: 'gray', fontSize: 12}}>Name</Text>
          <Text style={{fontFamily: 'Poppins-Medium', color: '#fff', fontSize: 12, textTransform: 'capitalize'}}>{firstName} {lastName}</Text>
        </View>
        {/* <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, paddingHorizontal: 5}}>
          <Text style={styles.bookingInfoTextLeft}>Date</Text>
          <Text style={styles.bookingInfoTextRight}>Sat, Sept 12, 2022</Text>
        </View> */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, paddingHorizontal: 5}}>
          <Text style={styles.bookingInfoTextLeft}>Time</Text>
          <Text style={styles.bookingInfoTextRight}>{selectTime}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, paddingHorizontal: 5}}>
          <Text style={styles.bookingInfoTextLeft}>Selected seats</Text>
          <Text style={styles.bookingInfoTextRightSeats}>{selectSeats.join(', ')}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, paddingHorizontal: 5}}>
          <Text style={styles.bookingInfoTextLeft}>Ticket fee</Text>
          <Text style={styles.bookingInfoTextRight}>{toRupiah(price, {floatingPoint: 0, formal: false, symbol: ''})}</Text>
        </View>
      </View>

      {/* Cinema info */}
      <View style={{backgroundColor: commonStyle.bgFourth, paddingVertical: 20, paddingHorizontal: 10,marginHorizontal: 30, marginTop: 20,borderRadius: 15}}>
        <View style={{paddingHorizontal: 5}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12, color: 'gray'}}>Cinema</Text>
            <Text style={styles.cinemaName}>{cinemaName}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12, color: 'gray', marginTop: 15}}>Cinema place</Text>
            <Text style={styles.cinemaAddress}>{cinemaPlace}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12, color: 'gray', marginTop: 15}}>Address</Text>
            <Text style={styles.cinemaAddress}>{cinemaAddress}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12, color: 'gray', marginTop: 15}}>Location</Text>
            <Text style={styles.locationName}>{locationName}</Text>
          </View>
        </View>
      </View>

        <View style={styles.totalCost}>
          <Text style={{fontFamily: 'Poppins-Medium', color: commonStyle.bgFifth, fontSize: 16}}>Total cost</Text>
          <Text style={{fontFamily: 'Poppins-Medium', color: commonStyle.bgFifth, fontSize: 20}}>{toRupiah(subTotal, {symbol: 'IDR', floatingPoint: 0})}</Text>
        </View>

      {/* Button payment */}
      <View style={{marginTop: 100}}>
          <View style={{backgroundColor: commonStyle.bgSecondary, height: 90, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={styles.button} onPress={()=> setModal(true)}>
              <Text style={styles.buttonText}>Pay {toRupiah(subTotal, {symbol: 'IDR', floatingPoint: 0})}</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Modal */}
        <Modal 
              isVisible={modal}
              transparent 
              onBackButtonPress={()=> setModal(false)}
              style={{margin: 0, justifyContent: 'flex-end'}}
            >
              <View style={{}}>
                <View style={{backgroundColor: commonStyle.bgFourth, paddingHorizontal: 20, paddingVertical: 30}}>
                  <View style={styles.modalBox}>
                    <Image source={require('../../assets/checked.png')} style={styles.modalImage}/>
                  </View>
                  <View style={{marginTop: 70}}>
                    <View style={{alignItems: 'center'}}>
                      <Text style={styles.modalTitle}>Congratulations</Text>
                      <Text style={styles.modalSubtitle}>Your payment was successfully</Text>
                      <Text style={styles.modalTxt}>Take a break, grab some foods, enjoy the movie</Text>
                    </View>
                  </View>
                  <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity style={styles.modalOKBtn} onPress={handlePayment}>
                      <Text style={{color: '#fff', fontFamily: 'Poppins-Medium', fontSize: 14}}>OK</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
        </Modal>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  modalBox: {
    justifyContent: 'center', 
    alignItems: 'center', 
    width: 140, 
    height: 140, 
    borderRadius: 75, 
    position: 'absolute', 
    top: -60, 
    alignSelf: 'center',
    backgroundColor: commonStyle.bgFourth
  },
  modalImage: {
    width: '100%',
    height: '100%',
  },
  modalTitle: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    color: '#fff',
  },
  modalSubtitle: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: '#fff',
    marginTop: 3
  },
  modalTxt: {
    textAlign: 'center',
    fontFamily: 'Poppins-Italic',
    fontSize: 14,
    color: '#fff',
    marginVertical: 30,
  },
  modalOKBtn: {
    backgroundColor: commonStyle.bgThird, 
    borderRadius: 30,
    width: '30%', 
    paddingVertical: 10,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  totalCost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    backgroundColor: commonStyle.bgFourth,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginHorizontal: 30,
    marginTop: 20

  },
  locationName: {
    fontFamily: 'Poppins-Medium', 
    color: '#fff', 
    fontSize: 12,
    marginTop: 15
  },
  cinemaAddress: {
    fontFamily: 'Poppins-Medium', 
    color: '#fff', 
    fontSize: 12,
    textAlign: 'right',
    width: '60%', 
    marginTop: 15
  },
  cinemaName: {
    fontFamily: 'Poppins-Medium',
    color:'#fff',
    fontSize: 12
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
    fontSize: 14,
    color: '#fff',
  },
  bookingInfoTextLeft: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: "gray"
  },
  bookingInfoTextRight: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: "#fff"
  },
  bookingInfoTextRightSeats: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: "#fff",
    textTransform: 'uppercase'
  },
  genre: {
    fontFamily: 'Nunito-Medium',
    color: 'gray',
    fontSize: 12,
  },
  textDetails: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    color: 'grey',
    marginVertical: 5,
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
  pictureSize: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10
  },
  header: {
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
  borderDefault: {
    width: 120,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 20,
    padding: 15,
    borderColor: 'gray',
  },
  borderSelect: {
    width: 120,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 20,
    padding: 15,
    borderColor: 'darkorange',
    backgroundColor: 'darkorange'
  },
  totalPaymentCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 50,
    height: 70,
    backgroundColor: 'gray',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  paymentText: {
    fontFamily: 'Poppins-Medium',
    color: '#222',
    fontSize: 16,
  },
  paymentMethodBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    paddingVertical: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  imageSize: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default PaymentScreen;
