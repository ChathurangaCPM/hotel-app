import React from 'react';
import {
  Box,
  Center,
  Heading,
  VStack,
  FormControl,
  Button,
  Input,
  KeyboardAvoidingView,
} from 'native-base';
import {Platform} from 'react-native';

export default function Register() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
            Sign up to continue!
          </Heading>
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input height={10} keyboardType="email-address" fontSize={16}/>
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input height={10} type="password" fontSize={16} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Confirm Password</FormControl.Label>
              <Input height={10} type="password" fontSize={16} />
            </FormControl>
            <Button mt="2" colorScheme="indigo">
              Sign up
            </Button>
          </VStack>
        </Box>
      </Center>
    </KeyboardAvoidingView>
  );
}
