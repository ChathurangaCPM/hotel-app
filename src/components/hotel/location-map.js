import React from 'react';
import {Box, Heading, Button} from 'native-base';
import {View} from 'react-native';

export default function LocationMap() {
  return (
    <View>
      <Heading fontSize="md" mb={3}>
        Location of the hotel
      </Heading>
      <Box borderRadius="10" p={2} h={100} background="secondary.100" mb={3}>
        Map will be here
      </Box>
      <Button colorScheme="primary" variant="outline">
        Select current location
      </Button>
    </View>
  );
}
