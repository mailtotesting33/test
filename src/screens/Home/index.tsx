import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Search from '../../shared/components/Search';
import UserList from '../../shared/components/UserList';
import { useDispatch } from 'react-redux';
import { getUsersThunk } from '../../shared/redux/thunk/feed';
import UserSkeleton from '../../shared/components/UserSkeleton';

const HomeScreen = () => {
  const dispatch:any = useDispatch()
  useEffect(()=>{
    dispatch(getUsersThunk({page: 1, search: "a"}));
  },[])
  return (
    <View style={[styles.container]}>
    <Search />
    <UserList />
    {/* <UserSkeleton /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'white',
  },
});

export default React.memo(HomeScreen);
