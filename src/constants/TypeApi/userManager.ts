import { Roles } from "state/auth/auth.type";

export type TypeValueAddUser = {
  token: string;
  user: any;
};

export type TypeReturnAddUser = {
  user: any;
  message: string;
};

export type TypeAddUserError = {
  user: any;
  message: string;
};

export type TypeValueGetUserDetail = {
  token: string;
  userId: number;
};

export type TypeReturnGetUserDetail = {
  user: any;
  message: string;
};

export type TypeGetUserDetailError = {
  user: any;
  message: string;
};

export type TypeValueUpdateUser = {
  token: string;
  userId: number;
  data: any;
};

export type TypeReturnUpdateUser = {
  user: any;
  message: string;
};

export type TypeUpdateUserError = {
  user: any;
  message: string;
};
