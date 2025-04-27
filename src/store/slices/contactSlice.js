import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  initialState,
  name: "contacts",
  reducers: {},
});

const {reducer,actions} = contactsSlice    //{reducer,actions} - будуть у всіх випадках


export default reducer