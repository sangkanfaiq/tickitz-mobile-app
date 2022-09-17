import {
  FlatList,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {commonStyle} from '../../../utils/commonStyle';
import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import Star from 'react-native-vector-icons/FontAwesome';
import HalfStar from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {GetAllMovies} from '../../../redux/actions/Movies';
import moment from 'moment';
import axios from 'axios';
import Carousel from 'react-native-snap-carousel';
import {windowWidth} from '../../../utils/Dimension';
import BannerSlider from '../../../components/BannerSlider';
import Navbar from '../../../components/Navbar';

const HomeContent = () => {
  const {dataAll, loading} = useSelector(state => state.movies);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [movieSchedule, setMovieSchedule] = useState([]);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    dispatch(GetAllMovies());
  }, [dispatch]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://tickitz-backend-1st.herokuapp.com/api/v1/schedule`,
    })
      .then(res => {
        setMovieSchedule(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} key={index} />;
  };

  return (
    <SafeAreaView
      style={{backgroundColor: commonStyle.bgPrimary}}
      showsVerticalScrollIndicator={false}>
      <Navbar />
      <FlatList
        data={['']}
        showsVerticalScrollIndicator={false}
        renderItem={() => {
          return (
            <>
              {/* Now Showing */}
              <View
                style={{
                  backgroundColor: commonStyle.bgPrimary,
                  paddingTop: 30,
                }}>
                <Text style={styles.nowShowingTitle}>Now Showing</Text>
                {loading ? (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: 230,
                    }}>
                    <ActivityIndicator
                      size="large"
                      color={commonStyle.bgThird}
                    />
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        color: '#fff',
                        fontSize: 14,
                        marginTop: 20,
                      }}>
                      Please wait...
                    </Text>
                  </View>
                ) : (
                  <Carousel
                    data={movieSchedule}
                    renderItem={renderBanner}
                    sliderWidth={windowWidth}
                    itemWidth={370}
                    enableSnap={true}
                    loop={true}
                    autoplay={true}
                    autoplayDelay={3000}
                    autoplayInterval={5000}
                    enableMomentum={false}
                    lockScrollWhileSnapping={true}
                  />
                )}
              </View>

              {/* Upcoming */}
              <View
                style={{
                  paddingHorizontal: 20,
                  paddingTop: 60,
                  paddingBottom: 10,
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
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Movies')}>
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
                {loading ? (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: 300,
                    }}>
                    <ActivityIndicator
                      size="large"
                      color={commonStyle.bgThird}
                    />
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        color: '#fff',
                        fontSize: 14,
                        marginTop: 20,
                      }}>
                      Please wait...
                    </Text>
                  </View>
                ) : (
                  <FlatList
                    data={dataAll?.data?.results}
                    showsVerticalScrollIndicator={false}
                    style={{marginTop: 20}}
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
                                uri: `https://tickitz-backend-1st.herokuapp.com/uploads/${item.cover}`,
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
                            <View
                              style={{
                                flexDirection: 'row',
                                marginVertical: 10,
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
                              {item.durationHours} hour {item.durationMinute}{' '}
                              minute
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
                    }}
                  />
                )}
              </View>
            </>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  nowShowingTitle: {
    fontFamily: 'Poppins-Medium',
    color: 'lightgray',
    fontSize: 20,
    marginHorizontal: 20,
    marginBottom: 30,
  },
  searchBar: {
    marginVertical: 30,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: commonStyle.bgFourth,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    color: 'gray',
    fontFamily: 'Roboto-Regular',
    paddingVertical: 10,
    letterSpacing: 0.5,
    width: '90%',
    fontSize: 14,
    color: '#fff',
    paddingLeft: 15,
  },
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
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default HomeContent;
