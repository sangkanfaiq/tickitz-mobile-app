import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'


const MainScreen = ({navigation}) => {
  useEffect(()=> {
    setTimeout(()=> {
      navigation.replace('Home')
    }, 2000)
  }, [navigation])
  return (
    <ImageBackground source={require('../../assets/dark.jpg')} style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: '#fff', fontSize: 40, fontFamily: 'Poppins-SemiBold'}}>Tickitz</Text>
        <Text style={{color: '#fff', fontSize: 18, fontFamily: 'Poppins-Regular'}}>Cinema Booking App</Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 100,    
    },
})

export default MainScreen