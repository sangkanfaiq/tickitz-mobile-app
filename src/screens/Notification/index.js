import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import BackIcon from 'react-native-vector-icons/Feather';
import { commonStyle } from '../../utils/commonStyle';
import Empty from '../../assets/sad.svg'

const NotificationScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{backgroundColor: commonStyle.bgPrimary, height: '100%'}}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{position: 'absolute', left: 20}}
          onPress={() => navigation.goBack()}>
          <BackIcon name="chevron-left" size={30} color={'lightgray'} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Notification</Text>
      </View>
      <View style={{justifyContent: 'center',alignItems: 'center', height: '80%'}}>
        <Empty width={200} height={200}/>
        <Text style={{fontFamily: 'Poppins-Medium', color: '#fff', fontSize: 16, marginTop: 20, textAlign: 'center'}}>You don't have any notification</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
});

export default NotificationScreen;
