import { createEpicMiddleware } from "redux-observable";
import type { AnyAction } from "@reduxjs/toolkit";

export const epicMiddleware = createEpicMiddleware<AnyAction, AnyAction, any>();
