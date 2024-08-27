import { createSelector, createSlice } from '@reduxjs/toolkit';
import {
  createNewChat,
  deleteChat,
  getChatsList,
  updateChat,
} from './operations';
import { selectActiveChatId, selectChatsList } from './selectors';

const chatSlice = createSlice({
  name: 'chats',
  initialState: {
    chatsList: [],
    activeChatId: null,
  },
  reducers: {
    getChatActive: (state, action) => {
      state.activeChatId = action.payload;
    },
    sendMessage: (state, action) => {
      const chat = state.chatsList.find(
        (item) => item._id === action.payload.id,
      );
      chat?.messages.push(action.payload.message);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getChatsList.fulfilled, (state, action) => {
        state.chatsList = action.payload.data;
      })
      .addCase(createNewChat.fulfilled, (state, action) => {
        state.chatsList.push(action.payload.data);
        state.activeChatId = action.payload.data._id;
      })
      .addCase(deleteChat.fulfilled, (state, action) => {
        state.chatsList = state.chatsList.filter(
          (item) => item._id !== action.payload,
        );
        state.activeChatId = null;
      })
      .addCase(updateChat.fulfilled, (state, action) => {
        state.chatsList = state.chatsList.map((item) =>
          item._id !== action.payload.data.chat._id
            ? item
            : action.payload.data.chat,
        );
      });
  },
});

export const selectActiveChat = createSelector(
  [selectChatsList, selectActiveChatId],
  (chats, id) => chats.find((item) => item._id === id),
);

export const chatsReducer = chatSlice.reducer;
export const { getChatActive, sendMessage } = chatSlice.actions;
