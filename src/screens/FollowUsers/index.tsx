import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  getUserfollowerThunk,
  getUserfollowingThunk,
} from '../../shared/redux/thunk/feed';
import {
  clearFollower,
  clearFollowing,
} from '../../shared/redux/reducers/genralReducer';
import {COLORS} from '../../shared/theme/colors';
import Header from '../../shared/components/Header';
import UserList from '../../shared/components/UserList';

const FollowUsers = ({route}: any) => {
  const dispatch: any = useDispatch();
  useEffect(() => {
    if (route.params?.from == 'Followers') {
      dispatch(
        getUserfollowerThunk({username: route.params?.item?.login, page: 1}),
      );
    } else if (route.params?.from == 'Following') {
      dispatch(
        getUserfollowingThunk({username: route.params?.item?.login, page: 1}),
      );
    }
    return () => {
      dispatch(clearFollower([]));
      dispatch(clearFollowing([]));
    };
  }, []);
  return (
    <View style={styles.container}>
      <Header  heading={route.params?.from} />
      <UserList
        username={route.params?.item?.login}
        type={route.params?.from}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
});
export default FollowUsers;
