import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DummyScreen from '../screens/DummyScreen';
import HomeScreen from '../screens/HomeScreen';
import { Icon, Text } from 'react-native-paper';
import { IC_DOWNLOADING, IC_HOME, IC_MORE, IC_PIE_GRAPH, IC_WALLET } from '../assets';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../utils/responsiveScreens';

type MainTabParamList = {
  Home: undefined;
  Portfolio: undefined;
  Invest: undefined;
  Wallet: undefined;
  More: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainTabNavigator = () => (
  <Tab.Navigator 
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let menuIcon;

        switch (route.name) {
          case 'Home':
            menuIcon = IC_HOME;
            break;
          case 'Portfolio':
            menuIcon = IC_PIE_GRAPH;
            break;
          case 'Invest':
            menuIcon = IC_DOWNLOADING;
            break;
          case 'Wallet':
            menuIcon = IC_WALLET;
            break;
          case 'More':
            menuIcon = IC_MORE;
            
          default:
            menuIcon = IC_HOME;
        }

        return (
          <Icon
            source={menuIcon}
            color={focused ? '#2C8BFD' : '#787381'}
            size={wp('5%')}
          />
        );
      },
      tabBarActiveTintColor: '#2C8BFD',
      tabBarInactiveTintColor: '#787381',
      tabBarLabel: ({ focused }) => {
        let labelColor = focused ? '#2C8BFD' : '#787381';
        let label;
        switch (route.name) {
          case 'Home':
            label = 'Home';
            break;
          case 'Portfolio':
            label = 'Portfolio';
            break;
          case 'Invest':
            label = 'Invest';
            break;
          case 'Wallet':
            label = 'Wallet';
            break;
          case 'More':
            label = 'More';
            break;
          default:
            label = 'Tab';
            break;
        }

        return (
          <Text style={{ color: labelColor, fontWeight: '500', fontSize: wp('3%'), paddingVertical: 4 }}>
            {label}
          </Text>
        );
      },
    })}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Portfolio" component={DummyScreen} />
    <Tab.Screen name="Invest" component={DummyScreen} />
    <Tab.Screen name="Wallet" component={DummyScreen} />
    <Tab.Screen name="More" component={DummyScreen} />
  </Tab.Navigator>
);
