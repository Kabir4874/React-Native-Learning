import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import './gesture-handler';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
