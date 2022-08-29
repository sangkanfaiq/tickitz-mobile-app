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

const TheaterScreen = () => {
  const navigation = useNavigation();
  const [cinema, setCinema] = useState([]);
  
  const { loading } = useSelector((state) => state.cinema);

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://192.168.100.39:3006/api/v1/cinema',
    })
      .then(res => {
        setCinema(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
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
        {loading ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}>
            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14, color: '#fff'}}>Please wait...</Text>
          </View>
        ) : (
          cinema.map((item, index) => {
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
        )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  locationBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: commonStyle.bgSecondary,
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
