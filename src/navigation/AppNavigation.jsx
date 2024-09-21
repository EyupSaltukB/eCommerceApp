import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ReorderScreen from '../screens/ReorderScreen';
import CartScreen from '../screens/CartScreen';
import AccountScreen from '../screens/AccountScreen';
import {
  Bars3Icon,
  ShoppingCartIcon,
  UserIcon,
  HomeIcon,
} from 'react-native-heroicons/outline';
import {appColors} from '../themes/AppColors';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import {CartContext, CartProvider} from '../context/CartContext';
import {View, Text} from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyHomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: appColors.primary,
          }}>
          <Tab.Screen
            component={MyHomeStack}
            name="HomeStack"
            options={{
              tabBarIcon: ({size, color, focused}) => {
                return <HomeIcon size={30} color={color} />;
              },
            }}
          />
          <Tab.Screen
            component={ReorderScreen}
            name="Reorder"
            options={{
              tabBarIcon: ({size, color, focused}) => {
                return <Bars3Icon size={30} color={color} />;
              },
            }}
          />
          <Tab.Screen
            component={CartScreen}
            name="Cart"
            options={{
              tabBarIcon: ({size, color, focused}) => {
                const {carts} = useContext(CartContext);
                // console.log(carts);
                return (
                  <View>
                    <ShoppingCartIcon
                      style={{position: 'relative'}}
                      size={30}
                      color={color}
                    />
                    <View
                      style={{
                        height: 16,
                        width: 16,
                        backgroundColor: appColors.primary,
                        borderRadius: 8,
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        top: 3,
                        right: -5,
                      }}>
                      <Text
                        style={{
                          fontSize: 12,
                          color: appColors.white,
                          fontWeight: '400',
                        }}>
                        {carts?.length}
                      </Text>
                    </View>
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            component={AccountScreen}
            name="Account"
            options={{
              tabBarIcon: ({size, color, focused}) => {
                return <UserIcon size={30} color={color} />;
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default AppNavigation;
