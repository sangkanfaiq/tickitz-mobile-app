import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {commonStyle} from '../../../utils/commonStyle';
import {ActionMovies, HorrorMovies, upcomingMovies} from '../../../model/data';
import Star from 'react-native-vector-icons/FontAwesome'
import HalfStar from 'react-native-vector-icons/FontAwesome'
import { color } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const MovieList = () => {
  const navigation = useNavigation()

  return (
    <View style={{marginLeft: 30, marginTop: 30}}>
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
      </ScrollView>

      {HorrorMovies.map((item, index) => {
        return (
            <TouchableOpacity onPress={()=> navigation.navigate('MovieDetails', item)} key={index}>
                <View style={{flexDirection: 'row', marginBottom: 30}} >
                    <View style={styles.imageBox}>
                        <Image source={item.cover} style={styles.imageSize} />
                    </View>
                    <View style={{marginLeft: 20, marginTop: 10}}>
                        <Text style={styles.titleText}>{item.title}</Text>
                        <View style={{flexDirection: 'row', marginVertical: 10}}>
                            <Star name='star' size={16} color={'darkorange'} style={{marginRight: 5}}/>
                            <Star name='star' size={16} color={'darkorange'} style={{marginRight: 5}}/>
                            <Star name='star' size={16} color={'darkorange'} style={{marginRight: 5}}/>
                            <Star name='star' size={16} color={'darkorange'} style={{marginRight: 5}}/>
                            <HalfStar name='star-half-empty' size={16} color={'darkorange'} style={{marginRight: 10}}/>
                            <Text style={styles.ratingText}>{item.rating}</Text>
                        </View>
                        <Text style={{fontFamily: 'Poppins-Medium', color: 'gray', marginBottom: 10}}>{item.duration}</Text>
                        <Text style={{fontFamily: 'Poppins-Medium', color: 'gray', marginBottom: 10}}>{item.releaseYear}</Text>
                        <Text style={styles.genre}>{item.genre}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
    genre: {
        fontFamily: 'Nunito-Medium',
        color: 'gray',
        fontSize: 16
    },
    ratingText: {
        fontFamily: 'Nunito-Medium', 
        paddingHorizontal: 10, 
        backgroundColor: 'darkorange', 
        color: '#000', 
        fontSize: 14,
        borderRadius: 30,
        marginLeft: 5
    },
  titleText: {
    fontFamily: 'Poppins-Medium',
    color: '#fff',
    fontSize: 18,
  },
  imageBox: {
    width: 150,
    height: 180,
    borderRadius: 15
  },
  imageSize: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    borderRadius: 15
  },
  categoriesCard: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: commonStyle.bgSecondary,
    borderRadius: 5,
    marginRight: 10,
  },
  active: {
    backgroundColor: commonStyle.bgThird,
    color: '#fff',
  },
  categoriesText: {
    fontFamily: 'Poppins-SemiBold',
    color: 'gray',
  },
});

export default MovieList;
