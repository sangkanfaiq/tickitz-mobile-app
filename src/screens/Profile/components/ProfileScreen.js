import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import Location from 'react-native-vector-icons/Ionicons';
import CustomInput from './CustomInput';

const ProfilePage = () => {
  return (
    <ScrollView>
      <View style={{height: 200, marginHorizontal: 2, marginTop: 2}}>
        <Image source={require('../../../assets/images/bg.jpg')} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}/>
      </View>
      <View style={{marginHorizontal: 10, marginTop: -60}}>
        <Image source={require('../../../assets/images/profile.jpg')} style={{width: 120, height: 120, borderRadius: 100, resizeMode: 'contain'}}/>
        <View style={{marginTop: 10}}>
          <Text style={{fontFamily: 'Poppins-Medium', fontSize: 24, color: '#111'}}>Masha Raymer</Text>
          <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14, color: 'gray'}}>@masha69@gmail.com</Text>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Location name='location-sharp' size={20}/>
            <Text style={{fontFamily: 'Nunito-Medium', fontSize: 16, marginLeft: 5, color: '#222'}}>Bandung, Indonesia</Text>
          </View>
        </View>
        <View style={{marginTop: 50}}>
          <Text style={{fontFamily: 'Poppins-Medium', color: '#222', fontSize: 18}}>Account Details Information</Text>
        </View>
        <View>
          <CustomInput />
        </View>
      </View>
    </ScrollView>
  )
}

export default ProfilePage