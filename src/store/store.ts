import { configureStore } from "@reduxjs/toolkit";
import  reducer from "../slices/slice";
const store= configureStore({
  reducer:{
    reducer:reducer
},
});
export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;