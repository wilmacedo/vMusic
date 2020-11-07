import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';

const Stack = createNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initalRouteName={'Home'}
        screenOption={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;