import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Register from '../screens/auth/register';
import AddNewHotel from '../screens/hotel/add-new/add-new-hotel';
import AddFacilites from '../screens/hotel/add-new/add-facilites';
import AddImages from '../screens/hotel/add-new/add-images';
import HotelCreationCompleted from '../screens/hotel/add-new/completed';
import HotelPage from '../screens/hotel';
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
      <Stack.Screen
        name="AddNewHotel"
        component={AddNewHotel}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddHotelFacilites"
        component={AddFacilites}
        options={{
          title: 'Add Hotel Facilites',
        }}
      />
      <Stack.Screen
        name="AddHotelImages"
        component={AddImages}
        options={{
          title: 'Add Hotel Images',
        }}
      />
      <Stack.Screen
        name="HotelCreationCompleted"
        component={HotelCreationCompleted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HotelPage"
        component={HotelPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
