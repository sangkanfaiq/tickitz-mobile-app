import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import MainScreen from '../screens/Main';
import MovieDetails from '../screens/MovieDetails';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import BookingScreen from '../screens/Booking';
import ResetPasswordScreen from '../screens/Auth/ResetPassword';
import PaymentScreen from '../screens/Payment';
import LoginScreen from '../screens/Auth/LoginScreen';
import SettingScreen from '../screens/Settings';
import BookingSeatsScreen from '../screens/BookingSeats';
import AboutApp from '../screens/AboutApp';

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
      <Stack.Screen name="Booking" component={BookingScreen} options={{headerShown: false}} />
      <Stack.Screen name="BookingSeats" component={BookingSeatsScreen} options={{headerShown: false}} />
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}} />
      <Stack.Screen name="Settings" component={SettingScreen} options={{headerShown: false}} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{headerShown: true, title: 'Reset Password'}} />
      <Stack.Screen name="Payment" component={PaymentScreen} options={{headerShown: false}} />
      <Stack.Screen name="AboutApp" component={AboutApp} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default AppStack;
