import { SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
// import Header from '../../components/Header'
import Horror from './components/Horror'
import Advertisement from './components/Advertisement'
import Action from './components/Action'
import Header from './components/Header'
import MovieList from './components/MovieList'
import { commonStyle } from '../../utils/commonStyle'
// import HeaderLogin from '../../components/HeaderLogin'
// import { useSelector } from 'react-redux'

const MoviesScreen = () => {
  // const {isLogin} = useSelector(state => state.auth);

  return (
    <SafeAreaView style={{paddingBottom: 30, backgroundColor: commonStyle.bgPrimary}}>
      {/* {isLogin ? <HeaderLogin/> : <Header />} */}
      <ScrollView>
        {/* <Advertisement /> */}
        {/* <Horror />
        <Action/> */}
        <Header />
        <MovieList />
      </ScrollView>
    </SafeAreaView>
  )
}

export default MoviesScreen