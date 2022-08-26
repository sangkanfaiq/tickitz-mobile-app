import {SafeAreaView} from 'react-native'
import React, { useEffect } from 'react'
import ProfilePage from './components/ProfileScreen'
import { useSelector } from 'react-redux'
import GetStarted from './components/GetStarted'
import { commonStyle } from '../../utils/commonStyle'

const ProfileScreen = () => {
  const {isLogin} = useSelector((state) => state.auth);

  return (
    <SafeAreaView style={{backgroundColor: commonStyle.bgPrimary, height: '100%'}}>
      {isLogin ? <ProfilePage/> : <GetStarted />}
    </SafeAreaView>
  )
}

export default ProfileScreen