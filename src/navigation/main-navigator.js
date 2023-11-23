import React from 'react';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import Register from '../screens/auth/register';
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Register">
      {/* Onboarding related routes */}
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
