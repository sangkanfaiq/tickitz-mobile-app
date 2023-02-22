import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { commonStyle } from '../../utils/commonStyle'
import Ticket from 'react-native-vector-icons/Fontisto'


const MainScreen = ({navigation}) => {
  useEffect(()=> {
    setTimeout(()=> {
      navigation.replace('Home')
    }, 2000)
  }, [navigation])
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: '#fff', fontSize: 20, fontFamily: 'Poppins-Medium'}}>Tickitz</Text>
        <View style={{marginVertical: 20}}>
            <Ticket name='ticket' color={'#000'} size={25}/>
        </View>
        <Text style={{color: '#fff', fontSize: 20, fontFamily: 'Poppins-Regular'}}>Cinema Booking App</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: commonStyle.bgPrimary
    },
})

export default MainScreen