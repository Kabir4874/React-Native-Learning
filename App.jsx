import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import './global.css';
import MyLogin from './src/components/MyLogin';

const App = () => {
  return (
    <SafeAreaView>
      <GestureHandlerRootView>
        <View style={{marginTop: 40}}>
          <Text className="text-indigo-300 font-bold text-3xl">App</Text>
          {/* <AsyncStorageExample /> */}
          {/* <Parent /> */}
          <MyLogin />
        </View>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default App;
