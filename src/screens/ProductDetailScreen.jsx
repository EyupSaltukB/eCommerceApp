import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useContext, useState} from 'react';
import Header from '../components/Header';
import {appColors} from '../themes/AppColors';
import {useNavigation, useRoute} from '@react-navigation/native';
import {CartContext} from '../context/CartContext';


const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const ProductDetailScreen = () => {
  const route = useRoute();
  // console.log(route.params.item)
  const item = route.params.item;
  const {addToCart} = useContext(CartContext);
  const navigation = useNavigation();

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const colorsArray = [
    '#000000',
    '#758694',
    '#001F3F',
    '#12372A',
    '#603F26',
    '#FFFFFF',
  ];

  const handleAddToCart = (item) => {
    item.size = selectedSize;
    item.color = selectedColor;
    addToCart(item);
    navigation.navigate('Cart');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View style={styles.headerContainer}>
          <Header isCart={false} />
        </View>
        <Image style={styles.coverImage} source={{uri: item.image}} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={[styles.title, styles.price]}>$ {item.price}</Text>
        </View>
        {/* size cont. */}
        <Text style={[styles.title, styles.sizeText]}>Size</Text>
        <View style={styles.sizeContainer}>
          {sizes.map((size, index) => {
            return (
              <TouchableOpacity
              key={index}
                onPress={() => setSelectedSize(size)}
                style={styles.sizeValueContainer}>
                <Text
                  style={[
                    styles.sizeValue,
                    selectedSize === size && {color: appColors.like},
                  ]}>
                  {size}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Text style={[styles.title, styles.colorText]}>Colors</Text>
        <View style={styles.colorContainer}>
          {colorsArray.map((color, index) => {
            return (
              <TouchableOpacity
              key={index}
                onPress={() => setSelectedColor(color)}
                style={[
                  styles.circleBorder,
                  selectedColor === color && {
                    borderColor: color,
                    borderWidth: 2,
                  },
                ]}>
                <View style={[styles.circle, {backgroundColor: color}]}></View>
              </TouchableOpacity>
            );
          })}
        </View>
        {/* buttonContainer */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleAddToCart(item);
          }}
          >
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
  },
  coverImage: {
    width: '100%',
    height: 450,
    objectFit: 'contain',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    color: appColors.title,
    fontWeight: '500',
  },
  price: {
    color: appColors.price,
  },
  sizeContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  sizeText: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  sizeValue: {
    fontSize: 18,
    fontWeight: '600',
  },
  sizeValueContainer: {
    height: 35,
    width: 35,
    borderRadius: 18,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 7,
  },
  colorText: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  circle: {
    height: 35,
    width: 35,
    borderRadius: 20,
  },
  colorContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  circleBorder: {
    borderRadius: 24,
    height: 48,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: appColors.primary,
    padding: 15,
    margin: 10,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: appColors.white,
    textAlign: 'center',
  },
});
