import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {BellIcon as BellSolidIcon} from 'react-native-heroicons/solid';
import {ChatBubbleLeftIcon as ChatBubbleSolidIcon} from 'react-native-heroicons/solid';
import {appColors} from '../themes/AppColors';
import {ArrowLeftIcon} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';
import data from '../data/data.json';
/* category icons */
import {
  ShoppingCartIcon,
  ChatBubbleLeftIcon,
  TagIcon,
  StarIcon,
  UserIcon,
  HomeIcon,
  CogIcon
} from 'react-native-heroicons/solid';


const iconMap = {
  ShoppingCartIcon : ShoppingCartIcon,
  ChatBubbleLeftIcon: ChatBubbleLeftIcon,
  TagIcon: TagIcon,
  StarIcon: StarIcon,
  UserIcon: UserIcon,
  HomeIcon: HomeIcon,
  CogIcon : CogIcon
};

const AccountScreen = () => {
  const navigation = useNavigation();
  const [accountSections, setAccountSections] = useState(data.accountSections);

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingVertical: 11,
          borderBottomWidth: 1,
          borderColor: appColors.primary,
        }}>
        <View style={styles.leftHeadContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeftIcon color={appColors.primary} size={30} />
          </TouchableOpacity>
          <Image source={require('../assets/userpp.png')} style={styles.user} />
          <Text
            style={{fontSize: 20, color: appColors.title, fontWeight: '500'}}>
            Elon Musk
          </Text>
        </View>
        <View style={styles.rightHeadContainer}>
          <BellSolidIcon color={appColors.unSelected} size={30} />
          <ChatBubbleSolidIcon color={appColors.unSelected} size={30} />
          <UserIcon color={appColors.unSelected} size={30}/>
        </View>
      </View>
      <FlatList 
      contentContainerStyle={{
        paddingBottom : 100
      }}
        data={accountSections}
        renderItem={({item}) => {
          const IconComponent = iconMap[item.icon]
          return (
            <TouchableOpacity>
              <View style={styles.container}>
              <IconComponent size={30} color={appColors.primary} />
              <Text style={styles.textArea}>{item.title}</Text>
            </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  leftHeadContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 15,
  },
  rightHeadContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 20,
  },
  user: {
    height: 44,
    width: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: appColors.primary,
  },
  textArea: {
    fontSize: 25,
    color: appColors.title,
  },
  container: {
    margin : 10,
    alignItems : "center",
    gap : 10,
    paddingBottom : 5,
    borderWidth :2,
    borderColor : appColors.title,
    padding : 10,
    borderRadius : 20,
    width : "auto",
    backgroundColor : appColors.accountBg
  },
});