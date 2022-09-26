import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import MoviesScreen from '../screens/Movies';
import ProfileScreen from '../screens/Profile';
import Home from 'react-native-vector-icons/Ionicons';
import Movie from 'react-native-vector-icons/MaterialCommunityIcons';
import User from 'react-native-vector-icons/Feather';
import { commonStyle } from '../utils/commonStyle';
import MyTicketScreen from '../screens/MyTickets';
import Ticket from 'react-native-vector-icons/Fontisto'

const Tab = createBottomTabNavigator();
const tabNavigatorOptions = {
  tabBarStyle: {
    backgroundColor: commonStyle.bgFourth,
    height: 70,
    paddingVertical: 5,
    borderTopWidth: 0
  },
  tabBarShowLabel: true,
}

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={tabNavigatorOptions}>
      <Tab.Screen name="HomeScreen" component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            fontSize: 10,
            fontFamily: 'Poppins-Regular',
            paddingBottom: 10,
          },
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Home name="ios-home-sharp" size={20} color={focused ? '#db1a41' : 'lightgray' }/>
          ),
          tabBarActiveTintColor: commonStyle.bgThird,
          tabBarInactiveTintColor: 'lightgray',
        }}
      />
      <Tab.Screen name="Movies" component={MoviesScreen}
        options={{
          tabBarLabel: 'Movies',
          tabBarLabelStyle: {
            fontSize: 10,
            fontFamily: 'Poppins-Regular',
            paddingBottom: 10,
          },
          headerStyle: {
            backgroundColor: commonStyle.bgPrimary,
            height: 70
          },
          headerTitleStyle: {
            fontSize: 18,
            fontFamily: 'Poppins-Regular',
            color: 'lightgray',
          },
          headerTitleAlign: 'center',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Movie name="movie-open-play" size={20} color={focused ? '#db1a41' : 'lightgray' }/>
          ),
          tabBarActiveTintColor: commonStyle.bgThird,
          tabBarInactiveTintColor: 'lightgray',
        }}
      />
      <Tab.Screen name="MyTickets" component={MyTicketScreen}
        options={{
          tabBarLabel: 'My Tickets',
          tabBarLabelStyle: {
            fontSize: 10,
            fontFamily: 'Poppins-Regular',
            paddingBottom: 10,
          },
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Ticket name="ticket" size={20} color={focused ? '#db1a41' : 'lightgray' }/>
          ),
          tabBarActiveTintColor: commonStyle.bgThird,
          tabBarInactiveTintColor: 'lightgray',
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarLabelStyle: {
            fontSize: 10,
            fontFamily: 'Poppins-Regular',
            paddingBottom: 10, 
          },
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <User name="user" size={20} color={focused ? '#db1a41' : 'lightgray' }/>
          ),
          tabBarActiveTintColor: commonStyle.bgThird,
          tabBarInactiveTintColor: 'lightgray',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
