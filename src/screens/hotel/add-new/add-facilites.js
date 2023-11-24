/* eslint-disable react/no-unstable-nested-components */
import React, {memo} from 'react';
import {
  Box,
  HStack,
  Text,
  VStack,
  Flex,
  Button,
  Heading,
  Switch,
} from 'native-base';

import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import HotelFacilitiesList from '../../../utils/hotel-facilites.json';

const AddFacilites = () => {
  const navigation = useNavigation();

  const FacilityCategory = memo(({category, facilities}) => (
    <Box mb={4}>
      <Heading fontSize="md" mb={2}>
        {category}
      </Heading>
      {facilities.map((facility, index) => (
        <HStack
          key={index}
          alignItems="center"
          space={4}
          justifyContent="space-between">
          <Text>{facility.name}</Text>
          <Switch colorScheme="primary" size="sm" />
        </HStack>
      ))}
    </Box>
  ));

  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: '#fff'}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView>
        <ScrollView>
          <Box p={5}>
            <VStack space="5">
              {Object.entries(HotelFacilitiesList).map(
                ([category, facilities], index) => (
                  <FacilityCategory
                    key={index}
                    category={category}
                    facilities={facilities}
                  />
                ),
              )}
            </VStack>
            <Flex
              direction="row"
              alignItems="flex-end"
              justifyContent="flex-end">
              <Button
                colorScheme="primary"
                variant="solid"
                flex={1}
                onPress={() => navigation.push('AddHotelImages')}>
                Continue
              </Button>
            </Flex>
          </Box>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default AddFacilites;
