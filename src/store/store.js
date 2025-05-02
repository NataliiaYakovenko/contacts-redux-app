import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./slices/contactsSlice";
import postsReducer from "./slices/postsSlice";

const store = configureStore({
  reducer: {
    contactsData: contactsReducer,
    postsSlice: postsReducer,
  },
});

export default store;

/*
contactsList:{

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
  ]
}

 postsList:{
 
 posts: [],
   isFetching: false,
   error: null
   

 }



*/
