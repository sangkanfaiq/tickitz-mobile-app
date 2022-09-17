import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {commonStyle} from '../../utils/commonStyle';
import BackIcon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import ChangeLogo from '../../assets/change.svg'

const ChangePassScreen = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <ScrollView style={{backgroundColor: commonStyle.bgPrimary}}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{position: 'absolute', left: 20}}
          onPress={() => navigation.goBack()}>
          <BackIcon name="chevron-left" size={30} color={'lightgray'} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Change Password</Text>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
          marginBottom: 20,
        }}>
        <Text
          style={{fontFamily: 'Poppins-Medium', color: '#fff', fontSize: 24}}>
          Set your new password
        </Text>
      </View>
      {/* Background logo */}
      <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 40}}>
        <ChangeLogo width={200} height={200}/>
      </View>

      <View style={{paddingHorizontal: 10}}>
        <View style={{marginHorizontal: 30}}>
          {/* New pass */}
          <View>
            <Text style={styles.label}>New password</Text>
            <View style={[styles.customInput, {flexDirection: 'row'}]}>
              <TextInput
                placeholder="Set your new password"
                placeholderTextColor={'#888'}
                style={styles.input}
                secureTextEntry={showPassword ? false : true}
                autoCapitalize="none"
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={{justifyContent: 'center', alignItems: 'center'}}>
                  {showPassword ? (
                    <Image
                      source={require('../../assets/eyeOpen.png')}
                      style={{width: 18, height: 18}}
                    />
                  ) : (
                    <Image
                      source={require('../../assets/eyeClose.png')}
                      style={{width: 18, height: 18}}
                    />
                  )}
              </TouchableOpacity>
            </View>
          </View>
          {/* Confirm new password */}
          <View>
            <Text style={styles.label}>Confirm new password</Text>
            <View style={[styles.customInput, {flexDirection: 'row'}]}>
              <TextInput
                placeholder="Confirm your new password"
                placeholderTextColor={'#888'}
                style={styles.input}
                secureTextEntry={showConfirmPassword ? false : true}
                autoCapitalize="none"
              />
              <TouchableOpacity
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{justifyContent: 'center', alignItems: 'center'}}>
                {showConfirmPassword ? (
                  <Image
                    source={require('../../assets/eyeOpen.png')}
                    style={{width: 18, height: 18}}
                  />
                ) : (
                  <Image
                    source={require('../../assets/eyeClose.png')}
                    style={{width: 18, height: 18}}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  showPass: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins-Regular',
    color: '#fff',
    fontSize: 12,
  },
  header: {
    height: 70,
    backgroundColor: commonStyle.bgPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: 'lightgray',
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
  button: {
    backgroundColor: 'red',
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 50,
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

export default ChangePassScreen;
