import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {appColors} from '../themes/AppColors';

const Category = ({item, selectedCategory, setSelectedCategory, style}) => {
  return (
    <TouchableOpacity onPress={() => setSelectedCategory(item)}>
      <View
        style={[
          styles.textFrame,
          style,
          selectedCategory === item && {
            backgroundColor: appColors.primary,
          },
        ]}>
        <Text
          style={[
            styles.categoryText,
            selectedCategory === item && {color: appColors.white},
          ]}>
          {item}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryText: {
    fontSize: 16,
    fontWeight: '600',
    color: appColors.white,
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textFrame: {
    borderRadius: 20,
    backgroundColor: appColors.unSelectedBg,
    marginHorizontal: 10,
    marginTop: 10,
  },
});