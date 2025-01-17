import {createSlice} from '@reduxjs/toolkit';
import { loginThunk } from '../thunk/mainThunk';

interface State {
  user: any;

}

const initialState: State = {
  user: null,

};

export const userReducer: any = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state, action) => {
      state.user = null
     }
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(loginThunk.pending, (state: any, action: any) => {
        state.loading = true;
      })
      .addCase(loginThunk.rejected, (state: any, action: any) => {
        state.loading = false;
      })
      .addCase(loginThunk.fulfilled, (state: any, action: any) => {
        state.user = action.payload;
        state.loading = false;
      })

    }

});

export const {setUser, clearUsers, clearUser, clearFollower, clearFollowing} =
  userReducer.actions;

export default userReducer.reducer;
