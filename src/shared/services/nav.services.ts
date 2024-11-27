import React from 'react';
import { CommonActions, StackActions } from '@react-navigation/native';

export const navigationRef: any = React.createRef();

export const navigate = (name: string, params?: any) => {
  navigationRef.current?.navigate(name, params);
};

export const push = (name: string, params?: any) => {
  navigationRef.current?.push(name, params);
};

export const replace = (name: string, params?: any) => {
  navigationRef.current?.dispatch(
    StackActions.replace(name, params)
  );
};

export const GoBack = () => {
  navigationRef.current?.goBack();
};

export const canGoBack = () => {
  return navigationRef.current?.canGoBack();
};