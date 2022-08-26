import {View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const CustomInput = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{paddingBottom: 30}}>
      <View style={styles.container}>
        <View style={{width: '47%'}}>
          <Text style={styles.label}>Nama Depan</Text>
          <TextInput placeholder="Masha" style={styles.input} placeholderTextColor={'#666'}/>
        </View>
        <View style={{width: '47%'}}>
          <Text style={styles.label}>Nama Belakang</Text>
          <TextInput placeholder="Raymer" style={styles.input} placeholderTextColor={'#666'}/>
        </View>
      </View>
      <View>
        <Text style={styles.label}>Email</Text>
        <TextInput placeholder="masha69@gmail.com" style={styles.input} placeholderTextColor={'#666'}/>
      </View>
      <View>
        <Text style={styles.label}>Nomor Telepon</Text>
        <TextInput placeholder="087812345678" style={styles.input} placeholderTextColor={'#666'}/>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resetButton} onPress={() => navigation.navigate('ResetPassword')}>
            <Text style={styles.editText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  label: {
    fontFamily: 'Poppins-Medium',
    marginTop: 10
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 5,
    paddingVertical: 5,
    paddingLeft: 10,
    borderRadius: 5,
    fontFamily: 'Poppins-Medium',
  },
  editButton: {
    backgroundColor: 'darkorange',
    marginTop: 30,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: '49%'
  },
  resetButton: {
    backgroundColor: '#222',
    marginTop: 30,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: '49%'
  },
  editText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#f0f0f0'
  }
});

export default CustomInput;
