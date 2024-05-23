import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainTabNavigator} from './MainTabNavigator';

type MainStackParamList = {
  Tabs: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainStackNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Tabs" component={MainTabNavigator} />
  </Stack.Navigator>
);
