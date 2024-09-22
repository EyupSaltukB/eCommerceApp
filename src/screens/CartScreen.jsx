import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useContext } from 'react';
import Header from '../components/Header';
import CartCard from '../components/CartCard';
import {appColors} from '../themes/AppColors';
import { CartContext } from '../context/CartContext';

const CartScreen = () => {
  const {carts, totalPrice, deleteItem} = useContext(CartContext);
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header isCart={true} />
      </View>
      <FlatList
      data={carts}
        renderItem={({item}) => <CartCard item={item} deleteItem={deleteItem}/>}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom : 100
        }}
        ListFooterComponent={
          <>
            <View style={styles.bottomContentContainer}>
              <View style={styles.flexRowContainer}>
                <Text style={styles.titleText}>Total:</Text>
                <Text style={styles.priceText}>$ {totalPrice}</Text>
              </View>
              <View style={styles.flexRowContainer}>
                <Text style={styles.titleText}>Shpping: (free)</Text>
                <Text style={styles.priceText}>$ 0.00</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.flexRowContainer}>
                <Text style={styles.titleText}>Grand Total:</Text>
                <Text style={[styles.priceText, styles.grandPriceText]}>$ {totalPrice}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Checkout</Text>
            </TouchableOpacity>
          </>
        }
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  header: {},
  flexRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  bottomContentContainer: {
    marginHorizontal: 10,
    marginTop: 30,
  },
  titleText: {
    fontSize: 18,
    color: appColors.title,
    fontWeight: '500',
  },
  priceText: {
    fontSize: 18,
    color: appColors.price,
    fontWeight: '600',
  },
  divider: {
    borderWidth: 1,
    borderColor: appColors.title,
    marginTop: 10,
    marginBottom: 5,
  },
  grandPriceText: {
    color: appColors.title,
    fontWeight: '700',
  },
  button: {
    backgroundColor: appColors.like,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 24,
    color: appColors.white,
    fontWeight: '700',
  },
});
