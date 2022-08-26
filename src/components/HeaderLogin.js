import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import Logout from 'react-native-vector-icons/MaterialIcons';
import Tickets from 'react-native-vector-icons/Fontisto';
import { useDispatch, useSelector } from "react-redux";
import { AuthLogout } from "../redux/actions/Auth";
import { useNavigation } from '@react-navigation/native';
import { commonStyle } from '../utils/commonStyle';

const HeaderLogin = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
  
    const {isLogin} = useSelector((state) => state.auth);
    useEffect(()=> {
      if(isLogin == false) {
        navigation.navigate('Home')
      }
    },[isLogin])
  return (
    <View style={[styles.titleHeader]}>
      <TouchableOpacity>
        <Image source={require('../assets/images/profile.jpg')} style={styles.profileSize}/>
      </TouchableOpacity>
      <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
       <Text style={{color: '#fff', fontFamily: 'Poppins-SemiBold',fontSize: 20, textAlign: 'center'}}>Tickitz</Text>
       <Tickets name='ticket' size={16} style={{color: '#fff', marginLeft: 5}}/>
      </View>
      <TouchableOpacity onPress={()=> {
         alert('Anda telah keluar')
         dispatch(AuthLogout())
      }}>
        <Logout name='logout' size={25} color={'#fff'}/>
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
    width: 40,
    height: 40,
    borderRadius: 50,
    resizeMode: 'contain',
  }
})

export default HeaderLogin