import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Location from 'react-native-vector-icons/Ionicons';
import ChefronDown from 'react-native-vector-icons/Feather';
import ChefronRight from 'react-native-vector-icons/Feather';
import axios from 'axios';
import {commonStyle} from '../../utils/commonStyle';
import BackIcon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import { useSelector } from 'react-redux';
import NoData from '../../assets/nodata.svg'

const TheaterScreen = () => {
  const navigation = useNavigation();
  const [cinema, setCinema] = useState([]);
  
  const { error } = useSelector((state) => state.cinema);

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://tickitz-backend-1st.herokuapp.com/api/v1/cinema',
    })
      .then(res => {
        setCinema(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  
  if(error) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: commonStyle.bgPrimary}}>
        <NoData width={150} height={150}/>
        <Text style={{fontFamily: 'Poppins-Medium', color: '#fff', fontSize: 20, marginTop: 20}}>Oops sorry</Text>
        <Text style={{fontFamily: 'Poppins-Medium', color: '#fff', fontSize: 14, marginTop: 10}}>Can't connect to server</Text>
      </View>
    )
  }

  return (
      <ScrollView style={{backgroundColor: commonStyle.bgPrimary}}>
        <View
          style={{
            backgroundColor: commonStyle.bgPrimary,
            height: 70,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{position: 'absolute', left: 20}}
            onPress={() => navigation.goBack()}>
            <BackIcon name="chevron-left" size={30} color={'lightgray'} />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: 18,
              color: 'lightgray',
            }}>
            Cinema
          </Text>
        </View>
        <View style={styles.locationBar}>
          <Location name="location-sharp" size={20} color={'lightgray'} />
          <View style={styles.mainLocationBar}>
            <Text style={styles.mainLocationText}>Bandung</Text>
            <View>
              <ChefronDown
                name="chevron-down"
                size={25}
                color={'lightgray'}
                style={{marginRight: 20}}
              />
            </View>
          </View>
        </View>
        {cinema.map((item, index) => {
            return (
              <TouchableOpacity key={index}>
                <View style={styles.cinemaBar}>
                  <Text style={styles.cinemaText}>{item.cinemaName}</Text>
                  <ChefronRight
                    name="chevron-right"
                    size={25}
                    color={'lightgray'}
                  />
                </View>
                <View style={styles.line}></View>
              </TouchableOpacity>
            );
          })
        }
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  locationBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: commonStyle.bgFourth,
    height: 50,
    paddingHorizontal: 10,
  },
  mainLocationBar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
  mainLocationText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: 'lightgray',
  },
  line: {
    width: '100%',
    height: 1,
    marginVertical: 5,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  cinemaBar: {
    marginTop: 10,
    marginHorizontal: 20,
    height: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cinemaText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: 'lightgray',
  },
});

export default TheaterScreen;
