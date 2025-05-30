import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./slices/contactsSlice";
import postsReducer from "./slices/postsSlice";
import usersReducer from './slices/usersSlice'

const store = configureStore({
  reducer: {
    contactsData: contactsReducer,
    postsList: postsReducer,
    usersList: usersReducer,
  },
});

export default store;

