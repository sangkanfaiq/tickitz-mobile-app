import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import { commonStyle } from '../../../utils/commonStyle';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>My Tickets</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
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

export default Header;
