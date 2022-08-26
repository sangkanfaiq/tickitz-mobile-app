import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { nowShowing } from '../../../model/data'
import { useNavigation } from '@react-navigation/native';
import { commonStyle } from '../../../utils/commonStyle';

const NowShowing = () => {
  const navigation = useNavigation();
  
  return (
    <View style={{paddingVertical: 30, backgroundColor: commonStyle.bgPrimary}}>
      <Text style={{fontFamily: 'Poppins-SemiBold', color: 'gray', fontSize: 20, marginHorizontal: 10}}>Now Showing</Text>
      <ScrollView style={{marginTop: 20}} horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}} >
          {nowShowing.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={()=> navigation.navigate('MovieDetails', item)}>
                <Image source={item.cover} style={styles.image}/>
              </TouchableOpacity>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 220,
    resizeMode: 'stretch',
    borderRadius: 20,
    marginHorizontal: 10
  }
})

export default NowShowing