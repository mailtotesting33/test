import {createSlice} from '@reduxjs/toolkit';
import {
  getUserfollowerThunk,
  getUserfollowingThunk,
  getUsersThunk,
  getUserThunk,
} from '../thunk/feed';

interface State {
  users: any;
  following: any;
  followingPage: any;
  followerPage: any;
  follower: any;
  loading: boolean;
  searchLoading: boolean;
  otherData: any;
  user: any;
}

const initialState: State = {
  users: [],
  follower: [],
  following: [],
  followingPage: null,
  followerPage: null,
  loading: false,
  searchLoading: false,
  otherData: null,
  user: null,
};

export const userReducer: any = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    clearUsers: (state, action) => {
      state.users = [];
      state.searchLoading = false;
      // state.otherDarta = null;
    },
    clearUser: (state, action) => {
      state.user = [];
    },
    clearFollower: (state, action) => {
      state.follower = [];
    },
    clearFollowing: (state, action) => {
      state.following = [];
      state.followingPage =null
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(getUsersThunk.fulfilled, (state: any, action: any) => {
        const {items, ...remaining} = action.payload?.data;

        if (remaining.page == 1) {
          state.users = action.payload?.data?.items;
        } else {
          const uniqueArray = [...state.users, ...items]
          
          state.users = uniqueArray;
        }
        state.otherData = remaining;
        state.loading = false;
      })
      .addCase(getUsersThunk.pending, (state: any, action: any) => {
        state.loading = true;
      })
      .addCase(getUsersThunk.rejected, (state: any, action: any) => {
        state.loading = false;
      })
      .addCase(getUserThunk.fulfilled, (state: any, action: any) => {
        state.user = action.payload?.data;
        state.loading = false;
      })
      .addCase(getUserThunk.pending, (state: any, action: any) => {
        state.loading = true;
      })
      .addCase(getUserThunk.rejected, (state: any, action: any) => {
        state.loading = false;
      })
      .addCase(getUserfollowerThunk.fulfilled, (state: any, action: any) => {
        state.follower = [...state.follower,...action.payload?.data];
        state.followerPage = action.payload?.page;
        state.loading = false;
        state.loading = false;
      })
      .addCase(getUserfollowerThunk.pending, (state: any, action: any) => {
        state.loading = true;
      })
      .addCase(getUserfollowerThunk.rejected, (state: any, action: any) => {
        state.loading = false;
      })
      .addCase(getUserfollowingThunk.fulfilled, (state: any, action: any) => {
        state.following = [...state.following,...action.payload?.data];
        state.followingPage = action.payload?.page;
        state.loading = false;
      })
      .addCase(getUserfollowingThunk.pending, (state: any, action: any) => {
        state.loading = true;
      })
      .addCase(getUserfollowingThunk.rejected, (state: any, action: any) => {
        state.loading = false;
      });
  },
});

export const {setUsers, clearUsers, clearUser, clearFollower, clearFollowing} =
  userReducer.actions;

export default userReducer.reducer;
