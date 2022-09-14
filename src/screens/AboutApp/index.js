import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { commonStyle } from '../../utils/commonStyle'
import Ticket from 'react-native-vector-icons/Fontisto'

const AboutApp = () => {
  return (
    <View style={{backgroundColor: commonStyle.bgPrimary, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.about}>
        <View style={{alignItems: 'center'}}>
            <Text style={styles.title}>Tickitz</Text>
            <Text style={styles.subtitle}>Cinema Booking App</Text>
            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12, color: 'lightgray', letterSpacing: 0.5}}>Version 0.1.1</Text>
        </View>
        <View style={styles.cardLogo}>
            <Ticket name='ticket' color={commonStyle.bgPrimary} size={25}/>
        </View>
        <View style={{alignItems: 'center'}}>
            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12, color: 'gray'}}>Developed by</Text>
            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 16, color: '#fff', marginTop: 5}}>Sangkan Faiq</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Poppins-Medium',
        fontSize: 20,
        color: '#fff'
    },
    subtitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#fff'
    },
    cardLogo: {
        backgroundColor: '#20c781',
        alignItems: 'center',
        justifyContent: 'center',
        width: 64,
        height: 60,
        borderRadius: 18
    },
    about: {
        width: 300,
        height: 350,
        backgroundColor: commonStyle.bgFourth,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 40
    }
})

export default AboutApp