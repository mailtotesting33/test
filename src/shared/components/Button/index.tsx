import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import CustomText from '../CustomText';
import {RF} from '../../theme/responsive';
import {COLORS} from '../../theme/colors';

const CustomButtom = ({
  onPress,
  heading,
  style,
  width,
  color,
  height,
  ph,
  mainStyle
}: any) => {
  return (
    <View style={[mainStyle&&mainStyle,ph && {paddingHorizontal: ph}]}>
      <Pressable
        onPress={onPress ? onPress : () => {}}
        style={[
          styles.container,
        
          width && {width: width},
          height && {height: height},
          style && style,
        ]}>
        <CustomText color={color || COLORS.WHITE} bold>
          {heading}
        </CustomText>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    width: '100%',
    borderRadius: RF(10),
  },
});

export default CustomButtom;
