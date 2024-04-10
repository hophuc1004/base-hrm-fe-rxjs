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
import checkErrorRegisterForm from "helper/validFormRegister";
import { textModalAuth } from "configs/textForModalAuth";
import { AuthAction } from "state/auth/auth.slice";
import FormEditUser from "components/Auth/FormUserEdit";
// Type
type ValueUserType = {
  // first_name: string;
  // last_name: string;
  // day_on_board: any;
  // date_of_birth: any;
  // staff_id: string;
  // position: string;
  firstName: string;
  lastName: string;
  phone: string;
  identityNumber: string;
  onBoard: string;
  dateOfBirth: string;
  roleId: number | undefined;
  email: string;
};
const EditUserModal = () => {
  const dispatch = useDispatch();
  const { isOpenModalEditUser } = useSelector(
    (state: RootState) => state.modal.modalOpen
  );
  const { loading, userProfileDetail } = useSelector(
    (state: RootState) => state.auth
  );
  const [errFormEditUser, setErrFormEditUser] = useState<any>({});
  const [valueUser, setValueUser] = useState<ValueUserType>({
    // first_name: "",
    // last_name: "",
    // day_on_board: "",
    // date_of_birth: "",
    // staff_id: "",
    // position: "",
    firstName: "",
    lastName: "",
    phone: "",
    identityNumber: "",
    onBoard: "",
    dateOfBirth: "",
    roleId: undefined,
    email: "",
  });
  useEffect(() => {}, [userProfileDetail]);
  const resetFormEditUser = () => {
    setValueUser({
      // first_name: "",
      // last_name: "",
      // day_on_board: "",
      // date_of_birth: "",
      // staff_id: "",
      // position: "",
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

  const getUserProfile = async (id: number, accessToken: any) => {
    try {
      // dispatch action getUserProfile
      // action dispatch
    } catch (error) {
      console.log(error);
    }
  };
  const closeModal = () => {
    dispatch(ModalAction.setModalOpen({ isOpenModalEditUser: false }));
    setErrFormEditUser({});
  };

  useEffect(() => {
    setValueUser(userProfileDetail);
  }, [userProfileDetail]);

  const onUpdateUser = async () => {
    try {
      const check = checkErrorRegisterForm({
        // first_name: valueUser.first_name,
        // last_name: valueUser.last_name,
        // day_on_board: valueUser.day_on_board,
        // date_of_birth: valueUser.date_of_birth,
        // staff_id: valueUser.staff_id,
        // position: valueUser.position,
        firstName: valueUser.firstName,
        lastName: valueUser.firstName,
        phone: valueUser.phone,
        identityNumber: valueUser.identityNumber,
        onBoard: valueUser.onBoard,
        dateOfBirth: valueUser.dateOfBirth,
        roleId: valueUser.roleId,
        email: valueUser.email,
      });
      if (check.errNumber > 0) setErrFormEditUser(check.msg);
      else {
        setErrFormEditUser({});
        closeModal();
      }
    } catch (error: any) {
      console.log(error.msg);
    }
  };
  const onSubmit = async () => {
    try {
      // await onUpdateUser();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal
        open={isOpenModalEditUser}
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
                    <h3 className="text-center text-[#000000] font-bold text-[28px] mb-2">
                      User profile
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
                    <FormEditUser
                      valueUser={valueUser}
                      error={errFormEditUser}
                      setValueUser={setValueUser}
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
                        className="w-24 md:w-48 hover:bg-[#CF0029] border-none"
                      >
                        <span className="text-[#FFFFFF] text-[18px] font-bold">
                          {textModalAuth.TEXT_BTN_UPDATE_USER}
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
export default EditUserModal;
