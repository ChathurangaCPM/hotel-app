import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HotelPage from '../screens/hotel';
import MainWall from '../screens/wall/main-wall';

const Tab = createBottomTabNavigator();

const HotelTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="MainWall">
      {/* Onboarding related routes */}
      <Tab.Screen
        name="MainWall"
        component={MainWall}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Page"
        component={HotelPage}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default HotelTabNavigator;
