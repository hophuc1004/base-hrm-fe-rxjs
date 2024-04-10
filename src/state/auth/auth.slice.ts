// Redux
import { createSlice } from "@reduxjs/toolkit";

// Type
import type { RootState } from "store/index.store";
import type { IAuth } from "./auth.type";

import {
  loginStart,
  loginCompleted,
  loginError,
  checkAccessTokenStart,
  checkAccessTokenCompleted,
  checkAccessTokenError,
  logout,
} from "./auth.action";

const initialState: IAuth = {
  authLogin: {
    loading: false,
    user: null,
    accessToken: "",
    role: undefined,
    message: "",
    isLogin: false,
  },
  authCheckAccessToken: {
    loading: false,
    isLogin: false,
    role: undefined,
    message: "",
  },
  authGetUser: {
    loading: false,
    user: null,
    accessToken: "",
    role: undefined,
    isLogin: false,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart,
    loginCompleted,
    loginError,
    checkAccessTokenStart,
    checkAccessTokenCompleted,
    checkAccessTokenError,
    logout,
  },
});

// Actions
export const AuthAction = authSlice.actions;

// Selectors
// export const SelectCount = (state: RootState) => state.counter.count;

// Reducer
const AuthReducer = authSlice.reducer;

export default AuthReducer;
