import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import React, { useState} from 'react';
import Logo from '../../assets/images/registerBg.svg';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import axios from 'axios';
import { commonStyle } from '../../utils/commonStyle';
import BackIcon from 'react-native-vector-icons/Feather'

const RegisterScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const {error, loading} = useSelector(state => state.register);
  const [register, setRegister] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
  });

  const handleRegister = () => {
    axios({
      method: "POST",
      url: "http://192.168.100.39:3006/api/v1/auth/register",
      data: register
    })
      .then((res) => {
        ToastAndroid.showWithGravity('Register Success', ToastAndroid.SHORT, ToastAndroid.CENTER)
        navigation.navigate('Home', {screen: 'Profile'})
      })
      .catch((err) => {
        ToastAndroid.showWithGravity(err.response.data.message)  
      });
  };


  return (
    <ScrollView style={{backgroundColor: commonStyle.bgPrimary}}>
      <View style={styles.header}>
        <TouchableOpacity style={{position: 'absolute', left: 20}} onPress={()=> navigation.goBack()}>
          <BackIcon name='chevron-left' size={30} color={'lightgray'}/>
        </TouchableOpacity>
        <Text style={{fontFamily: 'Poppins-SemiBold', color: 'lightgray', fontSize: 18}}>Register</Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 30, marginBottom: 20}}>
        <Logo width={300} height={250} />
      </View>
      <View style={{paddingHorizontal: 10, paddingBottom: 40, paddingTop: 20}}>
        <View style={{marginHorizontal: 30}}>
          <Text style={styles.label}>Nama Depan</Text>
          <View style={styles.customInput}>
            <TextInput
              placeholder="Masukan nama depan"
              placeholderTextColor={'#888'}
              style={styles.input}
              autoCapitalize="none"
              onChangeText={e => {
                setRegister(prevData => ({
                  ...prevData,
                  firstName: e,
                }));
              }}
            />
          </View>
          <Text style={styles.label}>Nama Belakang</Text>
          <View style={styles.customInput}>
            <TextInput
              placeholder="Masukan nama belakang"
              placeholderTextColor={'#888'}
              style={styles.input}
              autoCapitalize="none"
              onChangeText={e => {
                setRegister(prevData => ({
                  ...prevData,
                  lastName: e,
                }));
              }}
            />
          </View>
          <Text style={styles.label}>Nomor Handphone</Text>
          <View style={styles.customInput}>
            <TextInput
              placeholder="Masukan nomor handphone"
              placeholderTextColor={'#888'}
              style={styles.input}
              autoCapitalize="none"
              onChangeText={e => {
                setRegister(prevData => ({
                  ...prevData,
                  phoneNumber: e,
                }));
              }}
            />
          </View>
          <Text style={styles.label}>Email</Text>
          <View style={styles.customInput}>
            <TextInput
              placeholder="Masukan email"
              placeholderTextColor={'#888'}
              style={styles.input}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={e => {
                setRegister(prevData => ({
                  ...prevData,
                  email: e,
                }));
              }}
            />
          </View>
          <Text style={styles.label}>Kata Sandi</Text>
          <View style={[styles.customInput, {flexDirection: 'row'}]}>
            <TextInput
              placeholder="Masukan kata sandi"
              placeholderTextColor={'#888'}
              style={styles.input}
              secureTextEntry={showPassword ? false : true}
              autoCapitalize="none"
              onChangeText={e => {
                setRegister(prevData => ({
                  ...prevData,
                  password: e,
                }));
              }}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text>
                {showPassword ? (
                  <Text style={styles.showPass}>Hide</Text>
                ) : (
                  <Text style={styles.showPass}>Show</Text>
                )}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            {loading ? (
              <Text style={styles.buttonText}>Tunggu</Text>
            ) : (
              <Text style={styles.buttonText}>Daftar</Text>
            )}
          </TouchableOpacity>
          {error && <Text style={{color: 'red', textAlign: 'center', marginTop: 10, fontSize: 15}}>{error.message}</Text>}
        </View>
      </View>
      <View style={{alignItems: 'center', paddingBottom: 30}}>
        <Text style={{fontFamily: 'Poppins-Medium', color: '#fff'}}>
          Sudah punya akun?
          <Text
            style={{fontFamily: 'Poppins-SemiBold', color: commonStyle.bgThird}}
            onPress={() => navigation.goBack()}>
            {' '}
            Masuk disini
          </Text>
         
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 70, 
    backgroundColor: 
    commonStyle.bgPrimary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  customInput: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#777',
  },
  label: {
    marginVertical: 15,
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
  },
  input: {
    width: '85%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#fff',
  },
  showPass: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins-Medium',
    color: '#fff',
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: commonStyle.bgThird,
  },
  buttonText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: '#fff',
  },
});

export default RegisterScreen;
