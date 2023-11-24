import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Host} from 'react-native-portalize';
import MainStackNavigator from './main-navigator';
import HotelStackNavigator from './hotel-stack-navigator';

const MainNavigationContainer = () => {
  const isSignedIn = false;
  const [isLogin, setIsLogin] = useState(true);
  return (
    <NavigationContainer>
      <Host>
        {isSignedIn ? <HotelStackNavigator /> : <MainStackNavigator />}
      </Host>
    </NavigationContainer>
  );
};

export default MainNavigationContainer;
