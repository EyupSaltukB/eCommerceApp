import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {appColors} from '../themes/AppColors';
import {HeartIcon} from 'react-native-heroicons/solid'; // Solid versiyon
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({item, handleLiked}) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails", {item})} style={styles.container}>
      <Image
        source={{uri : item.image}}
        style={styles.coverImage}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>$ {item.price}</Text>
      </View>
      <TouchableOpacity
      onPress={() => {
        handleLiked(item);
      }}
      style={styles.likeContainer}>
        {item?.isLiked ? (
            <HeartIcon color={appColors.like} />
            ) : (
                <HeartIcon color={appColors.cardBorder} />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
    marginTop: 10,
    alignItems: 'center',
    paddingBottom: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: appColors.cardBorder,
    position: 'relative',
  },
  coverImage: {
    height: 255,
    width: '90%',
    borderRadius: 20,
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    color: appColors.title,
    fontWeight: '600',
  },
  price: {
    fontSize: 20,
    color: appColors.price,
    fontWeight: '600',
  },
  content: {
    paddingHorizontal: 10,
  },
  likeContainer: {
    height: 34,
    width: 34,
    backgroundColor: appColors.white,
    borderWidth: 1,
    borderColor: appColors.cardBorder,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    position: 'absolute',
    top: 15,
    right: 15,
  },
});
