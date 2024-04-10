// Redux
import { createSlice } from "@reduxjs/toolkit";

// Action Reducer
import {
  addUserStart,
  addUserCompleted,
  addUserError,
  getUserDetailStart,
  getUserDetailCompleted,
  getUserDetailError,
  updateUserStart,
  updateUserCompleted,
  updateUserError,
} from "./managerUser.action";

// Type
import type { IManagerUser } from "./managerUser.type";

const initialState: IManagerUser = {
  addNewUser: {
    loading: false,
    user: undefined,
    message: "",
  },
  getUser: {
    loading: false,
    user: undefined,
    message: "",
  },
  updateUser: {
    loading: false,
    user: undefined,
    message: "",
  },
};

const managerUserSlice = createSlice({
  name: "managerUser",
  initialState,
  reducers: {
    addUserStart,
    addUserCompleted,
    addUserError,
    getUserDetailStart,
    getUserDetailCompleted,
    getUserDetailError,
    updateUserStart,
    updateUserCompleted,
    updateUserError,
  },
});

// Actions
export const UserManagerAction = managerUserSlice.actions;

// Selectors
// export const SelectCount = (state: RootState) => state.counter.count;

// Reducer
const UserManagerReducer = managerUserSlice.reducer;

export default UserManagerReducer;
