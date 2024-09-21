import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {TrashIcon} from 'react-native-heroicons/outline';
import {appColors} from '../themes/AppColors';

const CartCard = ({item, deleteItem}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.coverImage} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>$ {item.price}</Text>
        <View style={styles.circleSizeContainer}>
          <View style={[styles.circle, {backgroundColor: item.color}]} />
          <View style={styles.sizeCircle}>
            <Text style={styles.sizeText}>{item.size}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => deleteItem(item)}>
        <TrashIcon color={appColors.like} size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flexDirection: 'row',
  },
  coverImage: {
    height: 125,
    width: 125,
    borderRadius: 20,
    objectFit : "contain"
  },
  cardContent: {
    flex: 1,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: appColors.title,
  },
  price: {
    color: appColors.price,
    fontWeight: '500',
    marginVertical: 10,
    fontSize: 17,
  },
  circle: {
    height: 32,
    width: 32,
    borderRadius: 16,
  },
  circleSizeContainer: {
    flexDirection: 'row',
  },
  sizeCircle: {
    backgroundColor: appColors.white,
    height: 32,
    width: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  sizeText: {
    fontSize: 20,
    fontWeight: '600',
    color: appColors.title,
  },
});
