import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { formatDateToISO } from '../../helpers/formatDateToISO';
import { sendMessage } from './slice';

const instance = axios.create({
  baseURL: 'https://chat-test-task-trainee-camp-backend.onrender.com',
});
const quotesInstance = axios.create({
  baseURL: 'https://api.quotable.io',
});

export const getChatsList = createAsyncThunk(
  'chats/getChatsList',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('/chats');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const createNewChat = createAsyncThunk(
  'chats/createNewChat',
  async (params, thunkAPI) => {
    try {
      const { data } = await instance.post('/chats', params);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const updateChat = createAsyncThunk(
  'chats/updateChat',
  async ({ _id, params }, thunkAPI) => {
    try {
      const { data } = await instance.patch(`/chats/${_id}`, params);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const deleteChat = createAsyncThunk(
  'chats/deleteChat',
  async (_id, thunkAPI) => {
    try {
      await instance.delete(`/chats/${_id}`);
      return _id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getQuotes = createAsyncThunk(
  'chats/getQuotes',
  async (chatId, thunkAPI) => {
    try {
      console.log(chatId);

      const {
        data: { content },
      } = await quotesInstance.get('/random');

      setTimeout(() => {
        const response = {
          from: 'contact',
          text: content,
          date: formatDateToISO(),
        };
        thunkAPI.dispatch(sendMessage({ id: chatId, message: response }));
      }, 3000);
      // return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
