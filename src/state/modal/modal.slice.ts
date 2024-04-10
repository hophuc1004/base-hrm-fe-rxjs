import React from "react";
// Redux
import { createSlice } from "@reduxjs/toolkit";

// Type
import type { IModalType } from "./modal.type";
import type { RootState } from "store/index.store";

export const initialState: IModalType = {
  modalOpen: {
    isOpenModalAddNewUser: false,
    isOpenModalEditUser: false,
  },
};

const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    setModalOpen: (state: IModalType, action) => {
      state.modalOpen = {
        isOpenModalAddNewUser: action.payload.isOpenModalAddNewUser,
        isOpenModalEditUser: action.payload.isOpenModalEditUser,
      };
    },
  },
});

// Actions
export const ModalAction = modalSlice.actions;

// Reducer
const ModalReducer = modalSlice.reducer;

export default ModalReducer;

{
  /*
    modalHrmLogin: {
    isVisible: false,
    isOpenLogin: false,
  },

      setVisibleHrmLogin: (state: IModalType, action) => {
      state.modalHrmLogin = {
        isVisible: action.payload.isVisible,
        isOpenLogin: action.payload.isOpenLogin,
      };
    },
  */
}
