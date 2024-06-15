import { View, Text } from 'react-native'
import React from 'react'

import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTabs from './src/BottomTabs';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'}/>
        <NavigationContainer>
          <BottomTabs/>
        </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App