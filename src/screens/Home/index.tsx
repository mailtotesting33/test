import React, {useEffect} from 'react';
import {Image, Pressable, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Wrapper from '../../shared/components/Wrapper';
import {COLORS} from '../../shared/theme/colors';
import {RF} from '../../shared/theme/responsive';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomText from '../../shared/components/CustomText';
import {setUser} from '../../shared/redux/reducers/userReducer';
import {styles} from './styles';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const dispatch: any = useDispatch();
  const {user} = useSelector((state: any) => state.root.user);

  const logout = () => {
    dispatch(setUser(null));
  };
  return (
    <Wrapper noPaddingTop bgColor={COLORS.LIGHT_ANTI_FLASH}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: COLORS.BLUELIGHT,
          height: RF(130),
          paddingHorizontal: RF(15),
          paddingTop: RF(insets.top),
          paddingBottom: RF(20),
        }}>
        <View style={{alignSelf: 'flex-end'}}>
          <CustomText pv={2} color={COLORS.WHITE}>
            gender
          </CustomText>
          <CustomText bold color={COLORS.WHITE}>
            {user?.gender || ''}
          </CustomText>
        </View>

        <View style={{alignSelf: 'flex-end'}}>
          <CustomText pv={2} color={COLORS.WHITE}>
            username
          </CustomText>
          <CustomText bold color={COLORS.WHITE}>
            {user?.username || ''}
          </CustomText>
        </View>

        <Pressable onPress={logout} style={{alignSelf: 'flex-end'}}>
          <CustomText bold color={COLORS.WHITE}>
            Logout
          </CustomText>
        </Pressable>
      </View>
      <View>
        <Image style={styles.img} source={{uri: user?.image}} />
      </View>
    </Wrapper>
  );
};

export default React.memo(HomeScreen);
