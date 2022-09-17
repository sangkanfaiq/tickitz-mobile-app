import {View, Text, StyleSheet, TouchableOpacity, Image, ToastAndroid} from 'react-native';
import React from 'react';
import Notif from 'react-native-vector-icons/MaterialCommunityIcons';
import Tickets from 'react-native-vector-icons/Fontisto';
import {commonStyle} from '../utils/commonStyle';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const Navbar = () => {
  const {isLogin} = useSelector(state => state.auth);
  const navigation = useNavigation();

  return (
    <View style={[styles.titleHeader]}>
      <TouchableOpacity style={{position: 'absolute', left: 20}} onPress={() => navigation.navigate('Account')}>
        {isLogin ? (
          <Image
            source={require('../assets/images/dp.jpg')}
            style={styles.profileSize}
          />
        ) : (
          ""
        )}
      </TouchableOpacity>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            color: 'lightgray',
            fontFamily: 'Poppins-SemiBold',
            fontSize: 20,
            textAlign: 'center',
          }}>
          Tickitz
        </Text>
        <Tickets
          name="ticket"
          size={16}
          style={{color: 'lightgray', marginLeft: 5}}
        />
      </View>
      {isLogin ? (
        <TouchableOpacity style={{position: 'absolute', right: 20}} onPress={() => navigation.navigate('Notification')}>
          <Notif name="bell-outline" size={25} color={'lightgray'} />
        </TouchableOpacity>
      ) : (
        // <TouchableOpacity style={{position: 'absolute', right: 20}} onPress={() => navigation.navigate('Login')}>
        //   <Notif name="bell-outline" size={25} color={'lightgray'} />
        // </TouchableOpacity>
        ""
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  profileSize: {
    width: 30,
    height: 30,
    borderRadius: 30,
    resizeMode: 'contain',
  },
  titleHeader: {
    flexDirection: 'row',
    backgroundColor: commonStyle.bgPrimary,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    height: 70,
  },
});

export default Navbar;
