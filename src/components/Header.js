import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Menu from 'react-native-vector-icons/Ionicons';
import Notif from 'react-native-vector-icons/MaterialCommunityIcons';
import Tickets from 'react-native-vector-icons/Fontisto';
import { commonStyle } from '../utils/commonStyle';

const Header = () => {

  return (
    <View style={[styles.titleHeader]}>
      <TouchableOpacity>
        <Menu name='menu' size={35} color={'lightgray'}/>
      </TouchableOpacity>
      <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
       <Text style={{color: 'lightgray', fontFamily: 'Poppins-SemiBold',fontSize: 20, textAlign: 'center'}}>Tickitz</Text>
       <Tickets name='ticket' size={16} style={{color: 'lightgray', marginLeft: 5}}/>
      </View>
      <TouchableOpacity>
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
  },
})

export default Header