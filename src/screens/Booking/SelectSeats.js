import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import BackIcon from 'react-native-vector-icons/Feather';
import {commonStyle} from '../../utils/commonStyle';
import {useState} from 'react';
import { seatsA, seatsB, seatsC, seatsD, seatsE, seatsF } from '../../model/data';

const SelectSeats = ({route}) => {
  const navigation = useNavigation();
  const {selectTime, time, cinemaName, price, cover, title, rating, durationHours, durationMinute, genre, releaseDate, cinemaAddress, locationName, firstName, lastName} = route.params;

  console.log(selectTime, '<- dari select seats')

  const [ selectSeats, setSelectSeats ] = useState([])
  console.log(selectSeats, '<- select seats')

  const onSelectSeats = item => {
    if (selectSeats === item) {
      if(selectSeats){
        seatSelected+=1
      }
      setSelectSeats('')
    } else {
      setSelectSeats(item);
    }
   
  }
  
  let seatSelected = 0
  seatSelected = selectSeats.length ? 1 : 0

  let subTotal = seatSelected * price
  console.log(seatSelected, '<- banyaknya seats')

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

      <ScrollView
        style={{flexDirection: 'row', marginLeft: 30, marginTop: 30}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        >
        {time.split(',').map((item, index) => {
          return (
            <View style={selectTime ?  styles.timeCardSelected : styles.timeCardDefault} key={index}>
              <Text style={selectTime ? styles.timeCardtextSelected : styles.timeCardtextDefault}>
                {item}
              </Text>
            </View>
          );
        })}
      </ScrollView>
      <View style={{marginHorizontal: 30}}>
        <View style={{width: '100%', height: 1, backgroundColor: 'rgba(255,255,255,0.3)', marginVertical: 20}}></View>
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

        {/* Seats */}

        <View style={{width: '100%', alignItems: 'center', marginTop: 50, marginBottom: 30}}>
            <View style={{width: '80%', height: 8, backgroundColor: commonStyle.bgFourth, borderRadius: 10, marginBottom: 10}}></View>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            {seatsA.map((item, index)=> {
              return (
                  <View key={index}>
                      <Text style={selectSeats === item ? styles.seatsSelected : styles.seats} onPress={()=> onSelectSeats(item)}>{item.seats}</Text>
                  </View>
              )
            })}
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
            {seatsB.map((item, index)=> {
              return (
                  <View key={index}>
                      <Text style={selectSeats === item ? styles.seatsSelected : styles.seats} onPress={()=> onSelectSeats(item)}>{item.seats}</Text>
                  </View>
              )
            })}
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
            {seatsC.map((item, index)=> {
              return (
                  <View key={index}>
                      <Text style={selectSeats === item ? styles.seatsSelected : styles.seats} onPress={()=> onSelectSeats(item)}>{item.seats}</Text>
                  </View>
              )
            })}
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
            {seatsD.map((item, index)=> {
              return (
                  <View key={index}>
                      <Text style={selectSeats === item ? styles.seatsSelected : styles.seats} onPress={()=> onSelectSeats(item)}>{item.seats}</Text>
                  </View>
              )
            })}
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
            {seatsE.map((item, index)=> {
              return (
                  <View key={index}>
                      <Text style={selectSeats === item ? styles.seatsSelected : styles.seats} onPress={()=> onSelectSeats(item)}>{item.seats}</Text>
                  </View>
              )
            })}
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
            {seatsF.map((item, index)=> {
              return (
                  <View key={index}>
                      <Text style={selectSeats === item ? styles.seatsSelected : styles.seats} onPress={()=> onSelectSeats(item)}>{item.seats}</Text>
                  </View>
              )
            })}
        </View>
        <View style={{width: '100%', height: 1, backgroundColor: 'rgba(255,255,255,0.3)', marginTop: 50}}></View>
        <View style={{flexDirection: 'row', marginTop: 30, justifyContent: 'space-between', alignItems: 'center', paddingBottom: 50}}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{color:'#fff', fontFamily: 'Poppins-Medium', fontSize: 16}}>Rp {price}</Text>
                <Text style={{color: '#fff', fontFamily: 'Poppins-Medium', fontSize: 16, marginHorizontal: 10}}>x</Text>
                <Text style={{color: '#fff', fontFamily: 'Poppins-Medium', fontSize: 16}}>{seatSelected}</Text>
            </View>
            <View>
                <Text style={{color: '#fff', fontFamily: 'Poppins-Medium', fontSize: 18}}>Rp {subTotal}</Text>
            </View>
        </View>
      </View>

      <View style={{marginTop: 80}}>
          <View style={{backgroundColor: commonStyle.bgSecondary, height: 90, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Payment', {
              selectTime, cinemaName, price, cover, title, rating, durationHours, durationMinute, genre, releaseDate, cinemaAddress, locationName, firstName, lastName, selectSeats, subTotal
            })}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  seats: {
    width: 35, 
    height: 35, 
    backgroundColor: commonStyle.bgFourth,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  seatsSelected: {
    width: 35, 
    height: 35, 
    backgroundColor: commonStyle.bgThird,
    borderRadius: 8,
    marginHorizontal: 8,
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
  timeCardtextDefault: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#fff',
    letterSpacing: 1,
  },
  timeCardtextSelected: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: commonStyle.bgThird,
    letterSpacing: 1,
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
    borderColor: commonStyle.bgThird,
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
