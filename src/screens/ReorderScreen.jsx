import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import data from '../data/data.json';
import {appColors} from '../themes/AppColors';
import {ArrowLeftIcon} from 'react-native-heroicons/outline';
import Header from '../components/Header';

const ReorderScreen = ({}) => {
  const [categories, setCategories] = useState(data.categories);

  return (
    <SafeAreaView>
      <View style={{margin: 10}}>
        <View style={{justifyContent: 'center', padding: 5}}>
          <Header title={true} />
        </View>
        <FlatList
          contentContainerStyle={{
            marginTop: 10,
            paddingBottom : 150
          }}
          showsVerticalScrollIndicator={false}
          data={categories}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity>
                <Image source={{uri: item.image}} style={styles.coverImage} />
                <Text style={styles.text}>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: '500',
    margin: 20,
    borderRadius: 10,
    paddingVertical: '4%',
    paddingHorizontal: 15,
    position: 'absolute',
  },
  coverImage: {
    height: 110,
    borderRadius: 20,
    margin: 5,
    objectFit: 'cover',
    borderWidth: 2,
    borderColor: appColors.title,
    position: 'relative',
  },
});

export default ReorderScreen;
