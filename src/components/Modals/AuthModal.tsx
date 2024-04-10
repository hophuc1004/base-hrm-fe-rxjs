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
// Type
type FormRegisterType = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};
type FormLoginType = {
  email: string;
  password: string;
};
const ModalAuth = () => {
  const dispatch = useDispatch();
  const { isVisible, isOpenLogin } = useSelector(
    (state: RootState) => state.modal.modalHrmLogin
  );
  const { accessToken, user, loading, message } = useSelector(
    (state: RootState) => state.auth
  );
  const [errFormRegister, setErrFormRegister] = useState<any>({});
  const [errFormLogin, setErrFormLogin] = useState<any>({});
  const [valueLogin, setValueLogin] = useState<FormLoginType>({
    email: "",
    password: "",
  });
  const [valueRegister, setValueRegister] = useState<FormRegisterType>({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  useEffect(() => {}, [valueRegister]);
  const resetFormRegister = () => {
    setValueRegister({
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    });
  };
  const closeModal = () => {
    // dispatch(
    //   ModalAction.setVisibleHrmLogin({ isOpenLogin: false, isVisible: false })
    // );
    resetFormRegister();
    setErrFormRegister({});
    setErrFormLogin({});
  };
  const onLogin = async () => {
    console.log("onLogin");
    // try {
    // dispatch(
    //   AuthAction.loginStart({
    //     username: "playground",
    //     password: "playground",
    //   })
    // );
    // execute http login request
    // const data = { accessToken: "accessToken" }; // info return from server to client when request success
    // if (data) {
    //   localStorage.setItem("isLogin", data.accessToken);
    // }
    // ModalAction.setVisibleHrmLogin({ isOpenLogin: false, isVisible: false });
    // } catch (error: any) {
    //   // console.log(error.response.data.message);
    //   setErrFormLogin(error.response.data);
    // }
  };
  const onGetUser = () => {
    // dispatch(AuthAction.getUserStart({}));
  };
  // const onRegister = async () => {
  //   try {
  //     const check = checkErrorRegisterForm({
  //       email: valueRegister.email,
  //       name: valueRegister.name,
  //       password: valueRegister.password,
  //       confirm_password: valueRegister.confirm_password,
  //     });
  //     if (check.errNumber > 0) setErrFormRegister(check.msg);
  //     else {
  //       setErrFormRegister({});
  //       closeModal();
  //     }
  //   } catch (error: any) {
  //     console.log(error.msg);
  //   }
  // };
  const onSubmit = async () => {
    try {
      if (isOpenLogin) {
        // onGetUser();
        await onLogin();
      } else {
        // await onRegister();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleHrmRegister = () => {
    // dispatch(
    //   ModalAction.setVisibleHrmLogin({ isOpenLogin: false, isVisible: true })
    // );
  };
  const handleHrmLogin = () => {
    // dispatch(
    //   ModalAction.setVisibleHrmLogin({ isOpenLogin: true, isVisible: true })
    // );
  };
  return (
    <div>
      <Modal
        open={isVisible}
        className={`w-11/12 p-0 max-w-[1000px] relative scrollbar-hide`}
      >
        <div
          className="absolute top-[1rem] right-[1rem] text-[20px] text-color-main cursor-pointer hover:opacity-60 transition "
          onClick={closeModal}
        >
          <i className="fas fa-times" />
        </div>
        <Modal.Body>
          <div className="grid grid-cols-12 min-h-[506px]  w-full">
            <div className="col-span-12 md:col-span-6">
              <div className="max-w-[90%] w-[450px] mx-auto flex justify-center items-center h-full">
                <div className="w-80 md:w-96 py-5">
                  <h3 className="text-center text-[#000000] font-bold text-[28px] mb-4">
                    {isOpenLogin
                      ? textModalAuth.TITLE_LOGIN
                      : textModalAuth.TITLE_REGISTER}
                  </h3>
                  <form
                    onSubmit={async (e) => {
                      console.log("onsubmit");
                      e.preventDefault();
                      await onSubmit();
                    }}
                  >
                    {isOpenLogin ? (
                      <FormHrmLogin
                        valueLogin={valueLogin}
                        error={errFormLogin}
                        setValueLogin={setValueLogin}
                      />
                    ) : (
                      <FormHrmRegister
                        valueRegister={valueRegister}
                        error={errFormRegister}
                        setValueRegister={setValueRegister}
                      />
                    )}
                    <div className="w-full mb-8">
                      <Button
                        loading={loading}
                        disabled={loading}
                        className="w-80 md:w-96 hover:bg-[#CF0029] border-none"
                      >
                        <span className="text-[#FFFFFF] text-[18px] font-bold">
                          {isOpenLogin
                            ? textModalAuth.TEXT_BTN_LOGIN
                            : textModalAuth.TEXT_BTN_CREATE_ACCOUNT}
                        </span>
                      </Button>
                    </div>
                  </form>
                  <div>
                    {isOpenLogin ? (
                      <Link to="#">
                        {textModalAuth.SUB_TITLE_REGISTER_LEFT}
                        <span
                          onClick={handleHrmRegister}
                          className="custom-title font-bold hover:text-[#CF0029]"
                        >
                          {textModalAuth.SUB_TITLE_REGISTER_RIGHT}
                        </span>
                      </Link>
                    ) : (
                      <Link to="#">
                        {textModalAuth.SUB_TITLE_LOGIN_LEFT}
                        <span
                          onClick={handleHrmLogin}
                          className="custom-title font-bold hover:text-[#CF0029]"
                        >
                          {textModalAuth.SUB_TITLE_LOGIN_RIGHT}
                        </span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden h-full md:col-span-6 md:block items-center justify-center">
              <div className="w- h-full bg-bg-login-right bg-cover bg-center bg-no-repeat" />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default ModalAuth;
