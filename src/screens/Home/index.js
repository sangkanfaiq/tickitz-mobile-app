import {FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header';
import Upcoming from './components/Upcoming';
import Banner from './components/Banner';
import HeaderLogin from '../../components/HeaderLogin';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Search from './components/Search';
import {commonStyle} from '../../utils/commonStyle';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';

const HomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
  const {isLogin} = useSelector(state => state.auth);
  useEffect(() => {
    if (isLogin === false) {
      navigation.navigate('Home');
    }
  }, [isLogin]);
  return (
    <SafeAreaView style={{backgroundColor: commonStyle.bgPrimary}} showsVerticalScrollIndicator={false} >
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
