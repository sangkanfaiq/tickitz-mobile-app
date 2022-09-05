import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import BackIcon from 'react-native-vector-icons/Feather';
import {commonStyle} from '../../utils/commonStyle';
import {useState} from 'react';

const BookingSeatsScreen = ({route}) => {
  const navigation = useNavigation();
  const {time, cinemaName, price} = route.params;
  const [selectTime, setSelectTime] = useState('');

  const onSelectTime = item => {
    if (selectTime === item) {
      setSelectTime('');
    } else {
      setSelectTime(item);
    }
  };

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
            <Pressable
              style={
                selectTime === item
                  ? styles.timeCardSelected
                  : styles.timeCardDefault
              }
              key={index}
              onPress={() => onSelectTime(item)}>
              <Text
                style={
                  selectTime === item
                    ? styles.timeCardtextSelected
                    : styles.timeCardtextDefault
                }>
                {item}
              </Text>
            </Pressable>
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


        <View style={{width: '100%', alignItems: 'center', marginTop: 50, marginBottom: 30}}>
            <View style={{width: '80%', height: 8, backgroundColor: commonStyle.bgFourth, borderRadius: 10}}></View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={{flexDirection: 'row', marginRight: 30}}>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgFourth, borderRadius: 8, marginRight: 10}}></View>
                <View style={{width: 30, height: 30, backgroundColor: 'lightgray', borderRadius: 8, marginRight: 10}}></View>
                <View style={{width: 30, height: 30, backgroundColor: 'lightgray', borderRadius: 8, marginRight: 10}}></View>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgFourth, borderRadius: 8, marginRight: 10}}></View>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgFourth, borderRadius: 8, marginRight: 10}}></View>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgFourth, borderRadius: 8, marginRight: 10}}></View>
            </View>
        </View>
        <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'center'}}>
            <View style={{flexDirection: 'row', marginRight: 30}}>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgFourth, borderRadius: 8, marginRight: 10}}></View>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgFourth, borderRadius: 8, marginRight: 10}}></View>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgFourth, borderRadius: 8, marginRight: 10}}></View>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgFourth, borderRadius: 8, marginRight: 10}}></View>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={{width: 30, height: 30, backgroundColor: 'lightgray', borderRadius: 8, marginRight: 10}}></View>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgThird, borderRadius: 8, marginRight: 10}}></View>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgThird, borderRadius: 8, marginRight: 10}}></View>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgFourth, borderRadius: 8, marginRight: 10}}></View>
            </View>
        </View>
        <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'center'}}>
            <View style={{flexDirection: 'row', marginRight: 30}}>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgFourth, borderRadius: 8, marginRight: 10}}></View>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgFourth, borderRadius: 8, marginRight: 10}}></View>
                <View style={{width: 30, height: 30, backgroundColor: 'lightgray', borderRadius: 8, marginRight: 10}}></View>
                <View style={{width: 30, height: 30, backgroundColor: 'lightgray', borderRadius: 8, marginRight: 10}}></View>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgFourth, borderRadius: 8, marginRight: 10}}></View>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgFourth, borderRadius: 8, marginRight: 10}}></View>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgFourth, borderRadius: 8, marginRight: 10}}></View>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgFourth, borderRadius: 8, marginRight: 10}}></View>
            </View>
        </View>
        <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'center'}}>
            <View style={{flexDirection: 'row', marginRight: 30}}>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgFourth, borderRadius: 8, marginRight: 10}}></View>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgFourth, borderRadius: 8, marginRight: 10}}></View>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgFourth, borderRadius: 8, marginRight: 10}}></View>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgFourth, borderRadius: 8, marginRight: 10}}></View>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgFourth, borderRadius: 8, marginRight: 10}}></View>
                <View style={{width: 30, height: 30, backgroundColor: 'lightgray', borderRadius: 8, marginRight: 10}}></View>
                <View style={{width: 30, height: 30, backgroundColor: 'lightgray', borderRadius: 8, marginRight: 10}}></View>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgFourth, borderRadius: 8, marginRight: 10}}></View>
            </View>
        </View>
        <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'center'}}>
            <View style={{flexDirection: 'row', marginRight: 30}}>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgFourth, borderRadius: 8, marginRight: 10}}></View>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgFourth, borderRadius: 8, marginRight: 10}}></View>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgFourth, borderRadius: 8, marginRight: 10}}></View>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgFourth, borderRadius: 8, marginRight: 10}}></View>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgFourth, borderRadius: 8, marginRight: 10}}></View>
                <View style={{width: 30, height: 30, backgroundColor: 'lightgray', borderRadius: 8, marginRight: 10}}></View>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgFourth, borderRadius: 8, marginRight: 10}}></View>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgFourth, borderRadius: 8, marginRight: 10}}></View>
            </View>
        </View>
        <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'center'}}>
            <View style={{flexDirection: 'row', marginRight: 30}}>
                <View style={{width: 30, height: 30, backgroundColor: 'lightgray', borderRadius: 8, marginRight: 10}}></View>
                <View style={{width: 30, height: 30, backgroundColor: 'lightgray', borderRadius: 8, marginRight: 10}}></View>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgFourth, borderRadius: 8, marginRight: 10}}></View>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgFourth, borderRadius: 8, marginRight: 10}}></View>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgFourth, borderRadius: 8, marginRight: 10}}></View>
                <View style={{width: 30, height: 30, backgroundColor: commonStyle.bgFourth, borderRadius: 8, marginRight: 10}}></View>
            </View>
        </View>
        <View style={{width: '100%', height: 1, backgroundColor: 'rgba(255,255,255,0.3)', marginTop: 50}}></View>
        <View style={{flexDirection: 'row', marginTop: 30, justifyContent: 'space-between', alignItems: 'center', paddingBottom: 50}}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{color:'#fff', fontFamily: 'Poppins-Medium', fontSize: 16}}>Rp {price}</Text>
                <Text style={{color: '#fff', fontFamily: 'Poppins-Medium', fontSize: 16, marginHorizontal: 10}}>x</Text>
                <Text style={{color: '#fff', fontFamily: 'Poppins-Medium', fontSize: 16}}>2</Text>
            </View>
            <View>
                <Text style={{color: '#fff', fontFamily: 'Poppins-Medium', fontSize: 18}}>Rp 90.000</Text>
            </View>
        </View>
      </View>

      <View style={{marginTop: 80}}>
          <View style={{backgroundColor: commonStyle.bgSecondary, height: 90, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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

export default BookingSeatsScreen;
