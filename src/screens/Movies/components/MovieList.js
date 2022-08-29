import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {commonStyle} from '../../../utils/commonStyle';
import Star from 'react-native-vector-icons/FontAwesome';
import HalfStar from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {GetMovies} from '../../../redux/actions/Movies';
import moment from 'moment';

const MovieList = () => {
  const navigation = useNavigation();
  const {data} = useSelector(state => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetMovies());
  }, []);

  return (
    <View style={{marginLeft: 20, marginTop: 30}}>
      <ScrollView
        style={{flexDirection: 'row', marginBottom: 30}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <View style={[styles.categoriesCard, styles.active]}>
          <Text style={[styles.categoriesText, styles.active]}>Upcoming</Text>
        </View>
        <View style={styles.categoriesCard}>
          <Text style={styles.categoriesText}>Horror</Text>
        </View>
        <View style={styles.categoriesCard}>
          <Text style={styles.categoriesText}>Action</Text>
        </View>
        <View style={styles.categoriesCard}>
          <Text style={styles.categoriesText}>Adventure</Text>
        </View>
        <View style={styles.categoriesCard}>
          <Text style={styles.categoriesText}>Fantasy</Text>
        </View>
      </ScrollView>

      <FlatList
        data={data?.data?.results}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
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
              <View style={{flexDirection: 'row', marginVertical: 15}}>
                <View style={styles.imageBox}>
                  <Image
                    source={{
                      uri: `http://192.168.100.39:3006/uploads/${item.cover}`,
                    }}
                    style={styles.imageSize}
                  />
                </View>
                <View style={{marginLeft: 15, justifyContent: 'center'}}>
                  <Text style={styles.titleText}>{item.title}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginVertical: 10,
                      alignItems: 'center',
                    }}>
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
                      color={'darkorange'}
                    />
                    <Text style={styles.ratingText}>{`( ${item.rating} )`}</Text>
                  </View>
                  <Text style={{fontFamily: 'Poppins-Regular', color: 'gray', fontSize: 12, marginVertical: 3}}>
                    {item.durationHours} hour {item.durationMinute} minute
                  </Text>
                  <Text style={{fontFamily: 'Poppins-Regular', color: 'gray', letterSpacing: 1, fontSize: 12, marginVertical: 3}}>
                    {moment(item.releaseDate).format('YYYY')}
                  </Text>
                  <Text style={styles.text}>{item.genre}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  ratingText: {
    fontFamily: 'Nunito-Medium',
    color: 'darkorange',
    fontSize: 9,
    marginLeft: 10,
  },
  titleText: {
    fontFamily: 'Poppins-Medium',
    color: '#fff',
    fontSize: 16,
  },
  imageBox: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  imageSize: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    borderRadius: 10,
  },
  categoriesCard: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    backgroundColor: commonStyle.bgSecondary,
    borderRadius: 5,
    marginRight: 10,
  },
  active: {
    backgroundColor: commonStyle.bgThird,
    color: '#fff',
  },
  categoriesText: {
    fontFamily: 'Poppins-Medium',
    color: 'gray',
    fontSize: 12,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    color: 'gray',
    fontSize: 12,
    marginVertical: 3,
  },
});

export default MovieList;
