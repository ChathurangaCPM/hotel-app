/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HotelPage from '../screens/hotel';
import MainWall from '../screens/wall/main-wall';
import HotelSettings from '../screens/hotel/settings';
import SingleTab from '../components/navigation/single-tab';

const Tab = createBottomTabNavigator();

const HotelTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="MainWall">
      {/* Onboarding related routes */}
      <Tab.Screen
        name="MainWall"
        component={MainWall}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <SingleTab
              focused={focused}
              icon={require('../assets/images/navIcons/home.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Page"
        component={HotelPage}
        options={{
          tabBarLabel: 'Business',
          tabBarIcon: ({focused}) => (
            <SingleTab
              focused={focused}
              icon={require('../assets/images/navIcons/page.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={HotelSettings}
        options={{
          tabBarIcon: ({focused}) => (
            <SingleTab
              focused={focused}
              icon={require('../assets/images/navIcons/settings.png')}
              label="Settings"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HotelTabNavigator;
