import {createAsyncThunk} from '@reduxjs/toolkit';
import { loginApi } from '../../services/api.services';


export const loginThunk = createAsyncThunk(
  'login/users',
  async (value: any, thunkAPI) => {
    const {username, password} = value;
    try {
      let resp = await loginApi(username, password);
      return resp?.data
    } catch (error) {
      console.log('err', error);
      // return error;
    }
  },
);


