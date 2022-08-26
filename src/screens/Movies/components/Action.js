import {View, Text, Image, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {ActionMovies} from '../../../model/data';
import { useNavigation } from '@react-navigation/native';
import Star from 'react-native-vector-icons/FontAwesome'

const Action = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text
        style={{fontFamily: 'Poppins-SemiBold', color: '#222', fontSize: 20, marginHorizontal: 10}}>
        Actions
      </Text>

      <ScrollView style={{flexDirection: 'row'}} horizontal={true} showsHorizontalScrollIndicator={false}>
        {ActionMovies.map((item, index) => {
          return (
            <TouchableOpacity style={styles.imageBox} key={index} onPress={()=> navigation.navigate('MovieDetails', item)}>
              <View style={styles.imageCard}>
                <View style={styles.rating}>
                  <Text style={styles.ratingText}>{item.rating}</Text>
                  <Star name='star' size={12} style={{color: '#111', marginLeft: 3}}/>
                </View>
                <Image source={item.cover} style={styles.imageSize}/>
              </View>
              <View style={styles.cardDetails}>
                <Text style={styles.detailsText}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBox: {
    width: 200,
    height: 350,
    marginVertical: 20,
    marginHorizontal: 10,
  },
  rating: {
    position: 'absolute',
    zIndex: 1,
    top: 12,
    right: 10,
    backgroundColor: 'darkorange',
    height: 28,
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    flexDirection: 'row',
  },
  ratingText: {
    fontSize: 14,
    color: '#222',
    fontWeight: 'bold',
  },
  imageCard: {
    width: '100%',
    height: 250,
  },
  cardDetails: {
    width: '100%',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  detailsText: {
    fontFamily: 'Poppins-Medium',
    color: '#222',
    width: '60%',
    textAlign: 'center',
    fontSize: 14,
  },
  imageSize: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 10,
  },
});

export default Action;
