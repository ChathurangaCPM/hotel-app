import React from 'react';
// import MainNavigator from './navigation/main-navigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MainNavigationContainer from './src/navigation/navigation-container';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <MainNavigationContainer />
    </GestureHandlerRootView>
  );
};

export default App;
