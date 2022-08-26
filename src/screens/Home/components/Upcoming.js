import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import Star from 'react-native-vector-icons/FontAwesome'
import HalfStar from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import { commonStyle } from '../../../utils/commonStyle';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { GetMovies } from '../../../redux/actions/Movies';
import moment from 'moment';

const Upcoming = () => {
  const navigation = useNavigation();
  const { data } = useSelector(state => state.movies) 
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(GetMovies())
  }, [])

  return (
    <View style={{paddingHorizontal: 20, paddingTop: 80, paddingBottom: 50,backgroundColor: commonStyle.bgPrimary}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Text
          style={{fontFamily: 'Poppins-SemiBold', fontSize: 20, color: 'lightgray'}}>
          Upcoming Movies
        </Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Movies')}>
            <Text style={{color: 'gray', fontFamily: 'Poppins-SemiBold', fontSize: 10, textTransform: 'uppercase'}}>More</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={data?.data?.results} showsVerticalScrollIndicator={false} style={{paddingBottom: 30}} renderItem={({item, index})=> {
          return (
            <TouchableOpacity style={styles.imageBox} key={index} onPress={()=> navigation.navigate('MovieDetails', {
              title: item.title,
              genre: item.genre,
              durationHours: item.durationHours,
              durationMinute: item.durationMinute,
              rating: item.rating,
              director: item.director,
              writer: item.writer,
              releaseDate: moment(item.releaseDate).format('YYYY'),
              cast: item.cast,
              description: item.description,
              cover: item.cover
          })}>
                    <View style={styles.imageCard}>
                      <Image source={{uri: `http://192.168.100.39:3006/uploads/${item.cover}`}} style={styles.imageSize} />
                    </View>
              <View style={styles.cardDetails}>
                <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 18, color: '#fff', marginTop: 10}}>{item.title}</Text>
                <View style={{flexDirection: 'row', marginVertical: 10}}>
                  <Star name='star' size={16} color={'darkorange'} style={{marginRight: 5}}/>
                  <Star name='star' size={16} color={'darkorange'} style={{marginRight: 5}}/>
                  <Star name='star' size={16} color={'darkorange'} style={{marginRight: 5}}/>
                  <Star name='star' size={16} color={'darkorange'} style={{marginRight: 5}}/>
                  <HalfStar name='star-half-empty' size={18} style={{marginRight: 5}} color={'darkorange'}/>
                </View>
                <Text style={{fontFamily: 'Poppins-Regular', color: 'lightgray', fontSize: 14, marginVertical: 3}}>{item.durationHours} hour {item.durationMinute} minute</Text>
                <Text style={{fontFamily: 'Poppins-Regular', letterSpacing: 1, color: 'lightgray', fontSize: 14, marginVertical: 3}}>{moment(item.releaseDate).format('YYYY')}</Text>
                <Text style={{fontFamily: 'Poppins-Regular', color: 'lightgray', fontSize: 14, marginVertical: 3}}>{item.genre}</Text>
              </View>
            </TouchableOpacity>
          )
      }}>
      </FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBox: {
    width: 150,
    height: 180,
    marginVertical: 15,
    flexDirection: 'row',
  },
  imageCard: {
    width: '100%',
    height: 180,
  },
  cardDetails: {
    width: 300,
    marginLeft: 20,
  },
  imageSize: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    borderRadius: 10
  },
});

export default Upcoming;
