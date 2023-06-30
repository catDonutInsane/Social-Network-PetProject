import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { initialStateType,authResponseType,singleUserType } from "../types/types";

let initialState: initialStateType = {
  email: null,
  id: null,
  login: null,
  isAuth: false,
  userData: {},
  messages: [],
  singleUserData: {},
};

export const reducer = createSlice({
  name: "red1",
  initialState,
  reducers: {
    login(state, action: PayloadAction<authResponseType>) {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.login = action.payload.login;
    },
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setUserData(state, action) {
      state.userData = action.payload;
    },
    getMess(state, action) {
      state.messages = [...state.messages, ...action.payload];
    },
    setSingleUserData(state, action: PayloadAction<singleUserType>) {
      state.singleUserData = action.payload;
    },
  },
});

export const { login, setAuth, setUserData, getMess, setSingleUserData } =
  reducer.actions;
export default reducer.reducer;
