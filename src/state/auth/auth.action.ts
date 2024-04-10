// Type
import type { CaseReducer } from "@reduxjs/toolkit";
import type {
  CheckAccessTokenAction,
  CheckAccessTokenCompletedAction,
  CheckAccessTokenErrorAction,
  IAuth,
  LoginCompletedAction,
  LoginErrorAction,
  LoginStartAction,
  LogoutAction,
} from "./auth.type";

export const loginStart: CaseReducer<IAuth, LoginStartAction> = (
  state,
  action
) => {
  console.log("action.loginStart ", action);
  state.authLogin = {
    loading: true,
    user: null,
    accessToken: "",
    role: undefined,
    message: "",
    isLogin: false,
  };
};

export const loginCompleted: CaseReducer<IAuth, LoginCompletedAction> = (
  state,
  action
) => {
  console.log("action.loginCompleted ", action);
  state.authLogin = {
    loading: false,
    user: action.payload.user,
    accessToken: action.payload.accessToken,
    role: action.payload.role,
    message: "",
    isLogin: true,
  };
};

export const loginError: CaseReducer<IAuth, LoginErrorAction> = (
  state,
  action
) => {
  console.log("action.loginError: ", action);
  state.authLogin = {
    loading: false,
    user: "",
    accessToken: "",
    role: undefined,
    message: action.payload.message,
    isLogin: false,
  };
};

export const checkAccessTokenStart: CaseReducer<
  IAuth,
  CheckAccessTokenAction
> = (state, action) => {
  console.log("action.checkAccessToken: ", action);
  state.authLogin = {
    loading: true,
    user: "",
    accessToken: "",
    role: undefined,
    message: "",
    isLogin: false,
  };
};

export const checkAccessTokenCompleted: CaseReducer<
  IAuth,
  CheckAccessTokenCompletedAction
> = (state, action) => {
  console.log("action.checkAccessTokenCompleted: ", action);
  state.authLogin = {
    loading: false,
    user: action.payload.user,
    accessToken: action.payload.accessToken,
    role: action.payload.role,
    message: "",
    isLogin: true,
  };
};

export const checkAccessTokenError: CaseReducer<
  IAuth,
  CheckAccessTokenErrorAction
> = (state, action) => {
  console.log("action.checkAccessTokenError: ", action);

  state.authLogin = {
    loading: false,
    user: undefined,
    accessToken: "",
    role: undefined,
    message: action.payload.message,
    isLogin: false,
  };
};

export const logout: CaseReducer<IAuth, LogoutAction> = (state, action) => {
  localStorage.removeItem("accessToken");
  state.authLogin = {
    loading: false,
    user: undefined,
    accessToken: "",
    role: undefined,
    message: "",
    isLogin: false,
  };
  window.location.reload();
};

{
  /*
export const getUserStart: CaseReducer<IAuth, GetUserStartAction> = (
  state,
  action
) => {
  console.log("action.getUserStart ", action);
  return {
    ...state,
    loading: true,
    user: null,
  };
};

export const getUserCompleted: CaseReducer<IAuth, GetUserCompletedAction> = (
  state,
  action
) => {
  console.log("action.getUserComplete ", action);
  return {
    ...state,
    loading: false,
    user: action.payload.user,
  };
};
   */
}
