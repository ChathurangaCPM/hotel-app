import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HotelTabNavigator from './hotel-tab-navigator';

const Stack = createStackNavigator();

const HotelStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HotelTabNavigator">
      {/* Onboarding related routes */}
      <Stack.Screen
        name="HotelTabNavigator"
        component={HotelTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HotelSettings"
        component={HotelTabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HotelStackNavigator;
