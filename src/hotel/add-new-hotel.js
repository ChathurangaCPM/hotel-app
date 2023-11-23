import React from 'react';
import {
  Box,
  HStack,
  Center,
  Image,
  Text,
  Pressable,
  Input,
  FormControl,
  VStack,
  TextArea,
  Slider,
  Flex,
} from 'native-base';
import CoverImage from '../components/hotel/cover-image';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import LocationMap from '../components/hotel/location-map';
import PriceRange from '../components/hotel/price-range';

export default function AddNewHotel() {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <CoverImage />
        <HStack p="3" space="3" alignItems="center">
          <Pressable>
            <Box
              w={100}
              h={100}
              backgroundColor="primary.100"
              justifyContent="center"
              borderRadius={10}
              alignItems="center">
              <Center>
                <Text fontSize="sm">Logo</Text>
              </Center>
            </Box>
          </Pressable>
          <Input
            placeholder="Hotel name"
            size="2xl"
            flex={1}
            variant="underlined"
            totalLines={2}
          />
        </HStack>

        <Box p={3}>
          <VStack space="5">
            <FormControl w="100%">
              <FormControl.Label>Contact number</FormControl.Label>
              <Input
                height={10}
                keyboardType="phone-pad"
                fontSize={16}
                placeholder="0712345678"
              />
            </FormControl>
            <FormControl w="100%">
              <FormControl.Label>Address</FormControl.Label>
              <TextArea
                fontSize={16}
                placeholder="123/3 Sample Road, Kottawa"
              />
            </FormControl>
            <PriceRange />
            <LocationMap />
          </VStack>
        </Box>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
