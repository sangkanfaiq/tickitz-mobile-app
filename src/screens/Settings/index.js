import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import BackIcon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {commonStyle} from '../../utils/commonStyle';
import Logout from 'react-native-vector-icons/AntDesign';
import User from 'react-native-vector-icons/FontAwesome5';
import ChefronRight from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {AuthLogout} from '../../redux/actions/Auth';

const SettingScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {isLogin} = useSelector(state => state.auth);
  useEffect(() => {
    if (isLogin === false) {
      navigation.navigate('Home');
    }
  }, [isLogin]);

  return (
    <View style={{backgroundColor: commonStyle.bgPrimary, height: '100%'}}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{position: 'absolute', left: 20}}
          onPress={() => navigation.goBack()}>
          <BackIcon name="chevron-left" size={30} color={'lightgray'} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <View
        style={{
          padding: 20,
          backgroundColor: commonStyle.bgFourth,
          marginHorizontal: 20,
          marginTop: 30,
          borderRadius: 20,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.iconBg}>
              <User name="user-alt" size={14} color={'#fff'} />
            </View>
            <Text style={styles.manageAcc}>Manage Account</Text>
          </View>
          <View>
            <ChefronRight name="chevron-right" size={22} color={'#fff'} />
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          padding: 20,
          backgroundColor: commonStyle.bgFourth,
          marginHorizontal: 20,
          marginTop: 20,
          borderRadius: 20,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          onPress={() => {
            alert('Anda telah keluar');
            dispatch(AuthLogout());
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.logoutBg}>
              <Logout name="logout" size={14} color={'#fff'} />
            </View>
            <Text style={{fontFamily: 'Poppins-Medium', color: 'red', fontSize: 14}}>Logout</Text>
          </View>
          <View>
            <ChefronRight name="chevron-right" size={22} color={'#fff'} />
          </View>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  manageAcc: {
    fontFamily: 'Poppins-Medium',
    color: '#fff',
    fontSize: 14,
  },
  logoutBg: {
    backgroundColor: commonStyle.bgThird,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginRight: 10,
  },
  iconBg: {
    backgroundColor: '#20c781',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginRight: 10,
  },
  header: {
    height: 70,
    backgroundColor: commonStyle.bgPrimary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Poppins-SemiBold',
    color: 'lightgray',
    fontSize: 18,
  },
});

export default SettingScreen;
