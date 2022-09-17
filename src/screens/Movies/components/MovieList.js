import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect} from 'react';
import {commonStyle} from '../../../utils/commonStyle';
import Star from 'react-native-vector-icons/FontAwesome';
import HalfStar from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {GetMovies} from '../../../redux/actions/Movies';
import moment from 'moment';
import Waiting from '../../../assets/waiting.svg';
import SearchIcon from 'react-native-vector-icons/Feather';
import Option from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';

const MovieList = () => {
  const navigation = useNavigation();
  const {data, loading} = useSelector(state => state.movies);
  const dispatch = useDispatch(),
  [params,setParams] = useState({
    title: '',
    genre: ''
  })
  const [selectGenre, setSelectGenre] = useState('')
  const onSelectGenre = genre => {
    if (setSelectGenre === genre) {
      setSelectGenre('');
    } else {
      setSelectGenre(genre);
    }
  };
  // console.log(params,'asdsadasdsad')
  // const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(GetMovies(params));
  }, [params.title, params.genre]);

  return (
    <View style={{marginLeft: 20, marginTop: 30}}>
      {/* Genre list */}
      <ScrollView
        style={{flexDirection: 'row'}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={selectGenre === '' ? styles.categoriesCardSelected : styles.categoriesCard} onPress={()=>{setParams({title:'',genre:''}), onSelectGenre('')}}>
          <Text style={selectGenre === '' ? styles.categoriesTextSelected : styles.categoriesText}>Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity style={selectGenre === 'Horror' ? styles.categoriesCardSelected : styles.categoriesCard} onPress={()=>{setParams({title:'',genre:'Horror'}), onSelectGenre('Horror')}}>
          <Text style={selectGenre === 'Horror' ? styles.categoriesTextSelected : styles.categoriesText}>Horror</Text>
        </TouchableOpacity>
        <TouchableOpacity style={selectGenre === 'Action' ? styles.categoriesCardSelected : styles.categoriesCard} onPress={()=>{setParams({title:'',genre:'Action'}), onSelectGenre('Action')}}>
          <Text style={selectGenre === 'Action' ? styles.categoriesTextSelected : styles.categoriesText}>Action</Text>
        </TouchableOpacity>
        <TouchableOpacity style={selectGenre === 'Adventure' ? styles.categoriesCardSelected : styles.categoriesCard} onPress={()=>{setParams({title:'',genre:'Adventure'}), onSelectGenre('Adventure')}}>
          <Text style={selectGenre === 'Adventure' ? styles.categoriesTextSelected : styles.categoriesText}>Adventure</Text>
        </TouchableOpacity>
        <TouchableOpacity style={selectGenre === 'Fantasy' ? styles.categoriesCardSelected : styles.categoriesCard} onPress={()=>{setParams({title:'',genre:'Fantasy'}), onSelectGenre('Fantasy')}}>
          <Text style={selectGenre === 'Fantasy' ? styles.categoriesTextSelected : styles.categoriesText}>Fantasy</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Search */}
      <View
        style={{
          backgroundColor: commonStyle.bgPrimary,
          paddingTop: 10,
        }}>
        <View style={styles.searchBar}>
          <SearchIcon name="search" size={18} color={'gray'} />
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
              onChangeText={text => setParams({...params,title:text})}
            />
            <TouchableOpacity>
              <Option name="options-sharp" size={18} color={'gray'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {loading ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            height: 600,
          }}>
          <Waiting width={150} height={150} />
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              color: '#fff',
              fontSize: 18,
              marginTop: 20,
            }}>
            Please wait...
          </Text>
        </View>
      ) : (
        <FlatList
          data={data.data?.results}
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
                        uri: `https://tickitz-backend-1st.herokuapp.com/uploads/${item.cover}`,
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
                      <Text
                        style={styles.ratingText}>{`( ${item.rating} )`}</Text>
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
                        color: 'gray',
                        letterSpacing: 1,
                        fontSize: 12,
                        marginVertical: 3,
                      }}>
                      {moment(item.releaseDate).format('YYYY')}
                    </Text>
                    <Text style={styles.text}>{item.genre}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    marginVertical: 30,
    marginLeft: 40,
    marginRight: 50,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: commonStyle.bgFourth,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    color: 'gray',
    fontFamily: 'Poppins-Regular',
    paddingVertical: 10,
    letterSpacing: 0.5,
    width: '90%',
    fontSize: 12,
    color: '#fff',
    paddingLeft: 15,
  },
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
    resizeMode: 'cover',
    borderRadius: 10,
  },
  categoriesCard: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    backgroundColor: commonStyle.bgFourth,
    borderRadius: 5,
    marginRight: 10,
  },
  categoriesCardSelected: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    backgroundColor: commonStyle.bgThird,
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
  categoriesTextSelected: {
    fontFamily: 'Poppins-Medium',
    color: '#fff',
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
