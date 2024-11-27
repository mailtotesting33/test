import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {RF} from '../../theme/responsive';
import {COLORS} from '../../theme/colors';

const UserSkeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <View style={styles.container}>
        <View style={{width: '20%'}}>
          <View
            style={{
              width: RF(40),
              height: RF(40),
              borderRadius: RF(50),
              borderWidth: 0.4,
              borderColor: COLORS.PRIMARY,
            }}
          />
        </View>
        <View style={{width: '75%', justifyContent: 'flex-start'}}>
          <View style={{width: RF(100), height: RF(10)}} />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: RF(50),
    // marginBottom: RF(10),
    flexDirection: 'row',
    alignItems: 'center',

    // backgroundColor: COLORS.PRIMARY,
    // width:Dimensions.get('screen').width
    borderBottomWidth: 0.3,
    borderBottomColor: COLORS.PRIMARY,
    width: '100%',
    borderRadius: RF(8),
    overflow: 'hidden',
    paddingHorizontal: RF(20),
    paddingTop: RF(1),
    paddingBottom: RF(10),
    marginBottom: RF(15),
  },
});

export default UserSkeleton;
