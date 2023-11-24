import React, {useState} from 'react';
import {View, Flex, Box, HStack, Button, Heading, Text} from 'native-base';
import {Dimensions, SafeAreaView, ScrollView} from 'react-native';
import ImageList from '../../../components/hotel/image-list';
import {useNavigation} from '@react-navigation/native';

const AddImages = () => {
  const navigation = useNavigation();
  const [images, setImages] = useState([
    {url: 'https://dummyimage.com/400x200/ccc/fff', title: 'Image 1'},
    {url: 'https://wallpaperaccess.com/full/317502.jpg', title: 'Image 2'},
    {url: 'https://wallpaperaccess.com/full/317503.jpg', title: 'Image 3'},
    {url: 'https://wallpaperaccess.com/full/317501.jpg', title: 'Image 1'},
    {url: 'https://wallpaperaccess.com/full/317502.jpg', title: 'Image 2'},
    {url: 'https://wallpaperaccess.com/full/317503.jpg', title: 'Image 3'},
    {url: 'https://wallpaperaccess.com/full/317501.jpg', title: 'Image 1'},
    {url: 'https://wallpaperaccess.com/full/317502.jpg', title: 'Image 2'},
    {url: 'https://wallpaperaccess.com/full/317503.jpg', title: 'Image 3'},
  ]);

  const removeImageHandler = indexToRemove => {
    console.log('indexToRemove', indexToRemove);
  };

  return (
    <View flex={1} backgroundColor="white">
      <View flex={1}>
        <ScrollView>
          <ImageList images={images} onDelete={i => removeImageHandler(i)} />
        </ScrollView>
        <Flex justifyContent="space-between" direction="column" flex={1}>
          <Box alignItems="center" justifyContent="center" p={4} flex={2}>
            <Heading fontSize="md" textAlign="center" mb={3}>
              Upload Images
            </Heading>
            <Text color="muted.500" textAlign="center" fontSize="sm">
              Upload some photos of your hotel.
            </Text>
            <Text color="muted.500" textAlign="center" fontSize="sm">
              {' '}
              This will help visitors get an idea about your hotel.
            </Text>
          </Box>
        </Flex>
      </View>
      <SafeAreaView>
        <HStack space={5} p={3}>
          <Button flex={2} variant="outline" colorScheme="primary">
            Select / Take Picture
          </Button>
          <Button
            flex={1}
            colorScheme="primary"
            onPress={() => navigation.push('HotelCreationCompleted')}>
            Complete
          </Button>
        </HStack>
      </SafeAreaView>
    </View>
  );
};

export default AddImages;
