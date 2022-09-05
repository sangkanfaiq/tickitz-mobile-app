import { FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native'
import React from 'react'
import Header from './components/Header'
import MovieList from './components/MovieList'
import { commonStyle } from '../../utils/commonStyle'
import NoData from '../../assets/nodata.svg'
import { useSelector } from 'react-redux'

const MoviesScreen = () => {
  const {error} = useSelector((state) => state.movies)

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
    <SafeAreaView style={{paddingBottom: 10, backgroundColor: commonStyle.bgPrimary}} showsVerticalScrollIndicator={false} >
      <FlatList
      data={['']} showsVerticalScrollIndicator={false} renderItem={()=> {
        return (
          <>
          <Header />
          <MovieList />
          </>
        )
      }}
      />
    </SafeAreaView>
  )
}

export default MoviesScreen