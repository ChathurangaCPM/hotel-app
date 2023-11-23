import React from 'react';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import Register from '../screens/auth/register';
import AddNewHotel from '../hotel/add-new-hotel';
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="AddNewHotel">
      {/* Onboarding related routes */}
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddNewHotel"
        component={AddNewHotel}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
