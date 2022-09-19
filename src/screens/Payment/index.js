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

const PaymentScreen = ({route}) => {
  const [selectPayment, setSelectPayment] = useState('');
  const navigation = useNavigation()
  const { time, cinemaName, price, cover, title, rating, durationHours, durationMinute, genre, releaseDate, cinemaAddress, locationName, firstName, lastName } = route.params
  // const onSelect = item => {
  //   if (selectPayment === item) {
  //     setSelectPayment('');
  //   } else {
  //     setSelectPayment(item);
  //   }
  // };
  const [ modal, setModal ] = useState(false)

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

      <View style={{backgroundColor: commonStyle.bgFourth, padding: 20, marginHorizontal: 30, marginTop: 30, borderRadius: 20}}>
        <View style={{flexDirection: 'row' }}>
            <View style={styles.imageCard}>
              <Image source={{uri: `https://tickitz-backend-1st.herokuapp.com/uploads/${cover}`}} style={styles.pictureSize}/>
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
        {/* Booking Info */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, paddingHorizontal: 5}}>
          <Text style={{fontFamily: 'Poppins-Medium', color: 'gray', fontSize: 12}}>Name</Text>
          <Text style={{fontFamily: 'Poppins-Medium', color: '#fff', fontSize: 12, textTransform: 'capitalize'}}>{firstName} {lastName}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, paddingHorizontal: 5}}>
          <Text style={styles.bookingInfoTextLeft}>Date</Text>
          <Text style={styles.bookingInfoTextRight}>Sat, Sept 12, 2022</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, paddingHorizontal: 5}}>
          <Text style={styles.bookingInfoTextLeft}>Time</Text>
          <Text style={styles.bookingInfoTextRight}>16:00</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, paddingHorizontal: 5}}>
          <Text style={styles.bookingInfoTextLeft}>Selected Seats</Text>
          <Text style={styles.bookingInfoTextRight}>D6, D7</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, paddingHorizontal: 5}}>
          <Text style={styles.bookingInfoTextLeft}>Ticket Fee</Text>
          <Text style={styles.bookingInfoTextRight}>{price}</Text>
        </View>

        <View style={{width: '100%', height: 1, backgroundColor: 'rgba(255,255,255,0.3)', marginVertical: 30}}></View>

        {/* Cinema Info */}
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5}}>
            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12, color: 'gray'}}>Cinema</Text>
            <Text style={styles.cinemaName}>{cinemaName}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5}}>
            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12, color: 'gray', marginTop: 15}}>Address</Text>
            <Text style={styles.cinemaAddress}>{cinemaAddress}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5}}>
            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12, color: 'gray', marginTop: 15}}>Location</Text>
            <Text style={styles.locationName}>{locationName}</Text>
          </View>
        </View>

        {/* Total */}
        <View style={styles.totalCost}>
          <Text style={{fontFamily: 'Poppins-Medium', color: '#fff', fontSize: 16}}>Total Cost</Text>
          <Text style={{fontFamily: 'Poppins-Medium', color: '#fff', fontSize: 16}}>90000</Text>
        </View>
      </View>

      {/* Button payment */}
      <View style={{marginTop: 100}}>
          <View style={{backgroundColor: commonStyle.bgSecondary, height: 90, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={styles.button} onPress={()=> setModal(true)}>
              <Text style={styles.buttonText}>Pay - 90000</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Modal */}
        <Modal 
              isVisible={modal}
              transparent 
              onBackButtonPress={()=> setModal(false)} 
              // animationInTiming={1000}
              // animationOutTiming={1000}
            >
              <View style={{}}>
                <View style={{backgroundColor: commonStyle.bgFourth, paddingHorizontal: 20, paddingVertical: 30, borderRadius: 20}}>
                  <View style={styles.modalBox}>
                    <Image source={require('../../assets/check.png')} style={styles.modalImage}/>
                  </View>
                  <View style={{marginTop: 70}}>
                    <View style={{alignItems: 'center'}}>
                      <Text style={styles.modalTitle}>Payment Successfully</Text>
                      {/* <Text style={styles.modalSubtitle}>Looks like you haven't login yet</Text> */}
                      {/* <Text style={styles.modalTxt}>thank you for your payment</Text> */}
                      {/* <Text style={styles.modalTxt}>Click button below</Text> */}
                    </View>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 70}}>
                    <TouchableOpacity style={styles.modalLoginBtn} onPress={()=> navigation.navigate('Home')}>
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
    top: -70, 
    borderWidth: 6, 
    borderColor: commonStyle.bgFourth, 
    alignSelf: 'center'
  },
  modalImage: {
    width: '100%',
    height: '100%',
    borderRadius: 75,
  },
  modalTitle: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#fff',
  },
  modalSubtitle: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#fff',
    marginBottom: 30
  },
  modalTxt: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#f0f0f0',
  },
  modalLoginBtn: {
    backgroundColor: commonStyle.bgThird, 
    borderRadius: 30,
    width: '20%', 
    paddingVertical: 10,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  totalCost: {
    flexDirection: 'row', 
    marginTop: 50, justifyContent: 'space-between', 
    backgroundColor: commonStyle.bgPrimary,
    padding: 15,
    borderRadius: 10
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
