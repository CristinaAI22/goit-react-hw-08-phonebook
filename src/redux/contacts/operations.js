import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Utility to add JWT

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  console.log(token);
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      Notiflix.Loading.standard('Loading...');
      const response = await axios.get('/contacts');
      Notiflix.Loading.remove();
      return response.data;
    } catch (err) {
      Notiflix.Loading.remove();
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', credentials);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/` + credentials);
      Notiflix.Notify.success('Contact deleted successfully!');
      return response.data;
    } catch (err) {
      Notiflix.Notify.failure('Error deleting contact.');
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
