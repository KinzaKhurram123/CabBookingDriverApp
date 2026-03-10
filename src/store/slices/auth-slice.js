import { createSlice } from '@reduxjs/toolkit';
import { setUserData } from './common';

const initialState = {
  token: null,
  isLoggedIn: false,
  fcmToken: null,
  isVerified: false,
  userWalkThrough: false,
  isGoalCreated: false,
  role: '',
  user_type: '',
  auth_loading: '',
  auth_loading_type: '',
  user: ""
};
console.log("🚀 ~ initialState.user_type:", initialState.user_type)

export const AuthSlice = createSlice({
  name: 'authReducer',
  initialState: initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.token = action?.payload?.token;
    },
    setUserType(state, action) {
      state.user_type = action.payload;
    },
    SetFCMToken(state, action) {
      state.fcmToken = action?.payload?.fcmToken;
    },
    SetUserRole(state, action) {
      console.log('in reduxxxxxxxxx', action.payload);
      state.role = action?.payload;
    },
    setUserLogin(state, action) {
      state.token = action?.payload;
    },
    setUserLogoutAuth(state, action) {
      state.token = null;
      state.fcmToken = null;
    },
    setWalkThrough(state, action) {
      state.userWalkThrough = action.payload;
      // console.log("🚀 ~ setWalkThrough ~ action.payload:", action.payload)
    },
    setAuthLoading: (state, action) => {
      state.auth_loading = action.payload;
    },
    setAuthLoadingType: (state, action) => {
      state.auth_loading_type = action.payload;
    },
    setUserData: (state, action) => {
      state.user = action.payload
    },
    setUser: (state, action) => {
      state.user = action.payload
    }
  },
});

export const {
  setUserLogin,
  setUserLogoutAuth,
  setUserToken,
  SetFCMToken,
  setWalkThrough,
  SetUserRole,
  setUserType,
  setAuthLoading,
  setAuthLoadingType,
  setUser
} = AuthSlice.actions;

export default AuthSlice.reducer;
