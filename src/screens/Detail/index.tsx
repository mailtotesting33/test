import React, {useEffect} from 'react';
import {View, StyleSheet, Pressable, Image} from 'react-native';
import {navigate} from '../../shared/services/nav.services';
import {ROUTES} from '../../shared/utils/routes';
import {COLORS} from '../../shared/theme/colors';
import {useDispatch, useSelector} from 'react-redux';
import {getUserThunk} from '../../shared/redux/thunk/feed';
import {clearUser} from '../../shared/redux/reducers/genralReducer';
import {RF} from '../../shared/theme/responsive';
import CustomText from '../../shared/components/CustomText';
import Header from '../../shared/components/Header';
import DetailSkeleton from '../../shared/components/DetailSkeleton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const DetailScreen = ({route}: any) => {
  const {user, loading} = useSelector((state: any) => state.root.genral);
  const dispatch: any = useDispatch();
  const insets = useSafeAreaInsets();

  const follower = () => {
    navigate(ROUTES.FOLLOWERUSERS, {
      from: 'Followers',
      item: user,
    });
  };
  const following = () => {
    navigate(ROUTES.FOLLOWERUSERS, {
      from: 'Following',
      item: user,
    });
  };

  useEffect(() => {
    dispatch(getUserThunk({username: route?.params?.item.login}));
    return () => {
      dispatch(clearUser());
    };
  }, []);

  return (
    <>
      {loading ? (
        <View style={{paddingTop: insets.top}}>
          <DetailSkeleton />
        </View>
      ) : (
        <View style={styles.container}>
          <Header heading="Detail" />
          <View style={styles.main}>
            <View style={styles.row}>
              <View>
                <Image style={styles.image} source={{uri: user?.avatar_url}} />
              </View>
              <View style={styles.ph10}>
                <CustomText size={16}>{user?.name || ''}</CustomText>
                <CustomText size={13} bold>
                  @{user?.login}
                </CustomText>
              </View>
            </View>
            <View style={[styles.row, styles.pv17]}>
              <Pressable onPress={follower} style={styles.follow}>
                <CustomText size={14} bold>
                  follower
                </CustomText>
                <CustomText>{user?.followers || '0'}</CustomText>
              </Pressable>
              <Pressable onPress={following} style={styles.follow}>
                <CustomText size={14} bold>
                  following
                </CustomText>
                <CustomText>{user?.following || '0'}</CustomText>
              </Pressable>
            </View>
            {user?.bio && (
              <View>
                <CustomText bold>bio</CustomText>
                <CustomText>{user?.bio || ''}</CustomText>
              </View>
            )}
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  main: {paddingHorizontal: RF(20), paddingTop: RF(10)},
  container: {
    flex: 1,

    backgroundColor: COLORS.WHITE,
  },
  image: {width: RF(50), height: RF(50), borderRadius: RF(50)},
  row: {flexDirection: 'row', alignItems: 'center'},
  pv17: {paddingVertical: RF(17)},
  follow: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ph10: {paddingHorizontal: RF(10)},
});

export default DetailScreen;
