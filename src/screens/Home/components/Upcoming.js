import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from 'react-native';
import React, { useState } from 'react';
import Star from 'react-native-vector-icons/FontAwesome';
import HalfStar from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {commonStyle} from '../../../utils/commonStyle';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {GetMovies} from '../../../redux/actions/Movies';
import moment from 'moment';

const Upcoming = () => {
  const navigation = useNavigation();
  const {data} = useSelector(state => state.movies);
  const dispatch = useDispatch();
  const [ refetch, setRefetch ] = useState(false)

  useEffect(() => {
    dispatch(GetMovies());
  }, []);

  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingTop: 80,
        paddingBottom: 50,
        backgroundColor: commonStyle.bgPrimary,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 20,
            color: 'lightgray',
          }}>
          Upcoming Movies
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Movies')}>
          <Text
            style={{
              color: 'gray',
              fontFamily: 'Poppins-Medium',
              fontSize: 10,
              textTransform: 'uppercase',
            }}>
            More
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data?.data?.results}
        showsVerticalScrollIndicator={false}
        style={{paddingBottom: 30, marginTop: 20}}
        refreshControl={<RefreshControl onRefresh={() => { setRefetch(!refetch) }} />}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={styles.imageBox}
              key={index}
              onPress={() =>
                navigation.navigate('MovieDetails', {
                  title: item.title,
                  genre: item.genre,
                  durationHours: item.durationHours,
                  durationMinute: item.durationMinute,
                  rating: item.rating,
                  director: item.director,
                  writer: item.writer,
                  releaseDate: item.releaseDate,
                  cast: item.cast,
                  description: item.description,
                  cover: item.cover,
                })
              }>
              <View style={styles.imageCard}>
                <Image
                  source={{
                    uri: `http://192.168.100.39:3006/uploads/${item.cover}`,
                  }}
                  style={styles.imageSize}
                />
              </View>
              <View style={styles.cardDetails}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 16,
                    color: '#fff',
                  }}>
                  {item.title}
                </Text>
                <View style={{flexDirection: 'row', marginVertical: 10}}>
                  <Star
                    name="star"
                    size={12}
                    color={'darkorange'}
                    style={{marginRight: 5}}
                  />
                  <Star
                    name="star"
                    size={12}
                    color={'darkorange'}
                    style={{marginRight: 5}}
                  />
                  <Star
                    name="star"
                    size={12}
                    color={'darkorange'}
                    style={{marginRight: 5}}
                  />
                  <Star
                    name="star"
                    size={12}
                    color={'darkorange'}
                    style={{marginRight: 5}}
                  />
                  <HalfStar
                    name="star-half-empty"
                    size={12}
                    style={{marginRight: 5}}
                    color={'darkorange'}
                  />
                </View>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    color: 'gray',
                    fontSize: 12,
                    marginVertical: 3,
                  }}>
                  {item.durationHours} hour {item.durationMinute} minute
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    letterSpacing: 1,
                    color: 'gray',
                    fontSize: 12,
                    marginVertical: 3,
                  }}>
                  {moment(item.releaseDate).format('YYYY')}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    color: 'gray',
                    fontSize: 12,
                    marginVertical: 3,
                  }}>
                  {item.genre}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageBox: {
    width: 150,
    height: 150,
    marginVertical: 15,
    flexDirection: 'row',
  },
  imageCard: {
    width: '100%',
    height: 150,
  },
  cardDetails: {
    width: 300,
    marginLeft: 15,
    justifyContent: 'center',
  },
  imageSize: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    borderRadius: 10,
  },
});

export default Upcoming;
