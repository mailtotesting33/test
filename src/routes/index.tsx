import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import HomeStack from './stacks/HomeStack';
import AuthStack from './stacks/AuthStack';

const Routes = () => {
  const {user} = useSelector((state: any) => state.root.user);
  return user ? <HomeStack /> : <AuthStack />;
};
export default Routes;
