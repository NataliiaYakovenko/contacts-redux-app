import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid"; // бібліотека для екповторного унікального id

const initialState = {
  contacts: [
    {
      id: uuidv4(),
      isFavourite: true,
      fullname: "Nataliia Yakovenko",
      phoneNumber: "+380551234567",
    },
    {
      id: uuidv4(),
      isFavourite: false,
      fullname: "Lidiia Yakovenko",
      phoneNumber: "+380886875433",
    },
  ],
};

const contactsSlice = createSlice({
  initialState,
  name: "contacts",
  reducers: {
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter((c) => {
        return c.id !== payload;
      });
    },

    updateContact: (state, { payload: { id, data } }) => {
      const updateContactIndex = state.contacts.findIndex((c) => {
        return c.id === id;
      });
      state.contacts[updateContactIndex] = {
        ...state.contacts[updateContactIndex],
        ...data,
      };
    },

    createContact: (state, { payload }) => {
      state.contacts.push({ ...payload, isFavourite: false, id: uuidv4() });
    },
  },
});

const { reducer, actions } = contactsSlice; //{reducer,actions} - будуть у всіх випадках

export const { deleteContact, updateContact, createContact } = actions;

export default reducer;

console.log(initialState);
