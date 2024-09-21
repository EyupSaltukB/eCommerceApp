import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {appColors} from '../themes/AppColors';
import {ArrowLeftIcon} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';

const Header = ({isCart}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeStack')}
          style={styles.appIconContainer}>
          {isCart ? (
            <ArrowLeftIcon color={appColors.primary} size={30} />
          ) : (
            <TouchableOpacity onPress={() => navigation.goBack("Home")}>
              <Image
                style={styles.appIcon}
                source={require('../assets/marketplace.png')}
              />
            </TouchableOpacity>
          )}
        </TouchableOpacity>
        {isCart && <Text style={styles.myCart}>My Cart</Text>}
        <Image source={require('../assets/user.png')} style={styles.user} />
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appIcon: {
    height: 28,
    width: 28,
  },
  appIconContainer: {
    backgroundColor: '#ffff',
    borderRadius: 22,
    height: 44,
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  user: {
    height: 44,
    width: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: appColors.primary,
  },
  myCart: {
    fontSize: 25,
    color: appColors.title,
  },
});
