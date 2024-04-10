// Type
import type { PayloadAction } from "@reduxjs/toolkit";
import type {
  TypeCheckAccessToken,
  TypeReturnCheckAccessToken,
  TypeCheckAccessTokenError,
  TypeValueLogin,
  TypeReturnLogin,
  TypeLoginError,
} from "constants/TypeApi/auth";

export interface IAuth {
  authLogin: IAuthLogin;
  authCheckAccessToken: IAuthCheckAccessToken;
  authGetUser: IAuthGetUser;
}

export interface IAuthLogin {
  loading?: boolean;
  user?: any;
  accessToken?: string;
  role?: Roles | undefined;
  message?: string;
  isLogin?: boolean;
}

export interface IAuthCheckAccessToken {
  loading?: boolean;
  isLogin?: boolean;
  role?: Roles | undefined;
  message: string;
}

export interface IAuthGetUser {
  loading?: boolean;
  user?: any;
  accessToken?: string;
  role: Roles | undefined;
  isLogin?: boolean;
}

export enum Roles {
  SUPER_ADMIN = "Super",
  ADMIN = "Admin",
  USER = "User",
}

export type LoginStartAction = PayloadAction<TypeValueLogin>;
export type LoginCompletedAction = PayloadAction<TypeReturnLogin>;
export type LoginErrorAction = PayloadAction<TypeLoginError>;

export type CheckAccessTokenAction = PayloadAction<TypeCheckAccessToken>;
export type CheckAccessTokenCompletedAction =
  PayloadAction<TypeReturnCheckAccessToken>;

export type CheckAccessTokenErrorAction =
  PayloadAction<TypeCheckAccessTokenError>;

export type LogoutAction = PayloadAction<{}>;

// export type GetUserStartAction = PayloadAction<{}>;
// export type GetUserCompletedAction = PayloadAction<TypeReturnGetUser>;
