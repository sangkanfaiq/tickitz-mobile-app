import React from 'react';
import Home from 'react-native-vector-icons/MaterialCommunityIcons';
import Movie from 'react-native-vector-icons/MaterialCommunityIcons';
import User from 'react-native-vector-icons/Feather';
import Theater from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';

const tabItem = ({onFocus, label, onPress}) => {
  const Icon = () => {
    if (label === 'Home') {
      return onFocus ? (
        <Home name="home" size={25} style={{backgroundColor: 'red'}} />
      ) : (
        <Home />
      );
    }
    if (label === 'Movies') {
      return onFocus ? (
        <Movie
          name="movie-open-play"
          size={25}
          style={{backgroundColor: 'red'}}
        />
      ) : (
        <Movie />
      );
    }
    if (label === 'Cinema') {
      return onFocus ? (
        <Theater
          name="movie-open-play"
          size={25}
          style={{backgroundColor: 'red'}}
        />
      ) : (
        <Theater />
      );
    }
    if (label === 'Profile') {
      return onFocus ? (
        <User
          name="movie-open-play"
          size={25}
          style={{backgroundColor: 'red'}}
        />
      ) : (
        <User />
      );
    }
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default tabItem;
