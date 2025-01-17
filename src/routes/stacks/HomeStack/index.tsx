import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import HomeScreen from '../../../screens/Home';
import { ROUTES } from '../../../shared/utils/routes';
import DetailScreen from '../../../screens/Detail';
import FollowUsers from '../../../screens/FollowUsers';

const Stack:any = createStackNavigator();

const HomeStack = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={ROUTES.HOME}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </>
  );
};

export default HomeStack;
