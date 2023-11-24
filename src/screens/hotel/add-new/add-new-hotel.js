/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Box,
  HStack,
  Center,
  Text,
  Pressable,
  Input,
  FormControl,
  VStack,
  TextArea,
  Flex,
  Button,
} from 'native-base';
import CoverImage from '../../../components/hotel/cover-image';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import LocationMap from '../../../components/hotel/location-map';
import PriceRange from '../../../components/hotel/price-range';
import {useNavigation} from '@react-navigation/native';
import HotelCategories from '../../../components/hotel/hotel-categories';

export default function AddNewHotel() {
  const navigation = useNavigation();

  const hotelCategoryHandler = (catagories) => {
    console.log('hotelCategoryHandler ===', catagories );
  }

  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: '#fff'}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView>
        <ScrollView>
          <CoverImage />
          <HStack p={5} space="3" alignItems="center">
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
          <HotelCategories onSelected={hotelCategoryHandler}/>
          <Box p={5}>
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
              {/* Price range */}
              <PriceRange />
              {/* Location */}
              <LocationMap />

              <Flex
                direction="row"
                alignItems="flex-end"
                justifyContent="flex-end">
                <Button
                  colorScheme="primary"
                  variant="solid"
                  flex={1}
                  onPress={() => navigation.push('AddHotelFacilites')}>
                  Continue
                </Button>
              </Flex>
            </VStack>
          </Box>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
