import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import { ROUTES } from '../../../shared/utils/routes';
import LoginScreen from '../../../screens/Login';

const Stack:any = createStackNavigator();

const AuthStack = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={ROUTES.LOGIN}
          component={LoginScreen}
        />

      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
