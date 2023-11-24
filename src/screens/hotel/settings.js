import React, {useEffect} from 'react';

import {Box, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const HotelSettings = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      // headerRight: () => <Text>Right</Text>,
    //   title: 'Settings',
      // headerBackgroundContainerStyle: { backgroundColor: "#fff" },
      // headerTransparent: false,
    });
  }, [navigation]);
  return <Box>Hotel page</Box>;
};

export default HotelSettings;
