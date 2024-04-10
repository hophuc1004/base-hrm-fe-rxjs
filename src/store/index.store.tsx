import { configureStore } from "@reduxjs/toolkit";
import { epicMiddleware } from "./epicMiddleware";

import { rootEpic, rootReducer } from "state";

export const store: any = configureStore({
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).prepend(epicMiddleware);
  },
  reducer: rootReducer,
});
epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
