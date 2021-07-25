import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import Internal from './src/screens/internal/index';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/home/index';

const Stack = createStackNavigator();

const theburger = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'#232227'} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Internal"
            component={Internal}
            options={{
              headerTitle: '',
              headerStyle: {backgroundColor: '#232227', elevation: 0},
              headerTintColor: '#fff',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default theburger;
