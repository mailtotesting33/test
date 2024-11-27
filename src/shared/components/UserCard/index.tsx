import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image, Pressable} from 'react-native';
import {RF} from '../../theme/responsive';
import {COLORS} from '../../theme/colors';
import CustomText from '../CustomText';
import { navigate } from '../../services/nav.services';
import { ROUTES } from '../../utils/routes';

const UserCard = ({item}: any) => {
  // console.log("-item--->",item);
  const {avatar_url, login} = item;
  return (
    <Pressable onPress={()=>{
        navigate(ROUTES.USERDETAIL,{
            item:item
        })
    }} style={styles.container}>
      <View style={{width: '20%'}}>
        <Image style={styles.image} source={{uri: avatar_url}} />
      </View>
      <View style={{width: '75%', justifyContent: 'flex-start'}}>
        <CustomText color={COLORS.PRIMARY} bold>
          @{login || ''}
        </CustomText>
      </View>
    </Pressable>
    
  );
};

const styles = StyleSheet.create({
  image: {
    width: RF(40),
    height: RF(40),
    borderRadius: RF(50),
    borderWidth: 0.4,
    borderColor: COLORS.PRIMARY,
  },
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
    paddingTop: RF(7),
    paddingBottom: RF(7),
  },
});

export default React.memo(UserCard);
