import { FlatList, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from './components/Header'
import MovieList from './components/MovieList'
import { commonStyle } from '../../utils/commonStyle'

const MoviesScreen = () => {
  return (
    <SafeAreaView style={{paddingBottom: 10, backgroundColor: commonStyle.bgPrimary}} showsVerticalScrollIndicator={false} >
      <FlatList
      data={['']} renderItem={()=> {
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