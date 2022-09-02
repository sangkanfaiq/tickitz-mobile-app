import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../assets/images/loginRed.svg';
import {useNavigation} from '@react-navigation/native';
import {AuthLogin} from '../../redux/actions/Auth';
import {useDispatch, useSelector} from 'react-redux';
import { commonStyle } from '../../utils/commonStyle';
import GoBack from 'react-native-vector-icons/Feather'
// import { useEffect } from 'react';

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const {error, loading, isLogin} = useSelector(state => state.auth);
  const [formLogin, setFormLogin] = useState({
    email: '',
    password: '',
  });

  const handleLogin = () => {
    dispatch(AuthLogin(formLogin));
    navigation.navigate('Home')
  }
  

  return (
    <SafeAreaView style={{backgroundColor: commonStyle.bgPrimary, height: '100%'}}>
      <View style={styles.header}>
        <TouchableOpacity style={{position: 'absolute', left: 20}} onPress={()=> navigation.goBack()}>
          <GoBack name='chevron-left' size={30} color={'lightgray'}/>
        </TouchableOpacity>
        <Text style={{fontFamily: 'Poppins-SemiBold', color: 'lightgray', fontSize: 18}}>Login</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
          marginBottom: 20,
        }}>
        <Logo width={300} height={250} />
      </View>
      <View style={{paddingHorizontal: 10, paddingBottom: 40, paddingTop: 20}}>
        <View style={{marginHorizontal: 30}}>
          <View>
            <Text style={styles.label}>Email</Text>
            <View style={styles.customInput}>
              <TextInput
                placeholder="Masukan email"
                placeholderTextColor={'#888'}
                style={styles.input}
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={e => {
                  setFormLogin(prevData => ({
                    ...prevData,
                    email: e,
                  }));
                }}
              />
            </View>
          </View>
          <View>
            <Text style={styles.label}>Kata sandi</Text>
            <View style={[styles.customInput, {flexDirection: 'row'}]}>
              <TextInput
                placeholder="Masukan kata sandi"
                placeholderTextColor={'#888'}
                style={styles.input}
                secureTextEntry={showPassword ? false : true}
                autoCapitalize="none"
                onChangeText={e => {
                  setFormLogin(prevData => ({
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
          </View>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              {!loading ? <Text style={styles.buttonText}>Masuk</Text> : <Text style={styles.buttonText}>Tunggu...</Text>}
            </TouchableOpacity>
          {error && (
            <Text
              style={{
                color: 'red',
                textAlign: 'center',
                marginTop: 10,
                fontSize: 15,
              }}>
              {error.message}
            </Text>
          )}
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={{fontFamily: 'Poppins-Regular', color: '#fff'}}>
          Belum punya akun?
        </Text>
        <Text
            style={{fontFamily: 'Poppins-Regular', color: commonStyle.bgThird}}
            onPress={() => navigation.navigate('Register')}>
            {' '}
            Daftar disini
          </Text>
      </View>
    </SafeAreaView>
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
    width: '85%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
  },
  showPass: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins-Regular',
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

export default LoginScreen;
