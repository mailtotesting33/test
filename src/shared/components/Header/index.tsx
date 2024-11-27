import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {LeftArrowSvg} from '../../../assets/svg';
import CustomText from '../CustomText';
import {RF} from '../../theme/responsive';
import {GoBack} from '../../services/nav.services';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS} from '../../theme/colors';

const Header = ({heading = '', back=()=>{}}: any) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.main, {paddingTop: insets.top}]}>
      <View style={styles.back}>
        <Pressable
          style={styles.w15}
          onPress={() => {
            back?back(): GoBack();
          }}>
          <LeftArrowSvg />
        </Pressable>
        <CustomText color={COLORS.WHITE} bold>
          {heading}
        </CustomText>
        <View style={styles.w15} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  w15: {width: RF(15)},
  back: {
    width: '100%',
    paddingBottom: RF(0),
    paddingHorizontal: RF(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  main: {
    paddingVertical: RF(10),
    backgroundColor: COLORS.PRIMARY,
  },
});

export default Header;
