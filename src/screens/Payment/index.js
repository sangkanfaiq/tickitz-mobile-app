import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import {paymentMethod} from '../../model/data';
import {useState} from 'react';

const PaymentScreen = () => {
  const [selectPayment, setSelectPayment] = useState('');

  const onSelect = item => {
    if (selectPayment === item) {
      setSelectPayment('');
    } else {
      setSelectPayment(item);
    }
  };

  return (
    <ScrollView style={{backgroundColor: '#f0f0f0'}}>
      <View style={styles.totalPaymentCard}>
        <Text style={styles.paymentText}>Total Payment</Text>
        <Text style={styles.paymentText}>Rp 40.000</Text>
      </View>
      <View style={{marginTop: 50, marginHorizontal: 10}}>
        <Text
          style={{fontFamily: 'Poppins-Medium', color: '#222', fontSize: 18}}>
          Payment Method
        </Text>
        <View style={styles.paymentMethodBox}>
          {paymentMethod.map((item, index) => {
            return (
              <Pressable
                style={
                  selectPayment === item
                    ? styles.borderSelect
                    : styles.borderDefault
                }
                onPress={()=> onSelect(item)}
                key={index}>
                <Image source={item.image} style={styles.imageSize} />
              </Pressable>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  borderDefault: {
    width: 120,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 20,
    padding: 15,
    borderColor: 'gray',
  },
  borderSelect: {
    width: 120,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 20,
    padding: 15,
    borderColor: 'darkorange',
    backgroundColor: 'darkorange'
  },
  totalPaymentCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 50,
    height: 70,
    backgroundColor: 'gray',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  paymentText: {
    fontFamily: 'Poppins-Medium',
    color: '#222',
    fontSize: 16,
  },
  paymentMethodBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    paddingVertical: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  imageSize: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default PaymentScreen;
