import React, {useState} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Dimensions,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getUserfollowerThunk,
  getUserfollowingThunk,
  getUsersThunk,
} from '../../redux/thunk/feed';
import UserCard from '../UserCard';
import {RF} from '../../theme/responsive';
import CustomText from '../CustomText';
import {ArrowIconSvg} from '../../../assets/svg';
import UserSkeleton from '../UserSkeleton';

const UserList = ({type = '', username = ''}: any) => {
  const [refresh, setRefresh] = useState(false);
  const [pageLoad, setPageLoad] = useState(false);
  const [floading, setFloadking] = useState(false);
  const {
    users,
    follower,
    loading,
    following,
    followerPage,
    followingPage,
    otherData,
  } = useSelector((state: any) => state.root.genral);

  const dispatch: any = useDispatch();
  const ended = async () => {
    setPageLoad(true);
    setFloadking(true);
    if (type == 'Followers') {
      console.log('Follower ', followerPage);
      if (floading) {
        return;
      }

      if (follower.length > 15 && followerPage)
        if (!floading) {
          await dispatch(
            getUserfollowerThunk({
              username: username,
              page: followerPage ? followerPage + 1 : 2,
            }),
          );
        }

      setFloadking(false);

      console.log('ffg');
      return;
    }

    if (type == 'Following') {
      if (floading) {
        return;
      }

      if (following.length > 15 && followingPage)
        if (!floading) {
          await dispatch(
            getUserfollowingThunk({
              username: username,
              page: followingPage ? followingPage + 1 : 2,
            }),
          );
        }

      setFloadking(false);

      console.log('ffg');
      return;
    }
    if (otherData) {
      await dispatch(
        getUsersThunk({
          page: otherData?.page + 1,
          search: otherData?.search,
        }),
      );
    }
    setPageLoad(false);
  };

  const onRefresh = () => {
    console.log('object');
    setRefresh(true);

    setTimeout(() => {
      setRefresh(false);
    }, 1000);
  };

  const enptyList = () => (
    <View style={styles.empty}>
      <ArrowIconSvg />

      {type == '' && (
        <CustomText size={14} pt={RF(10)}>
          {!otherData ? 'Search by username' : 'no record found'}
        </CustomText>
      )}
      {type == 'Following' && (
        <CustomText size={14} pt={RF(10)}>
          {'zero Following'}
        </CustomText>
      )}
      {type == 'Followers' && (
        <CustomText size={14} pt={RF(10)}>
          {'zero Followers'}
        </CustomText>
      )}
    </View>
  );
  let arr =
    (type == 'Following' && following) ||
    (type == 'Followers' && follower) ||
    users;
  return (
    <FlatList
      ListHeaderComponent={<View>{refresh && <ActivityIndicator />}</View>}
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={onRefresh} />
      }
      ListEmptyComponent={enptyList}
      ListFooterComponent={
        <View style={{paddingVertical: RF(30)}}>
          {pageLoad && <ActivityIndicator />}
        </View>
      }
      onEndReachedThreshold={0.5}
      onEndReached={ended}
      data={arr.length == 0 && loading ? [1, 2, 3] : arr}
      contentContainerStyle={styles.flat}
      renderItem={({item, index}: any) => {
        return (loading && !followingPage)  ? (
          <UserSkeleton />
        ) : (
          <UserCard key={index} item={item} />
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  flat: {paddingHorizontal: RF(0)},
  empty: {
    width: '100%',
    height: Dimensions.get('screen').height / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserList;
