import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import MainScreen from '../screens/Main';
import MovieDetails from '../screens/MovieDetails';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import PaymentScreen from '../screens/Payment';
import LoginScreen from '../screens/Auth/LoginScreen';
import AboutApp from '../screens/AboutApp';
import NotificationScreen from '../screens/Notification';
import AccountScreen from '../screens/Account';
import DateAndTime from '../screens/Booking/DateAndTime';
import SelectSeats from '../screens/Booking/SelectSeats';
import ChangePassScreen from '../screens/Auth/ChangePassword';

const Stack = createNativeStackNavigator();
const globalScreenOptions = {
  headerStyle: {
    backgroundColor: '#111',
    height: 70,
  },
  headerTitleStyle: {color: '#fff'},
  headerTintColor: '#fff',
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
};

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={globalScreenOptions} initialRouteName={MainScreen}>
      <Stack.Screen name="MainScreen" component={MainScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Home" component={TabNavigator} options={{headerShown: false}} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} options={{headerShown: false, title: 'Movie Details'}} />
      <Stack.Screen name="DateAndTime" component={DateAndTime} options={{headerShown: false}} />
      <Stack.Screen name="SelectSeats" component={SelectSeats} options={{headerShown: false}} />
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}} />
      <Stack.Screen name="Account" component={AccountScreen} options={{headerShown: false}} />
      <Stack.Screen name="ChangePassword" component={ChangePassScreen} options={{headerShown: false, title: 'Reset Password'}} />
      <Stack.Screen name="Payment" component={PaymentScreen} options={{headerShown: false}} />
      <Stack.Screen name="AboutApp" component={AboutApp} options={{headerShown: false}} />
      <Stack.Screen name="Notification" component={NotificationScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default AppStack;
