import {View, Text} from 'react-native';
import React from 'react';
import AsyncStorageExample from './src/components/AsyncStorageExample';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView>
      <View style={{marginTop: 40}}>
        <Text>App</Text>
        {/* <AsyncStorageExample /> */}
      </View>
    </GestureHandlerRootView>
  );
};

export default App;
