// Type
import type { PayloadAction } from "@reduxjs/toolkit";
import type {
  TypeAddUserError,
  TypeGetUserDetailError,
  TypeReturnAddUser,
  TypeReturnGetUserDetail,
  TypeReturnUpdateUser,
  TypeUpdateUserError,
  TypeValueAddUser,
  TypeValueGetUserDetail,
  TypeValueUpdateUser,
} from "constants/TypeApi/userManager";

export interface IManagerUser {
  addNewUser: IAddUser;
  getUser: IGetUser;
  updateUser: IUpdateUser;
}

export interface IAddUser {
  loading?: boolean;
  user?: any;
  message?: any;
  // email?: string;
  // firstName?: string;
  // lastName?: string;
  // dateOfBirth?: string;
  // roleId?: number;
  // phone?: string;
  // onBoard?: string;
  // identityNumber?: string;
}

export interface IGetUser {
  loading?: boolean;
  user?: any;
  message?: any;
}

export interface IUpdateUser {
  loading?: boolean;
  user?: any;
  message?: any;
  // email?: string;
  // firstName?: string;
  // lastName?: string;
  // dateOfBirth?: string;
  // roleId?: number;
  // phone?: string;
  // onBoard?: string;
  // identityNumber?: string;
}

export type AddUserStartAction = PayloadAction<TypeValueAddUser>;
export type AddUserCompletedAction = PayloadAction<TypeReturnAddUser>;
export type AddUserErrorAction = PayloadAction<TypeAddUserError>;

export type GetUserDetailStartAction = PayloadAction<TypeValueGetUserDetail>;
export type GetUserDetailCompletedAction =
  PayloadAction<TypeReturnGetUserDetail>;
export type GetUserDetailErrorAction = PayloadAction<TypeGetUserDetailError>;

export type UpdateUserStartAction = PayloadAction<TypeValueUpdateUser>;
export type UpdateUserCompletedAction = PayloadAction<TypeReturnUpdateUser>;
export type UpdateUserErrorAction = PayloadAction<TypeUpdateUserError>;
