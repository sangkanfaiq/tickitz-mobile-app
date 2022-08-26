import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { commonStyle } from '../../../utils/commonStyle'
import Logo from '../../../assets/images/getstarted.svg'
import Go from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

const GetStarted = () => {
  const navigation = useNavigation()

  return (
    <View style={{marginHorizontal: 30}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Logo width={300} height={300}/>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.title}>Find out the best movies to watch here</Text>
            <Text style={styles.desc}>We provide all the best movies for you to watch with your partner or family. From a variety of the best genres are here</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Lets get started</Text>
            <Go name='chevron-right' size={25} color={'#fff'} style={{paddingRight: 20}}/>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Poppins-Medium',
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
        width: '90%',
        marginTop: 30
    },
    desc: {
        fontFamily: 'Poppins-Regular',
        color: 'gray',
        fontSize: 16,
        textAlign: 'center',
        width: '90%',
        lineHeight: 28
    },
    button: {
        backgroundColor: commonStyle.bgThird,
        marginTop: 60,
        height: 60,
        marginHorizontal: 70,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 50,
        flexDirection: 'row',
        paddingLeft: 30
    },
    buttonText: {
        fontFamily: 'Nunito-Medium',
        fontSize: 18,
        color: '#fff'
    }
})

export default GetStarted