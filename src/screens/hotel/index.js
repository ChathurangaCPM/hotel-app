import React, { useEffect } from 'react';

import { Box, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const HotelPage = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => <Text>Right</Text>,
      title: "Hotel"
      // headerBackgroundContainerStyle: { backgroundColor: "#fff" },
      // headerTransparent: false,
    });
  }, [navigation]);
  return <Box>Hotel page</Box>;
};

export default HotelPage;
