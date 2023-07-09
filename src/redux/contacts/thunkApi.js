import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

// axios.defaults.baseURL = 'https://64957088b08e17c917921d03.mockapi.io';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
      // returne id - це той пейлоад який піде в handleFulfilldDelete
    } catch (error) {
      return thunkAPI.rejectWithValue('something wrong');
    }
  }
);
