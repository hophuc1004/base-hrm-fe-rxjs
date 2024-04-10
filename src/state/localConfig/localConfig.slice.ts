// Redux
import { createSlice } from "@reduxjs/toolkit";

// Type
import type { RootState } from "store/index.store";
import type { ILocalConfig } from "./localConfig.type";
import type { PayloadAction } from "@reduxjs/toolkit";

// Helper
import { THEME_MODE } from "enums/theme";

const initialState: ILocalConfig = {
  themeMode: THEME_MODE.DARK,
  isLoading: false,
};

const localConfigSlice = createSlice({
  name: "localConfig",
  initialState,
  reducers: {
    setThemeMode: (
      state: ILocalConfig,
      action: PayloadAction<ILocalConfig>
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    setLoading: (state: ILocalConfig, action: PayloadAction<ILocalConfig>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

// Actions
export const LocalConfigAction = localConfigSlice.actions;

// Selectors
// export const SelectThemeMode = (state: RootState) =>
//   state.localConfig.themeMode;
// export const SelectLoading = (state: RootState) => state.localConfig.isLoading;

// Reducer
const LocalConfigReducer = localConfigSlice.reducer;

export default LocalConfigReducer;
