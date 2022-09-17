import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Notif from 'react-native-vector-icons/MaterialCommunityIcons';
import Tickets from 'react-native-vector-icons/Fontisto';
import { commonStyle } from '../utils/commonStyle';
import { useNavigation } from '@react-navigation/native';

const HeaderLogin = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.titleHeader]}>
      <TouchableOpacity onPress={()=> navigation.navigate('Settings')}>
        <Image source={require('../assets/images/dp.jpg')} style={styles.profileSize}/>
      </TouchableOpacity>
      <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
       <Text style={{color: 'lightgray', fontFamily: 'Poppins-SemiBold',fontSize: 20, textAlign: 'center'}}>Tickitz</Text>
       <Tickets name='ticket' size={16} style={{color: 'lightgray', marginLeft: 5}}/>
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('Notification')}>
        <Notif name='bell-outline' size={25} color={'lightgray'}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  titleHeader: {
    flexDirection: 'row',
    backgroundColor: commonStyle.bgPrimary,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 70,
    elevation: 5,
    shadowColor: '#777'
  },
  profileSize: {
    width: 30,
    height: 30,
    borderRadius: 30,
    resizeMode: 'contain',
  }
})

export default HeaderLogin