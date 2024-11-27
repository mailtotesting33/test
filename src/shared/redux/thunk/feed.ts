import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  getFollower,
  getFollowings,
  getUser,
  getUsers,
} from '../../services/api.services';

export const getUsersThunk = createAsyncThunk(
  'feed/users',
  async (value: any, thunkAPI) => {
    const {page, search} = value;

    try {
      let resp = await getUsers(search, page);
      return {
        ...resp,
        data: {...resp.data, page: page, search: search},
      };
    } catch (error) {
      console.log('err', error);
      return error;
    }
  },
);

export const getUserThunk = createAsyncThunk(
  'feed/user',
  async (value: any, thunkAPI) => {
    const {username} = value;
    try {
      return await getUser(username);
    } catch (error) {
      console.log('err', error);
      return error;
    }
  },
);

export const getUserfollowerThunk = createAsyncThunk(
  'feed/follower',
  async (value: any, thunkAPI) => {
    const {username, page} = value;

    try {
      let resp = await  getFollower(username, page);
      return {
        ...resp,
         page: page
      };
    } catch (error) {
      console.log('err', error);
      return error;
    }
  },
);

export const getUserfollowingThunk = createAsyncThunk(
  'feed/following',
  async (value: any, thunkAPI) => {
    const {username, page} = value;

    try {
      let resp = await getFollowings(username, page);
      return {
        ...resp,
         page: page
      };
    } catch (error) {
      console.log('err', error);
      return error;
    }
  },
);
