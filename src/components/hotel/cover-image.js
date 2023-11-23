import React from 'react';
import {
  Box,
  Pressable,
  VStack,
  AspectRatio,
  Center,
  Heading,
  Text,
} from 'native-base';
import {Image} from 'react-native';

export default function CoverImage() {
  return (
    <Pressable>
      {/* <AspectRatio
        ratio={{
          base: 6 / 4,
        }}
        height={{
          base: 280,
        }}>
        <Image
          resizeMode="cover"
          source={{
            uri: 'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
          }}
          alt="Picture of a Flower"
        />
      </AspectRatio> */}
      <Box
        h={280}
        backgroundColor="primary.100"
        justifyContent="center"
        alignItems="center">
        <Center>
          <Heading mb={1}>Select a Cover</Heading>
          <Text color="muted.500" fontSize="12">
            This will be a main cover image for hotel page
          </Text>
        </Center>
      </Box>
    </Pressable>
  );
}
