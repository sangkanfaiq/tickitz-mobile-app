import {
    FlatList,
    TextInput,
    TouchableOpacity,
    View,
    StyleSheet,
    Text,
    Image
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import {SafeAreaView} from 'react-native-safe-area-context';
  import Header from '../../../components/Header';
  import HeaderLogin from '../../../components/HeaderLogin';
  import {commonStyle} from '../../../utils/commonStyle';
  import {Alert} from 'react-native';
  import messaging from '@react-native-firebase/messaging';
  import SearchIcon from 'react-native-vector-icons/Feather';
  import Option from 'react-native-vector-icons/Ionicons';
  import Star from 'react-native-vector-icons/FontAwesome';
  import HalfStar from 'react-native-vector-icons/FontAwesome';
  import {useNavigation} from '@react-navigation/native';
  import {useSelector, useDispatch} from 'react-redux';
  import {GetMovies} from '../../../redux/actions/Movies';
  import moment from 'moment';
  import Waiting from '../../../assets/waiting.svg'
  import axios from 'axios'
  import Carousel from 'react-native-snap-carousel';
  import {windowWidth} from '../../../utils/Dimension'
  import BannerSlider from '../../../components/BannerSlider';
  
  const HomeContent = () => {
    const {isLogin} = useSelector(state => state.auth);
    const {data, loading, error} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [ search, setSearch ] = useState('')
    const [movieSchedule, setMovieSchedule] = useState([])
    
    useEffect(() => {
      const unsubscribe = messaging().onMessage(async remoteMessage => {
        Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      });
  
      return unsubscribe;
    }, []);
  
    useEffect(() => {
      dispatch(GetMovies());
    }, []);
  
    useEffect(() => {
      axios({
        method: "GET",
        url: `http://192.168.100.39:3006/api/v1/schedule`,
      }).then((res) => {
        setMovieSchedule(res.data.data);
      }).catch((err)=> {
        console.log(err)
      })
    }, []);
  
    const renderBanner = ({item, index}) => {
      return <BannerSlider data={item} key={index}/>;
    };
  
    return (
      <SafeAreaView
        style={{backgroundColor: commonStyle.bgPrimary}}
        showsVerticalScrollIndicator={false}>
        {isLogin ? <HeaderLogin /> : <Header />}
        <FlatList
          data={['']}
          showsVerticalScrollIndicator={false}
          renderItem={() => {
            return (
              <>
                {/* Search */}
                <View
                  style={{
                    backgroundColor: commonStyle.bgPrimary,
                    paddingTop: 10,
                  }}>
                  <View style={styles.searchBar}>
                    <SearchIcon name="search" size={25} color={'gray'} />
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingRight: 10,
                      }}>
                      <TextInput
                        placeholder="Search here"
                        placeholderTextColor={'gray'}
                        style={styles.input}
                        onChangeText={text => setSearch(text)}
                      />
                      <TouchableOpacity>
                        <Option name="options-sharp" size={25} color={'gray'} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
  
                {/* Now Showing */}
                <View style={{backgroundColor: commonStyle.bgPrimary, paddingTop: 30}}>
                  <Text style={styles.nowShowingTitle}>Now Showing</Text>
                  {loading ? 
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                      <Waiting width={150} height={150}/>
                      <Text style={{fontFamily: 'Poppins-Medium', color: '#fff', fontSize: 18, marginTop: 20}}>Please wait...</Text>
                    </View> : <Carousel
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
                  /> }
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
                  {loading ? 
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
                      <Waiting width={150} height={150}/>
                      <Text style={{fontFamily: 'Poppins-Medium', color: '#fff', fontSize: 18, marginTop: 20}}>Please wait...</Text>
                    </View> :  <FlatList
                    data={data?.data?.results.filter((item)=> {
                      if(search === '') {
                        return data?.data?.results
                      } else if(item.title.toLowerCase().includes(search.toLowerCase())) {
                        return data?.data?.results
                      }
                    })}
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
                            <View
                              style={{flexDirection: 'row', marginVertical: 10}}>
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
                  /> }
                 
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
      marginBottom: 30
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
  