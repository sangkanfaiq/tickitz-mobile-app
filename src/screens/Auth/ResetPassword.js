import {View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const ResetPasswordScreen = () => {
  return (
    <ScrollView>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
          marginBottom: 20,
        }}>
        <Text style={{fontFamily: 'Poppins-SemiBold', color: '#222', fontSize: 30}}>Reset Password</Text>
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
              />
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Kirim</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  customInput: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#777',
  },
  label: {
    marginVertical: 15,
    fontFamily: 'Poppins-SemiBold',
    color: '#222',
  },
  input: {
    width: '85%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#222',
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkorange',
  },
  buttonText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: '#fff',
  },
});

export default ResetPasswordScreen;
