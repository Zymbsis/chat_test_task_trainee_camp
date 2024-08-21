import { createSlice } from '@reduxjs/toolkit';
import test from '../../../test.json';

const chatSlice = createSlice({
  name: 'chats',
  initialState: {
    chatsList: test,
    activeChat: null,
  },
  reducers: {
    getChatActive: (state, action) => {
      state.activeChat = action.payload;
    },
  },
});

export const chatsReducer = chatSlice.reducer;
export const { getChatActive } = chatSlice.actions;
