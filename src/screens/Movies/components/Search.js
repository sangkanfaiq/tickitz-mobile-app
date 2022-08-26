import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import SearchIcon from 'react-native-vector-icons/Feather';

const Search = () => {
  return (
    <View>
      <View style={styles.searchBar}>
        <SearchIcon name="search" size={20} style={{marginRight: 10, marginLeft: -35}}/>
          <TextInput style={styles.input} placeholder="Search here..." />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
    height: 50,
    marginTop: 10,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'gray',
    borderRadius: 5,
  },
  input: {
    width: '80%',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#222',
  },
});

export default Search;
