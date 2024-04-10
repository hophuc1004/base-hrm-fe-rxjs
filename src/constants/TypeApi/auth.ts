import { Roles } from "state/auth/auth.type";

export type TypeValueLogin = {
  email: string;
  password: string;
};

export type TypeReturnLogin = {
  user: any;
  accessToken: string;
  role: Roles | undefined;
  message: string;
};

export type TypeLoginError = {
  user: any;
  accessToken: string;
  role: Roles | undefined;
  message: string;
};

export type TypeCheckAccessToken = {
  token: string;
};

export type TypeReturnCheckAccessToken = {
  isLogin: boolean;
  role: Roles | undefined;
  message: string;
  user: any;
  accessToken: string;
};

export type TypeCheckAccessTokenError = {
  isLogin: boolean;
  role: Roles | undefined;
  message: string;
};
