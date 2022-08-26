import {View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import Location from 'react-native-vector-icons/Ionicons';
import ChefronDown from 'react-native-vector-icons/Ionicons';
import ChefronRight from 'react-native-vector-icons/Entypo'
import axios from 'axios'
import { commonStyle } from '../../utils/commonStyle';
import BackIcon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';

const TheaterScreen = () => {
  const navigation = useNavigation()
  const [cinema, setCinema] = useState([])

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://192.168.100.39:3006/api/v1/cinema",
    }).then((res) => {
      setCinema(res.data.data);
    }).catch((err)=> {
      console.log(err)
    })
  }, []);

  return (
    <>
      <ScrollView>
        <View style={{backgroundColor: commonStyle.bgPrimary, height: 70, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity style={{position: 'absolute', left: 20}} onPress={()=> navigation.goBack()}>
            <BackIcon name='chevron-left' size={30} color={'lightgray'}/>
          </TouchableOpacity>
          <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 18, color: 'lightgray'}}>Cinema</Text>
        </View>
        <View style={styles.locationBar}>
          <Location name="location-sharp" size={20} color={'#555'} />
          <View style={styles.mainLocationBar}>
            <Text style={styles.mainLocationText}>Bandung</Text>
            <View>
              <ChefronDown name="chevron-down" size={20} color={'#555'} style={{marginRight: 20}}/>
            </View>
          </View>
        </View>
          {cinema.map((item, index)=> {
            return (
              <TouchableOpacity key={index}>
                <View style={styles.cinemaBar}>
                  <Text style={styles.cinemaText}>{item.cinemaName}</Text>
                  <ChefronRight name="chevron-right" size={25} color={'#666'}/>
                </View>
                <View style={styles.line}></View>
               </TouchableOpacity>
            )
          })}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  locationBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    height: 50,
    paddingHorizontal: 10,
  },
  mainLocationBar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10
  },
  mainLocationText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#555',
  },
  line: {
    width: '100%',
    height: 1.5,
    marginVertical: 5,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  cinemaBar: {
    marginTop: 10,
    marginHorizontal: 20,
    height: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  cinemaText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: '#555'
  }
});

export default TheaterScreen;
