import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import Wrapper from '../../shared/components/Wrapper';
import CustomText from '../../shared/components/CustomText';
import CustomButtom from '../../shared/components/Button';
import {RF} from '../../shared/theme/responsive';
import CustomInput from '../../shared/components/CustomInput';
import {useFormik} from 'formik';
import {loginSchema} from '../../shared/utils/validation';
import {useDispatch} from 'react-redux';
import {loginThunk} from '../../shared/redux/thunk/mainThunk';

const initailValue = {
  username: 'emilys',
  password: 'emilyspass',
};

const LoginScreen = () => {
  const dispatch: any = useDispatch();
  const formik = useFormik({
    validateOnBlur: true,
    validationSchema: loginSchema,
    initialValues: initailValue,
    onSubmit: async (values: any) => {
      dispatch(loginThunk(values));
    },
  });

  return (
    <Wrapper>
      <View style={styles.head}>
        <CustomText center bold size={20}>
          Welcom to App
        </CustomText>
      </View>

      <CustomInput
        err={formik.errors.username}
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        placeholder={'username'}
      />

      <CustomInput
        placeholder={'Password'}
        onChangeText={formik.handleChange('password')}
        err={formik.errors.password}
        value={formik.values.password}
      />

      <CustomButtom
        onPress={formik.handleSubmit}
        mainStyle={[styles.btn]}
        ph={RF(20)}
        height={RF(50)}
        heading="Login to continue"
      />
    </Wrapper>
  );
};

export default LoginScreen;
