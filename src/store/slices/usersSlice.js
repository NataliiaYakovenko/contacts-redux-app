import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../../api/api";

const initialState = {
  users: [],
  isFetcing: false,
  error: null,
};

export const getUsersThunk = createAsyncThunk(
  "users/getUsers",
  async (payload, thuncApi) => {
    try {
      const { data } = await getUsers();
      return data;
    } catch (error) {
      return thuncApi.rejectWithValue({ message: error.message });
    }
  }
);

const usersSlice = createSlice({
  initialState,
  name: "users",
  reducers: {},
  extraReducers: (bulder) => {
    bulder.addCase(getUsersThunk.pending, (state, action) => {
      state.isFetcing = true;
      state.error = null;
    });
    bulder.addCase(getUsersThunk.fulfilled, (state, { payload }) => {
      state.users = payload;
      state.isFetcing = false;
    });
    bulder.addCase(getUsersThunk.rejected, (state, { payload }) => {
      state.isFetcing = false;
      state.error = payload;
    });
  },
});

const { reducer, action } = usersSlice;

export default reducer;
