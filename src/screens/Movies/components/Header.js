import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {commonStyle} from '../../../utils/commonStyle';
import BackIcon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.background}>
      <TouchableOpacity style={{position: 'absolute', left: 20}} onPress={()=> navigation.goBack()}>
        <BackIcon name='chevron-left' size={30} color={'lightgray'}/>
      </TouchableOpacity>
      <Text style={styles.headerText}>Movies</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    height: 70,
    backgroundColor: commonStyle.bgPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: 'lightgray',
  },
});

export default Header;
