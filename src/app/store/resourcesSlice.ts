import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from './api';

const RESOURCES_URL = 'https://api.jsonbin.io/b/6177e9399548541c29c8c0f5';

export interface AppState {
  loading: boolean;
  resources: Resource[];
}

export interface Resource {
  id: string;
  name: string;
  description: string;
  phone: string;
  image: string;
  email: string;
  address: {
    number: string;
    street: string;
    zip: string;
    city: string;
    country: string;
  };
}

const initialState: AppState = {
  loading: true,
  resources: [],
};

export const fetchResources = createAsyncThunk(
  'resources/fetchResources',
  async (args: void) => {
    const resources = await api<Resource[]>(RESOURCES_URL).then((response) => {
      return response;
    });

    return resources;
  }
);

export const resourcesSlice = createSlice({
  name: 'resources',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchResources.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchResources.fulfilled, (state, action) => {
        state.resources = action.payload;
        state.loading = false;
      });
  },
});

export default resourcesSlice.reducer;
