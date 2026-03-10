import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  riderIsSubscribed: false,
  userIsSubscribed: false,
  pusherInstance: null,
  riderChannelName: '',
  userChannelName: '',
  riderEvent: {},
  userEventData: {},
};

const socketSlice = createSlice({
  name: 'socketReducer',
  initialState: initialState,
  reducers: {
    setRiderIsSubscribed(state, action) {
      state.riderIsSubscribed = action.payload;
    },
    setUserIsSubscribed(state, action) {
      state.userIsSubscribed = action.payload;
    },
    setPusherInstance(state, action) {
      state.pusherInstance = action.payload;
    },
    setriderChannelName(state, action) {
      state.riderChannelName = action.payload;
    },
    setRiderEvent(state, action) {
      state.riderEvent = action.payload;
    },
    resetPusher: state => {
      state.pusherInstance = null;
      state.riderChannelName = null;
      state.userChannelName = null;
      state.userEventData = null;
    },
    setUserChannelName(state, action) {
      state.userChannelName = action.payload;
    },
    setUserEventData(state, action) {
      state.userEventData = action.payload;
    },
  },
});

export const {
  setUserIsSubscribed,
  setRiderIsSubscribed,
  setPusherInstance,
  resetPusher,
  setUserChannelName,
  setriderChannelName,
  setUserEventData,
  setRiderEvent,
} = socketSlice.actions;

export default socketSlice.reducer;
