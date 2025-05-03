import {View, Text} from 'react-native';
import React from 'react';
import AsyncStorageExample from './src/components/AsyncStorageExample';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Parent from './src/components/Parent';

const App = () => {
  return (
    <GestureHandlerRootView>
      <View style={{marginTop: 40}}>
        <Text>App</Text>
        {/* <AsyncStorageExample /> */}
        <Parent />
      </View>
    </GestureHandlerRootView>
  );
};

export default App;
