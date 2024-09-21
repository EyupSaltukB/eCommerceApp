import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import {appColors} from '../themes/AppColors';
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';
import data from "../data/data.json";

const categories = ['Trending Now', 'All', 'New', 'Men', 'Women'];

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState(data.products);


  const handleLiked = (item) => {
    const newProducts = products.map((prod) => {
      if(prod.id === item.id){
        return {
          ...prod,
          isLiked : true,
        };
      }
      return prod;
    });
    setProducts(newProducts);
  }



  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.fashionText}>
        Choose your style, follow the fashion!
      </Text>
      {/* <Category /> */}
      {/* product list */}
      <FlatList
        data={products}
        renderItem={({item, index}) => ( 
          <ProductCard item={item} handleLiked={handleLiked} />)
      }
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingBottom: 175
        }}
        ListHeaderComponent={
          <>
            {/* input area */}
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Search for anything"
                style={styles.textInput}
              />
              <TouchableOpacity>
                <MagnifyingGlassIcon color={appColors.primary} />
              </TouchableOpacity>
            </View>
            {/* category area */}
            <FlatList
              keyExtractor={item => item}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={categories}
              renderItem={({item}) => (
                <Category
                  item={item}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              )}
            />
          </>
        }
      />
      {/* <View style={{
        flexDirection : "row",
        justifyContent : "space-between",
        gap : 10
      }}>
        <ProductCard/>
        <ProductCard/>
      </View> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  fashionText: {
    fontSize: 20,
    color: appColors.black,
    marginTop: 25,
    fontWeight: '500',
    marginBottom: 10,
  },
  inputContainer: {
    backgroundColor: appColors.white,
    height: 48,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
  },
});
