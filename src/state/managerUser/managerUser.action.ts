// Type
import type { CaseReducer } from "@reduxjs/toolkit";

import type {
  IManagerUser,
  AddUserStartAction,
  AddUserCompletedAction,
  AddUserErrorAction,
  GetUserDetailStartAction,
  GetUserDetailCompletedAction,
  GetUserDetailErrorAction,
  UpdateUserStartAction,
  UpdateUserCompletedAction,
  UpdateUserErrorAction,
} from "./managerUser.type";

export const addUserStart: CaseReducer<IManagerUser, AddUserStartAction> = (
  state,
  action
) => {
  console.log("action.addUserStart: ", action);
  state.addNewUser = {
    loading: true,
    user: null,
    message: "",
  };
};

export const addUserCompleted: CaseReducer<
  IManagerUser,
  AddUserCompletedAction
> = (state, action) => {
  console.log("action.addUserCompleted: ", action);
  console.log("actionAddUserCompleted.payload: ", action.payload);
  state.addNewUser = {
    loading: false,
    user: action.payload.user,
    message: "",
  };
};

export const addUserError: CaseReducer<IManagerUser, AddUserErrorAction> = (
  state,
  action
) => {
  console.log("action.addUserError: ", action);
  console.log("actionAddUserError.payload: ", action.payload);
  state.addNewUser = {
    loading: false,
    user: null,
    message: action.payload.message,
  };
};

export const getUserDetailStart: CaseReducer<
  IManagerUser,
  GetUserDetailStartAction
> = (state, action) => {
  console.log("action.getUserDetailStart: ", action);
  state.getUser = {
    loading: true,
    user: null,
    message: "",
  };
};

export const getUserDetailCompleted: CaseReducer<
  IManagerUser,
  GetUserDetailCompletedAction
> = (state, action) => {
  console.log("action.getUserDetailStart: ", action);
  console.log("actionGetUserDetailStart.payload: ", action.payload);
  state.getUser = {
    loading: false,
    user: action.payload.user,
    message: "",
  };
};

export const getUserDetailError: CaseReducer<
  IManagerUser,
  GetUserDetailErrorAction
> = (state, action) => {
  console.log("action.getUserDetailStart: ", action);
  console.log("actionGetUserDetailStart.payload: ", action.payload);
  state.getUser = {
    loading: false,
    user: null,
    message: action.payload.message,
  };
};

export const updateUserStart: CaseReducer<
  IManagerUser,
  UpdateUserStartAction
> = (state, action) => {
  console.log("action.updateUserStart: ", action);
  state.updateUser = {
    loading: true,
    user: null,
    message: "",
  };
};

export const updateUserCompleted: CaseReducer<
  IManagerUser,
  UpdateUserCompletedAction
> = (state, action) => {
  console.log("action.updateUserStart: ", action);
  console.log("actionUpdateUserStart.payload: ", action.payload);
  state.updateUser = {
    loading: false,
    user: action.payload.user,
    message: "",
  };
};

export const updateUserError: CaseReducer<
  IManagerUser,
  UpdateUserErrorAction
> = (state, action) => {
  console.log("action.updateUserStart: ", action);
  console.log("actionUpdateUserStart.payload: ", action.payload);
  state.updateUser = {
    loading: false,
    user: null,
    message: action.payload.message,
  };
};
