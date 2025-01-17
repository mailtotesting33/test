import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {COLORS} from '../../theme/colors';
import {RF} from '../../theme/responsive';

const CustomInput = (props:any,) => {
    let {mainStyle = {paddingHorizontal: RF(20),}, err=false,onEndEditing=null,value=null,accessible=null,editable=null}:any = props;
  return (
    <View style={mainStyle}>
      <TextInput
        placeholder="Enter text"
        
     
        {...(value !== undefined ? {value} : {})}
        {...(onEndEditing !== undefined ? {onEndEditing} : {})}
        {...(accessible !== undefined ? {accessible} : {})}
        {...(editable !== undefined ? {editable} : {})}
        placeholderTextColor={COLORS.GRAY}
        style={[
            styles.ip,
          {borderBottomColor: err ? COLORS.RED : COLORS.BLACK},
        ]}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ip: {
    color: COLORS.BLACK,
    fontSize: RF(16),
    fontWeight: '500',
    lineHeight: RF(20),
    paddingVertical: RF(6),
    borderBottomWidth: 1,
    marginTop: RF(30),
  }
});

export default CustomInput;
