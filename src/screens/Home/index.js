import {
  View,
  Text,
  SafeAreaView,
  FlatList
} from 'react-native';
import React from 'react';
import {commonStyle} from '../../utils/commonStyle';
import {useSelector} from 'react-redux';
import NoData from '../../assets/nodata.svg'
import HomeContent from './components/HomeContent';

const HomeScreen = () => {
  const {error} = useSelector(state => state.movies);

  if(error) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: commonStyle.bgPrimary}}>
        <NoData width={150} height={150}/>
        <Text style={{fontFamily: 'Poppins-Medium', color: '#fff', fontSize: 20, marginTop: 20}}>Oops sorry</Text>
        <Text style={{fontFamily: 'Poppins-Medium', color: '#fff', fontSize: 14, marginTop: 10}}>Can't connect to server</Text>
      </View>
    )
  }
  return (
    <SafeAreaView>
     <FlatList
      data={['']} showsVerticalScrollIndicator={false} renderItem={()=> {
        return (
          <>
            <HomeContent />
          </>
        )
      }}
      />
    </SafeAreaView>
  );
};
export default HomeScreen;
