import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { formatDateToISO } from 'helpers/formatDateToISO';
import axios from 'axios';

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
      return thunkAPI.rejectWithValue(error?.message);
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
      return thunkAPI.rejectWithValue(error?.message);
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
      return thunkAPI.rejectWithValue(error?.message);
    }
  },
);

export const sendMessage = createAsyncThunk(
  'chats/sendMessage',
  async ({ _id, params }, thunkAPI) => {
    try {
      const { data } = await instance.post(`/chats/${_id}`, params);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.message);
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
      return thunkAPI.rejectWithValue(error?.message);
    }
  },
);

export const getQuotes = createAsyncThunk(
  'chats/getQuotes',
  async (chatId, thunkAPI) => {
    try {
      const {
        data: { content },
      } = await quotesInstance.get('/random');
      const response = {
        from: 'contact',
        text: content,
        date: formatDateToISO(),
      };
      await new Promise((resolve) => {
        setTimeout(() => {
          thunkAPI.dispatch(sendMessage({ _id: chatId, params: response }));
          toast.success('You have new message');
          resolve();
        }, 3000);
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.message);
    }
  },
);
