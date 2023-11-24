import React, {useRef, useState} from 'react';
import {Box, Flex, Heading, Text, Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const HotelCreationCompleted = () => {
  const navigation = useNavigation();
  return (
    <>
      <Flex
        flex={1}
        backgroundColor="#fff"
        alignItems="center"
        justifyContent="center"
        p={5}>
        <Heading mb={8}>Hotel Page Created</Heading>
        <Text color="muted.500" fontSize="sm" textAlign="center" mb={8}>
          Your hotel page has been successfully created. Please press the button
          below to navigate to the page, or you will be redirected in 10
          seconds.
        </Text>
        <Button
          colorScheme="primary"
          onPress={() => navigation.push('HotelPage')}>
          Go to Page
        </Button>
      </Flex>
    </>
  );
};

export default HotelCreationCompleted;
