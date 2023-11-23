import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MainNavigationContainer from './src/navigation/navigation-container';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NativeBaseProvider>
        <MainNavigationContainer />
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
};

export default App;
