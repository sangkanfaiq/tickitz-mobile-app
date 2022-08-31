import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {commonStyle} from '../../../utils/commonStyle';
import SearchIcon from 'react-native-vector-icons/Feather'
import Option from 'react-native-vector-icons/Ionicons'

const Search = () => {
  return (
    <View style={{backgroundColor: commonStyle.bgPrimary, paddingTop: 10}}>
      <View style={styles.searchBar}>
        <SearchIcon name='search' size={25} color={'gray'}/>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 10}}>
          <TextInput
            placeholder="Search here"
            placeholderTextColor={'gray'}
            style={styles.input}
          />
          <TouchableOpacity>
            <Option name='options-sharp' size={25} color={'gray'}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    marginVertical: 30,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: commonStyle.bgFourth,
    alignItems: 'center',
    flexDirection: 'row'
  },
  input: {
    color: 'gray',
    fontFamily: 'Roboto-Regular',
    paddingVertical: 10,
    letterSpacing: 0.5,
    width: '90%',
    fontSize: 14,
    color: '#fff',
    paddingLeft: 15
  },
});

export default Search;
