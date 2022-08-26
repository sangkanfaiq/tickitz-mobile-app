import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header';
import NowShowing from './components/NowShowing';
import Upcoming from './components/Upcoming';
import Blank from './components/Blank';
import Banner from './components/Banner';
import HeaderLogin from '../../components/HeaderLogin';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Search from './components/Search';
import {commonStyle} from '../../utils/commonStyle';

const HomeScreen = () => {
  const navigation = useNavigation();

  const {isLogin} = useSelector(state => state.auth);
  useEffect(() => {
    if (isLogin === false) {
      navigation.navigate('Home');
    }
  }, [isLogin]);
  return (
    <SafeAreaView style={{backgroundColor: commonStyle.bgPrimary}}>
      {isLogin ? <HeaderLogin /> : <Header />}
      <FlatList
      data={['']} renderItem={()=> {
        return (
          <>
          <Search />
          <Banner />
          <Upcoming />
          </>
        )
      }}
      />
      
    </SafeAreaView>
  );
};

export default HomeScreen;
