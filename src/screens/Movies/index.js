import { SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from './components/Header'
import MovieList from './components/MovieList'
import { commonStyle } from '../../utils/commonStyle'

const MoviesScreen = () => {
  return (
    <SafeAreaView style={{paddingBottom: 30, backgroundColor: commonStyle.bgPrimary}} showsVerticalScrollIndicator={false} >
      <ScrollView>
        <Header />
        <MovieList />
      </ScrollView>
    </SafeAreaView>
  )
}

export default MoviesScreen