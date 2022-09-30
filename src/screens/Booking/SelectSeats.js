import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  Image,
} from 'react-native';
import React, { useEffect } from 'react';
import {useNavigation} from '@react-navigation/native';
import BackIcon from 'react-native-vector-icons/Feather';
import {commonStyle} from '../../utils/commonStyle';
import {useState} from 'react';
import { seatsALeft, seatsARight, seatsBLeft, seatsBRight, seatsCLeft, seatsCRight, seatsDLeft, seatsDRight, seatsELeft, seatsERight, seatsFLeft, seatsFRight, seatsGLeft, seatsGRight, seatsHLeft, seatsHRight } from '../../model/data';
import axios from 'axios'
import { useSelector } from 'react-redux';
import Modal from 'react-native-modal'
import toRupiah from '@develoka/angka-rupiah-js';

const SelectSeats = ({route}) => {
  const API_URL_BOOKING = `https://tickitz-backend-1st.herokuapp.com/api/v1/booking`

  const navigation = useNavigation();

  const {selectTime, cinemaName, price, cover, title, rating, durationHours, durationMinute, genre, releaseDate, cinemaAddress, locationName, firstName, lastName, scheduleID, user_id, cinemaPlace } = route.params;

  const [ modal, setModal ] = useState(false)

  const [ selectSeats, setSelectSeats ] = useState([])

  const onSelectSeats = item => {
    if (selectSeats.includes(item)) {
      const seat = selectSeats.filter(x => {
        return x !== item
      })
      setSelectSeats(seat)
    } else {
      setSelectSeats([...selectSeats, item]);
    }
  }

  const [id, setId] = useState('')

  const handleBooking = () => {
    if(!seatSelected) {
      setModal(true)
    } else {
      axios({
        method: "POST",
        url: `${API_URL_BOOKING}`,
        data: {
          scheduleID: scheduleID,
          user_id: user_id,
          seats: selectSeats,
          selected_time: selectTime
        }
      })
        .then((res) => {
          setModal(true)
          setId(res.data.data.id)
        })
        .catch((err) => {
          ToastAndroid.showWithGravity(err.response.data.message, ToastAndroid.SHORT, ToastAndroid.CENTER)
        });
    }
  };
  
  let seatSelected = selectSeats.length 
  let subTotal = seatSelected * price

  return (
    <ScrollView style={{backgroundColor: commonStyle.bgPrimary}}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{position: 'absolute', left: 20}}
          onPress={() => navigation.goBack()}>
          <BackIcon name="chevron-left" size={30} color={'lightgray'} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Select Seats</Text>
      </View>

      <View style={{marginHorizontal: 30, marginTop: 40}}>
        {/* <View style={{width: '100%', height: 1, backgroundColor: 'rgba(255,255,255,0.3)', marginVertical: 20}}></View> */}
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{width: 17, height: 17, backgroundColor: commonStyle.bgFourth, marginRight: 5, borderRadius: 5}}></View>
                <Text style={{fontFamily: 'Poppins-Regular', color: 'lightgray', fontSize: 12}}>Available</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{width: 17, height: 17, backgroundColor: commonStyle.bgThird, marginRight: 5, borderRadius: 5}}></View>
                <Text style={{fontFamily: 'Poppins-Regular', color: 'lightgray', fontSize: 12}}>Selected</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{width: 17, height: 17, backgroundColor: 'lightgray', marginRight: 5, borderRadius: 5}}></View>
                <Text style={{fontFamily: 'Poppins-Regular', color: 'lightgray', fontSize: 12}}>Reserved</Text>
            </View>
        </View>

        {/* Screen */}
        <View style={{width: '100%', alignItems: 'center', marginTop: 40, marginBottom: 30}}>
            <Text style={{color: 'lightgray', fontFamily: 'Poppins-Regular', fontSize: 12, marginBottom: 10}}>Screen</Text>
            <View style={{width: '80%', height: 8, backgroundColor: commonStyle.bgFourth, borderRadius: 10, marginBottom: 10}}></View>
        </View>
        {/* Seats */}
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            {seatsALeft.map((item, index)=> {
              return (
                  <View key={index}>
                      <Text style={selectSeats.includes(item) ? styles.seatsSelected : styles.seats} onPress={()=> onSelectSeats(item)}>{item.seats}</Text>
                  </View>
              )
            })}
            <View style={{width: '4%', backgroundColor: commonStyle.bgPrimary}}></View>
             {seatsARight.map((item, index)=> {
              return (
                  <View key={index}>
                      <Text style={selectSeats.includes(item) ? styles.seatsSelected : styles.seats} onPress={()=> onSelectSeats(item)}>{item.seats}</Text>
                  </View>
              )
            })}
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 12}}>
            {seatsBLeft.map((item, index)=> {
              return (
                  <View key={index}>
                      <Text style={selectSeats.includes(item) ? styles.seatsSelected : styles.seats} onPress={()=> onSelectSeats(item)}>{item.seats}</Text>
                  </View>
              )
            })}
             <View style={{width: '4%', backgroundColor: commonStyle.bgPrimary}}></View>
             {seatsBRight.map((item, index)=> {
              return (
                  <View key={index}>
                      <Text style={selectSeats.includes(item) ? styles.seatsSelected : styles.seats} onPress={()=> onSelectSeats(item)}>{item.seats}</Text>
                  </View>
              )
            })}
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 12}}>
            {seatsCLeft.map((item, index)=> {
              return (
                  <View key={index}>
                      <Text style={selectSeats.includes(item) ? styles.seatsSelected : styles.seats} onPress={()=> onSelectSeats(item)}>{item.seats}</Text>
                  </View>
              )
            })}
             <View style={{width: '4%', backgroundColor: commonStyle.bgPrimary}}></View>
             {seatsCRight.map((item, index)=> {
              return (
                  <View key={index}>
                      <Text style={selectSeats.includes(item) ? styles.seatsSelected : styles.seats} onPress={()=> onSelectSeats(item)}>{item.seats}</Text>
                  </View>
              )
            })}
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 12}}>
            {seatsDLeft.map((item, index)=> {
              return (
                  <View key={index}>
                      <Text style={selectSeats.includes(item) ? styles.seatsSelected : styles.seats} onPress={()=> onSelectSeats(item)}>{item.seats}</Text>
                  </View>
              )
            })}
             <View style={{width: '4%', backgroundColor: commonStyle.bgPrimary}}></View>
             {seatsDRight.map((item, index)=> {
              return (
                <View key={index}>
                    <Text style={selectSeats.includes(item) ? styles.seatsSelected : styles.seats} onPress={()=> onSelectSeats(item)}>{item.seats}</Text>
                </View>
              )
            })}
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 12}}>
            {seatsELeft.map((item, index)=> {
              return (
                <View key={index}>
                    <Text style={selectSeats.includes(item) ? styles.seatsSelected : styles.seats} onPress={()=> onSelectSeats(item)}>{item.seats}</Text>
                </View>
              )
            })}
             <View style={{width: '4%', backgroundColor: commonStyle.bgPrimary}}></View>
             {seatsERight.map((item, index)=> {
              return (
                <View key={index}>
                    <Text style={selectSeats.includes(item) ? styles.seatsSelected : styles.seats} onPress={()=> onSelectSeats(item)}>{item.seats}</Text>
                </View>
              )
            })}
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 12}}>
            {seatsFLeft.map((item, index)=> {
              return (
                <View key={index}>
                    <Text style={selectSeats.includes(item) ? styles.seatsSelected : styles.seats} onPress={()=> onSelectSeats(item)}>{item.seats}</Text>
                </View>
              )
            })}
             <View style={{width: '4%', backgroundColor: commonStyle.bgPrimary}}></View>
             {seatsFRight.map((item, index)=> {
              return (
                <View key={index}>
                    <Text style={selectSeats.includes(item) ? styles.seatsSelected : styles.seats} onPress={()=> onSelectSeats(item)}>{item.seats}</Text>
                </View>
              )
            })}
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 12}}>
            {seatsGLeft.map((item, index)=> {
              return (
                <View key={index}>
                    <Text style={selectSeats.includes(item) ? styles.seatsSelected : styles.seats} onPress={()=> onSelectSeats(item)}>{item.seats}</Text>
                </View>
              )
            })}
             <View style={{width: '4%', backgroundColor: commonStyle.bgPrimary}}></View>
             {seatsGRight.map((item, index)=> {
              return (
                <View key={index}>
                    <Text style={selectSeats.includes(item) ? styles.seatsSelected : styles.seats} onPress={()=> onSelectSeats(item)}>{item.seats}</Text>
                </View>
              )
            })}
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 12}}>
            {seatsHLeft.map((item, index)=> {
              return (
                <View key={index}>
                    <Text style={selectSeats.includes(item) ? styles.seatsSelected : styles.seats} onPress={()=> onSelectSeats(item)}>{item.seats}</Text>
                </View>
              )
            })}
             <View style={{width: '4%', backgroundColor: commonStyle.bgPrimary}}></View>
             {seatsHRight.map((item, index)=> {
              return (
                <View key={index}>
                    <Text style={selectSeats.includes(item) ? styles.seatsSelected : styles.seats} onPress={()=> onSelectSeats(item)}>{item.seats}</Text>
                </View>
              )
            })}
        </View>

        <View style={{width: '100%', height: 1, backgroundColor: 'rgba(255,255,255,0.2)', marginTop: 50}}></View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 30}}>
            <Text style={{color: 'lightgray', fontFamily: 'Poppins-Medium', fontSize: 14, width: '50%'}}>Selected Seats</Text>
            {!selectSeats.length ? <Text style={{color: '#fff', fontFamily: 'Poppins-Medium', fontSize: 14}}>None</Text> : <Text style={{color:'#fff', fontFamily: 'Poppins-Medium', fontSize: 14, width: '50%', textAlign: 'right'}}>{selectSeats.join(', ')}</Text> }
        </View>
        
        <View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', alignItems: 'center', paddingBottom: 50}}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{color:'lightgray', fontFamily: 'Poppins-Medium', fontSize: 14}}>{toRupiah(price, {symbol: 'IDR', floatingPoint: 0})}</Text>
                <Text style={{color: 'lightgray', fontFamily: 'Poppins-Medium', fontSize: 14, marginHorizontal: 10}}>x</Text>
                <Text style={{color: 'lightgray', fontFamily: 'Poppins-Medium', fontSize: 14}}>{seatSelected}</Text>
            </View>
            <View>
                <Text style={{color: '#fff', fontFamily: 'Poppins-Medium', fontSize: 16}}>{toRupiah(subTotal, {symbol: 'IDR', floatingPoint: 0})}</Text>
            </View>
        </View>
      </View>

      <View style={{marginTop: 80}}>
          <View style={{backgroundColor: commonStyle.bgSecondary, height: 90, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={styles.button} onPress={handleBooking}>
              <Text style={styles.buttonText}>Book Now</Text>
            </TouchableOpacity>
          </View>
          {/* Conditional rendering modal booking */}
          {!seatSelected ? <Modal isVisible={modal} transparent style={{margin: 0, justifyContent: 'flex-end'}} onBackButtonPress={()=> setModal(false)}>
              <View style={{}}>
                <View style={{backgroundColor: commonStyle.bgFourth, paddingHorizontal: 20, paddingVertical: 30}}>
                  <View style={styles.modalBox}>
                    <Image source={require('../../assets/warning.png')} style={styles.modalImage}/>
                  </View>
                  <View style={{marginTop: 65}}>
                    <View style={{alignItems: 'center'}}>
                      <Text style={styles.modalTitle}>Oops Sorry</Text>
                      <Text style={styles.modalSubtitle}>Seats can't be empty</Text>
                      <Text style={styles.modalTxt}>Please select your seats to continue the next step</Text>
                    </View>
                  </View>
                  <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
                    <TouchableOpacity style={styles.modalOKBtn} onPress={()=> setModal(false)}>
                      <Text style={{color: '#fff', fontFamily: 'Poppins-Medium', fontSize: 14}}>OK</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
          </Modal> : <Modal isVisible={modal} transparent style={{margin: 0, justifyContent: 'flex-end'}}>
              <View style={{}}>
                <View style={{backgroundColor: commonStyle.bgFourth, paddingHorizontal: 20, paddingVertical: 30}}>
                  <View style={styles.modalBox}>
                    <Image source={require('../../assets/checked.png')} style={styles.modalImage}/>
                  </View>
                  <View style={{marginTop: 65}}>
                    <View style={{alignItems: 'center'}}>
                      <Text style={styles.modalTitle}>Booking Successfully</Text>
                      <Text style={styles.modalSubtitle}>Your booking at {cinemaName} {locationName} is successful</Text>
                      <Text style={styles.modalTxt}>Click button below for your final step</Text>
                    </View>
                  </View>
                  <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
                    <TouchableOpacity style={styles.modalOKBtn} onPress={()=> navigation.replace('Payment', {
                        selectTime, cinemaName, price, cover, title, rating, durationHours, durationMinute, genre, releaseDate, cinemaAddress, locationName, firstName, lastName, selectSeats, subTotal, user_id, id, cinemaPlace
                      })}>
                      <Text style={{color: '#fff', fontFamily: 'Poppins-Medium', fontSize: 14}}>OK</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
          </Modal> }
          
        </View>
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
    marginTop: 5,
    fontSize: 14,
    color: 'lightgray',
  },
  modalTxt: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#f0f0f0',
    marginTop: 20
  },
  modalOKBtn: {
    backgroundColor: commonStyle.bgThird, 
    borderRadius: 30,
    width: '30%', 
    paddingVertical: 10,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  seats: {
    width: 25, 
    height: 25, 
    backgroundColor: commonStyle.bgFourth,
    borderRadius: 5,
    marginHorizontal: 6,
    color: '#fff'
  },
  seatsSelected: {
    width: 25, 
    height: 25, 
    backgroundColor: commonStyle.bgThird,
    borderRadius: 5,
    marginHorizontal: 6,
    fontSize: 12,
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default SelectSeats;
