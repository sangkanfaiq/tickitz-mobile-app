import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const BookingScreen = () => {
  const navigation = useNavigation();


  return (
    <View style={{justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <Text style={{fontSize: 18, color: '#111'}}>Booking Screen</Text>
      <TouchableOpacity style={styles.checkoutButton} onPress={()=> navigation.navigate('Payment')}>
        <Text style={styles.checkoutText}>Checkout Now</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    checkoutButton: {
        backgroundColor: '#222',
        width: '50%',
        height: 50,
        alignItems: 'center',
        marginTop: 30,
        justifyContent: 'center',
        borderRadius: 10
    },
    checkoutText: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        color: '#fff'
    }
})

export default BookingScreen