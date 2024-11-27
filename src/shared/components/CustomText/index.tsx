
import React from 'react';
import {Text, TextProps, View} from 'react-native';
import { COLORS } from '../../theme/colors';
import { RF } from '../../theme/responsive';

const {BLACK} = COLORS;
interface CustomTextProps extends TextProps {
    center: boolean;
    containerStyle?:any;
    underLine?:any;
    pt?:any;
    pv?:any;
    pb?:any;
    ph?:any;
    bold: boolean;
    size: number;
    capital: boolean;
    color: any;
    onPress: () => void;
    contain: boolean;
    nestedTxt: string;
    nestedTxtFamily: string;
    nestedTxtSize: number;
    nestedTxtColor: string;
    onNestedTxtPress: () => void;
    translation?: any;
    fontFamily?: any;
  }
const CustomText = (props: Partial<CustomTextProps>) => {
  const {
    center,
    size = 12,
    color = BLACK,
    style,
    numberOfLines = 0,
    capital = false,
    onPress,
    contain,
    bold,
    nestedTxt,
    nestedTxtSize = 12,
    nestedTxtColor = BLACK,
    onNestedTxtPress,
    translation,
    fontFamily,
    containerStyle,
    underLine,
    pt,
    ph,
    pb,
    pv,
  } = props;

  return (
    <View
      style={[
        contain && { flex: 1,},
        containerStyle && containerStyle,
        pt && {paddingTop: RF(pt)},
        pb && {paddingBottom: RF(pb)},
        ph && {paddingBottom: RF(ph)},
        pv && {paddingBottom: RF(pv)},
      ]}>
      <Text
        onPress={onPress}
        numberOfLines={numberOfLines}
        style={[
          {
            ...(bold && {fontWeight: 'bold'}),
            fontSize: RF(size),
            color,
            textTransform: capital ? 'uppercase' : 'none',
            textAlign: center ? 'center' : 'auto',
          },
          underLine && {textDecorationLine: 'underline'},
          style,
        ]}>
        {translation && translation[translation]}
        {props.children}
        {nestedTxt && (
          <Text
            style={{
              fontFamily: nestedTxtFamily,
              fontSize: RF(nestedTxtSize),
              color: nestedTxtColor,
            }}
            onPress={onNestedTxtPress}>
            {nestedTxt}
          </Text>
        )}
      </Text>
    </View>
  );
};

export default CustomText;
