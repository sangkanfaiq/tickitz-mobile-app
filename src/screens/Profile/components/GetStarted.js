import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { commonStyle } from '../../../utils/commonStyle'
import Logo from '../../../assets/images/getstarted.svg'
import Go from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

const GetStarted = () => {
  const navigation = useNavigation()

  return (
    <ScrollView style={{paddingHorizontal: 30, paddingBottom: 40}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Logo width={300} height={400}/>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.title}>Find out the best movies to watch here</Text>
            <Text style={styles.desc}>We provide all the best movies for you to watch with your partner or family. From a variety of the best genres are here</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Lets get started</Text>
            <Go name='chevron-right' size={20} color={'#fff'} style={{paddingRight: 20}}/>
        </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Poppins-Medium',
        fontSize: 25,
        color: '#fff',
        textAlign: 'center',
    },
    desc: {
        fontFamily: 'Poppins-Regular',
        color: 'gray',
        fontSize: 13,
        textAlign: 'center',
        lineHeight: 28,
        marginTop: 10
    },
    button: {
        backgroundColor: commonStyle.bgThird,
        marginTop: 50,
        height: 50,
        marginHorizontal: 70,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 50,
        flexDirection: 'row',
        paddingLeft: 30
    },
    buttonText: {
        fontFamily: 'Nunito-Medium',
        fontSize: 14,
        color: '#fff'
    }
})

export default GetStarted