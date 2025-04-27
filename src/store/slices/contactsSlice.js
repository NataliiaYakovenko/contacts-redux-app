import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'  // бібліотека для екповторного унікального id

const initialState = {
  contacts: [
    {
      id: uuidv4(),
      fullname: 'Nataliia Yakovenko',
      phoneNumber: '+380551234567'
    },
    {
      id: uuidv4(),
      fullname: 'Lidiia Yakovenko',
      phoneNumber: '+380886875433'
    }
  ],
};

const contactsSlice = createSlice({
  initialState,
  name: "contacts",
  reducers: {},
});

const {reducer,actions} = contactsSlice    //{reducer,actions} - будуть у всіх випадках


export default reducer