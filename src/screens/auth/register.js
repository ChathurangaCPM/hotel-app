import React from 'react';
import {
  Box,
  Center,
  Heading,
  VStack,
  FormControl,
  Button,
  Input,
  HStack,
  Flex,
  Text,
} from 'native-base';
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
} from 'react-native';

const {width} = Dimensions.get('screen');

export default function Register() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <Center w="100%">
            <Box safeArea p="2" w="90%" py="8">
              <Heading
                size="lg"
                color="coolGray.800"
                _dark={{
                  color: 'warmGray.50',
                }}
                fontWeight="semibold">
                Welcome
              </Heading>
              <Heading
                mt="1"
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}
                fontWeight="medium"
                size="xs">
                Create an Admin Account
              </Heading>

              <Text fontSize="xs" color="muted.600" mt={4}>
                The admin account can access all hotel information and can
                update all data related to hotel.
              </Text>

              <VStack space={3} mt="5">
                <HStack space={3}>
                  <FormControl flex={1}>
                    <FormControl.Label>First name</FormControl.Label>
                    <Input height={10} fontSize={16} size="lg" />
                  </FormControl>
                  <FormControl flex={1}>
                    <FormControl.Label>Last name</FormControl.Label>
                    <Input height={10} fontSize={16} />
                  </FormControl>
                </HStack>

                <FormControl w="100%">
                  <FormControl.Label>Email</FormControl.Label>
                  <Input
                    height={10}
                    keyboardType="email-address"
                    fontSize={16}
                  />
                </FormControl>
                <FormControl w="100%">
                  <FormControl.Label>Contact number</FormControl.Label>
                  <Input height={10} keyboardType="phone-pad" fontSize={16} />
                </FormControl>
                <FormControl>
                  <FormControl.Label>Password</FormControl.Label>
                  <Input height={10} type="password" fontSize={16} />
                </FormControl>
                <FormControl>
                  <FormControl.Label>Confirm Password</FormControl.Label>
                  <Input height={10} type="password" fontSize={16} />
                </FormControl>
                <Button
                  mt="2"
                  colorScheme="indigo"
                  isLoading
                  isLoadingText="Creating...">
                  Create a Primary Account
                </Button>
              </VStack>
            </Box>
          </Center>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
