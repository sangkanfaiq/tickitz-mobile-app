import {
  ScrollView,
} from 'react-native';
import React from 'react';
import {commonStyle} from '../../utils/commonStyle';
import Header from './components/Header';
import TicketList from './components/TicketList';

const MyTicketScreen = () => {
  return (
      <>
        <ScrollView style={{backgroundColor: commonStyle.bgPrimary, flex: 1}}>
          <Header />
          <TicketList />
        </ScrollView>
      </>
  );
};

// const styles = StyleSheet.create({
//   ticketContainer: {
//     borderLeftWidth: 2, 
//     borderStyle: 'dashed',
//     borderColor: 'gray', 
//     height: '100%', 
//     width: '20%',
//     justifyContent: 'center', 
//     alignItems: 'center', 
//     flexDirection: 'row', 
//     paddingHorizontal: 10,
//   },
//   ticketCard: {
//     flexDirection: 'row', 
//     alignItems: 'center', 
//     justifyContent: 'space-between',
//     backgroundColor: commonStyle.bgFourth,
//     borderRadius: 10,
//     paddingVertical: 10,
//     paddingLeft: 10,
//     marginTop: 20
//   },
//   imageTicket: {
//     width: 35,
//     height: 35
//   },
//   releaseDate: {
//     fontFamily: 'Poppins-Regular',
//     color: 'gray',
//     letterSpacing: 1,
//     fontSize: 12,
//     marginVertical: 2,
//   },
//   duration: {
//     fontFamily: 'Poppins-Regular',
//     color: 'gray',
//     fontSize: 12,
//     marginVertical: 2,
//   },
//   textGenre: {
//     fontFamily: 'Poppins-Regular',
//     color: 'gray',
//     fontSize: 12,
//     marginVertical: 2,
//   },
//   ratingText: {
//     fontFamily: 'Nunito-Medium',
//     color: 'darkorange',
//     fontSize: 9,
//     marginLeft: 10,
//   },
//   title: {
//     fontFamily: 'Poppins-Medium',
//     color: '#fff',
//     fontSize: 14
//   },
//   imageSize: {
//     width: 120,
//     height: 120,
//     borderRadius: 10
//   },
//   noDataTxt: {
//     fontFamily: 'Poppins-Medium',
//     color: '#fff',
//     fontSize: 16,
//     marginTop: 20,
//     textAlign: 'center',
//   },
//   noDataContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '80%',
//   },
//   headerContainer: {
//     height: 70,
//     backgroundColor: commonStyle.bgPrimary,
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row',
//   },
//   headerText: {
//     fontFamily: 'Poppins-SemiBold',
//     fontSize: 18,
//     color: 'lightgray',
//   },
// });

export default MyTicketScreen;
