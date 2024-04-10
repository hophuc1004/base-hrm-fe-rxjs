import React, { useEffect, useState } from "react";
// React - router - dom
// Redux
import { useDispatch, useSelector } from "react-redux";
// Type
import type { RootState } from "store/index.store";
// Module
import { ModalAction } from "state/modal/modal.slice";
// Component
import { Button, Modal } from "react-daisyui";
// Asset
import { Link } from "react-router-dom";
import checkErrorRegisterForm from "helper/validFormRegister";
import { textModalAuth } from "configs/textForModalAuth";
import { AuthAction } from "state/auth/auth.slice";
import FormHrmLogin from "components/Auth/FormLogin";
import FormHrmRegister from "components/Auth/FormRegister";
import { UserManagerAction } from "state/managerUser/managerUser.slice";
// Type
type FormRegisterType = {
  // first_name: string;
  // last_name: string;
  // phone_number: string;
  // identity_number: string;
  // day_on_board: any;
  // date_of_birth: any;
  // role: number | undefined;
  // staff_id: string;
  // position: string;
  // email: string;
  // password: string;
  // confirm_password: string;
  firstName: string;
  lastName: string;
  phone: string;
  identityNumber: string;
  onBoard: string;
  dateOfBirth: string;
  roleId: number | undefined;
  email: string;
};
const AddNewUserModal = () => {
  const dispatch = useDispatch();
  const { isOpenModalAddNewUser } = useSelector(
    (state: RootState) => state.modal.modalOpen
  );
  const { loading, accessToken } = useSelector(
    (state: RootState) => state.auth.authLogin
  );
  const [errFormRegister, setErrFormRegister] = useState<any>({});
  const [valueRegister, setValueRegister] = useState<FormRegisterType>({
    // first_name: "",
    // last_name: "",
    // phone_number: "",
    // identity_number: "",
    // day_on_board: "",
    // date_of_birth: "",
    // role: undefined,
    // staff_id: "",
    // position: "",
    // email: "",
    // password: "",
    // confirm_password: "",
    firstName: "",
    lastName: "",
    phone: "",
    identityNumber: "",
    onBoard: "",
    dateOfBirth: "",
    roleId: undefined,
    email: "",
  });
  useEffect(() => {}, [valueRegister]);
  const resetFormRegister = () => {
    setValueRegister({
      // first_name: "",
      // last_name: "",
      // phone_number: "",
      // identity_number: "",
      // day_on_board: "",
      // date_of_birth: "",
      // role: undefined,
      // staff_id: "",
      // position: "",
      // email: "",
      // password: "",
      // confirm_password: "",
      firstName: "",
      lastName: "",
      phone: "",
      identityNumber: "",
      onBoard: "",
      dateOfBirth: "",
      roleId: undefined,
      email: "",
    });
  };
  const closeModal = () => {
    dispatch(ModalAction.setModalOpen({ isOpenModalAddNewUser: false }));
    resetFormRegister();
    setErrFormRegister({});
  };

  const onRegister = async () => {
    try {
      console.log("=============: ", valueRegister);
      const check = checkErrorRegisterForm({
        // first_name: valueRegister.first_name,
        // last_name: valueRegister.last_name,
        // phone_number: valueRegister.phone_number,
        // identity_number: valueRegister.identity_number,
        // day_on_board: valueRegister.day_on_board,
        // date_of_birth: valueRegister.date_of_birth,
        // role: valueRegister.role,
        // staff_id: valueRegister.staff_id,
        // position: valueRegister.position,
        // email: valueRegister.email,
        // password: valueRegister.password,
        // confirm_password: valueRegister.confirm_password,

        firstName: valueRegister.firstName,
        lastName: valueRegister.lastName,
        phone: valueRegister.phone,
        identityNumber: valueRegister.identityNumber,
        onBoard: valueRegister.onBoard,
        dateOfBirth: valueRegister.dateOfBirth,
        roleId: valueRegister.roleId,
        email: valueRegister.email,
      });
      if (check.errNumber > 0) setErrFormRegister(check.msg);
      setErrFormRegister({});
      console.log("accessTokenAddUser11111111: ", accessToken);
      console.log("valueRegister1111111: ", valueRegister);
      dispatch(
        UserManagerAction.addUserStart({
          token: accessToken,
          // user: {
          //   email: "user004@gmail.com",
          //   firstName: "Ho",
          //   lastName: "CDE",
          //   dateOfBirth: "2000-03-17",
          //   roleId: 1,
          //   phone: "0912511151",
          //   onBoard: "2023-03-17",
          //   identityNumber: "123456789",
          // },
          user: valueRegister,
        })
      );
    } catch (error: any) {
      console.log(error.msg);
    }
  };
  const onSubmit = async () => {
    try {
      await onRegister();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal
        open={isOpenModalAddNewUser}
        className={`w-9/12 p-0 max-w-[600px] relative scrollbar-hide`}
      >
        <div
          className="absolute top-[1rem] right-[1.5rem] text-[24px] text-color-main cursor-pointer hover:opacity-60 transition "
          onClick={closeModal}
        >
          <i className="fas fa-times" />
        </div>
        <Modal.Body>
          <div className="grid grid-cols-1 min-h-[506px] w-full scrollbar-hide">
            <div className="col-span-1 md:col-span-1">
              <div className="max-w-[80%] w-full mx-auto flex justify-center items-center h-full">
                <div className="w-full py-5">
                  <div className="w-full flex justify-start">
                    <h3 className="text-center text-[#000000] font-bold text-[28px] mb-2 uppercase">
                      {textModalAuth.TITLE_REGISTER}
                    </h3>
                  </div>
                  <div className="max-w-[100%] md:w-[100%] mb-4 flex items-center before:mt-0.5 before:flex-1 before:border-t border-neutral-300" />
                  <form
                    className="w-full"
                    onSubmit={async (e) => {
                      console.log("onsubmit");
                      e.preventDefault();
                      await onSubmit();
                    }}
                  >
                    <FormHrmRegister
                      valueRegister={valueRegister}
                      error={errFormRegister}
                      setValueRegister={setValueRegister}
                    />
                    <div className="flex justify-between mb-4 mt-4">
                      <Button
                        onClick={closeModal}
                        type="reset"
                        className="w-24 md:w-28 hover:bg-[#CF0029] border-none"
                      >
                        <span className="text-[#FFFFFF] text-[18px] font-bold">
                          Cancel
                        </span>
                      </Button>
                      <Button
                        type="submit"
                        loading={loading}
                        disabled={loading}
                        className="w-24 md:w-28 hover:bg-[#CF0029] border-none"
                      >
                        <span className="text-[#FFFFFF] text-[18px] font-bold">
                          {textModalAuth.TEXT_BTN_CREATE_ACCOUNT}
                        </span>
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default AddNewUserModal;
