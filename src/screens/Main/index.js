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
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <View style={{width: 25, height: 10, backgroundColor: '#fff', borderRadius: 30, marginRight: 5}}></View>
          <View style={{width: 10, height: 10, backgroundColor: '#fff', borderRadius: 30, marginRight: 5}}></View>
          <View style={{width: 10, height: 10, backgroundColor: '#fff', borderRadius: 30, marginRight: 5}}></View>
        </View>
      </View>
      {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: '#fff', fontFamily: 'Poppins-Light', fontSize: 40}}>Nearest Cinema.</Text>
        <Text style={{color: '#fff', fontFamily: 'Poppins-Medium', fontSize: 35}}>Newest Movies</Text>
        <Text style={{color: '#fff', fontFamily: 'Poppins-SemiBold', fontSize: 35}}>Find out now!</Text>
      </View> */}
      {/* <TouchableOpacity style={styles.getStarted} onPress={()=> navigation.navigate('Home')}>
        <Text style={{color: '#fff', fontFamily: 'Poppins-Medium', fontSize: 18}}>Get Started</Text>
      </TouchableOpacity> */}
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
    getStarted: {
        width: 300,
        backgroundColor: 'rgba(0,0,0,0.6)',
        height: 70,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MainScreen