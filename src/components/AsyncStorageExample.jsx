import {View, Text, Button, Alert} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageExample = () => {
  const [username, setUsername] = useState('');
  const [storedUsername, setStoredUsername] = useState('');
  const saveUsername = async () => {
    await AsyncStorage.setItem('username', username);
    setUsername('');
    Alert.alert('Username Saved');
  };

  const getUsername = async () => {
    const savedUsername = await AsyncStorage.getItem('username');
    if (savedUsername) {
      setStoredUsername(saveUsername);
      Alert.alert('Getting Username Successfully');
    } else {
      Alert.alert('Username not found');
    }
  };
  return (
    <View>
      <Text>AsyncStorageExample</Text>
      <TextInput
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
      />
      <Button title="Save Username" />
      <Button title="Get Username" />
      <Button title="Remove Username" />
      <Text>Stored Username: </Text>
    </View>
  );
};

export default AsyncStorageExample;
