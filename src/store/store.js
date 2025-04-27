import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from'./slices/contactsSlice'

const store = configureStore({reducer:{
    contactsData: contactsReducer
}})

export default store