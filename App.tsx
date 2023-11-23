import React from 'react';
import {NativeBaseProvider, extendTheme} from 'native-base';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MainNavigationContainer from './src/navigation/navigation-container';

const App = () => {
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: '#E3F2F9',
        100: '#C5E4F3',
        200: '#A2D4EC',
        300: '#7AC1E4',
        400: '#47A9DA',
        500: '#0088CC',
        600: '#007AB8',
        700: '#006BA1',
        800: '#005885',
        900: '#003F5E',
      },
      // Redefining only one shade, rest of the color will remain same.
      amber: {
        400: '#d97706',
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      // initialColorMode: 'dark',
    },
    components: {
      Button: {
        // Can simply pass default props to change default behaviour of components.
        baseStyle: {
          rounded: 'md',
        },
        defaultProps: {
          colorScheme: 'red',
        },
      },
      Heading: {
        // Can pass also function, giving you access theming tools
        // baseStyle: ({colorMode}) => {
        //   return {
        //     color: colorMode === 'dark' ? 'red.300' : 'blue.300',
        //     fontWeight: 'normal',
        //   };
        // },
      },
    },
  });
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NativeBaseProvider theme={theme}>
        <MainNavigationContainer />
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
};

export default App;
