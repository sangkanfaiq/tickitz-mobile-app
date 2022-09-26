import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  Image,
  ActivityIndicator,
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
    city: '',
    country: '',
    email: '',
    password: '',
  });

  const handleRegister = () => {
    axios({
      method: "POST",
      url: "https://tickitz-backend-1st.herokuapp.com/api/v1/auth/register",
      data: register
    })
      .then((res) => {
        ToastAndroid.showWithGravity('Register Successfully', ToastAndroid.SHORT, ToastAndroid.CENTER)
        navigation.navigate('Login')
      })
      .catch((err) => {
        ToastAndroid.showWithGravity(err.response.data.message, ToastAndroid.SHORT, ToastAndroid.CENTER)
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
          <Text style={styles.label}>First name</Text>
          <View style={styles.customInput}>
            <TextInput
              placeholder="Enter your first name"
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
          <Text style={styles.label}>Last name</Text>
          <View style={styles.customInput}>
            <TextInput
              placeholder="Enter your last name"
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
          <Text style={styles.label}>Phone number</Text>
          <View style={styles.customInput}>
            <TextInput
              placeholder="Enter your phone number"
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
          <Text style={styles.label}>City</Text>
          <View style={styles.customInput}>
            <TextInput
              placeholder="Enter your city"
              placeholderTextColor={'#888'}
              style={styles.input}
              autoCapitalize="none"
              onChangeText={e => {
                setRegister(prevData => ({
                  ...prevData,
                  city: e,
                }));
              }}
            />
          </View>
          <Text style={styles.label}>Country</Text>
          <View style={styles.customInput}>
            <TextInput
              placeholder="Enter your country"
              placeholderTextColor={'#888'}
              style={styles.input}
              autoCapitalize="none"
              onChangeText={e => {
                setRegister(prevData => ({
                  ...prevData,
                  country: e,
                }));
              }}
            />
          </View>
          <Text style={styles.label}>Email</Text>
          <View style={styles.customInput}>
            <TextInput
              placeholder="Enter your email"
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
          <Text style={styles.label}>Password</Text>
          <View style={[styles.customInput, {flexDirection: 'row'}]}>
            <TextInput
              placeholder="Enter your password"
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
                {showPassword ? (
                      <Image source={require('../../assets/eyeOpen.png')} style={{width: 18, height: 18}}/>
                    ) : (
                      <Image source={require('../../assets/eyeClose.png')} style={{width: 18, height: 18}}/>
                    )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            {loading ? (
              <ActivityIndicator size="small" color={'#fff'} />
            ) : (
              <Text style={styles.buttonText}>Register</Text>
            )}
          </TouchableOpacity>
          {error && <Text style={{color: 'red', textAlign: 'center', marginTop: 10, fontSize: 15}}>{error.message}</Text>}
        </View>
      </View>
      <View style={{alignItems: 'center', paddingBottom: 30}}>
        <Text style={{fontFamily: 'Poppins-Regular', color: '#fff'}}>
          Already have an account?
          <Text
            style={{fontFamily: 'Poppins-Regular', color: commonStyle.bgThird}}
            onPress={() => navigation.goBack()}>
            {' '}
            Login here
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
    fontFamily: 'Poppins-Medium',
    color: '#fff',
  },
  input: {
    width: '89%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
  },
  showPass: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins-Medium',
    color: '#fff',
    fontSize: 12
  },
  button: {
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: commonStyle.bgThird,
  },
  buttonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#fff',
  },
});

export default RegisterScreen;
