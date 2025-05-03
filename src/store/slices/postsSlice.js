import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../../api/api";

const initialState = {
  posts: [],
  isFetching: false,
  error: null,
};

export const getPostThunk = createAsyncThunk(
  "posts/getPosts",
  async (payload, thuncApi) => {
    try {
      const { data } = await getPosts() ;
      return data;
    } catch (error) {
      return thuncApi.rejectWithValue({message:error.message});
    }
  }
);

const postsSlice = createSlice({
  initialState,
  name: "posts",
  reducers: {},
  extraReducers: (bulder) => {
    bulder.addCase(getPostThunk.pending, (state, action) => {
      state.isFetching = true;
      state.error = null;
    });
    bulder.addCase(getPostThunk.fulfilled, (state, { payload }) => {
      state.posts = payload;
      state.isFetching = false;
    });
    bulder.addCase(getPostThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });
  },
});

const { reducer, actions } = postsSlice;

export default reducer;
