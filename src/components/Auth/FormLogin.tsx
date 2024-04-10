import React from "react";
// React - router - dom
import { useNavigate } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { Input } from "react-daisyui";
import { textFormLogin } from "configs/textFormLogin";
import type { RootState } from "store/index.store";

// Type
type Props = {
  valueLogin: any;
  error: any;
  setValueLogin: any;
};

const FormHrmLogin: React.FC<Props> = ({
  valueLogin,
  error,
  setValueLogin,
}) => {
  const dispatch = useDispatch();
  const { message } = useSelector((state: RootState) => state.auth);
  const handleOnChangeForm = (e: any) => {
    const { name, value } = e.target;
    setValueLogin({ ...valueLogin, [name]: value });
  };

  const lengthError = Object.keys(error).length;
  const navigate = useNavigate();
  return (
    <>
      <div className="mb-6">
        <Input
          className="w-full"
          placeholder={textFormLogin.PLACE_HOLDER_INPUT_EMAIL}
          value={valueLogin.email}
          name="email"
          onChange={handleOnChangeForm}
          type="email"
        />
        <label className="text-[12px] text-[#e03] font-[400]">{message}</label>
      </div>
      <div className="mb-6">
        <Input
          className="w-full"
          placeholder={textFormLogin.PLACE_HOLDER_INPUT_PASSWORD}
          value={valueLogin.password}
          name="password"
          onChange={handleOnChangeForm}
          type="password"
        />
        <label className="text-[12px] text-[#e03] font-[400]">{message}</label>
        {/* {lengthError > 0 ? (
          <label className="text-[12px] text-[#e03] font-[400]">
            {error.message}
          </label>
        ) : (
          ""
        )} */}
      </div>
      <div className="mb-8 flex justify-between">
        <div>
          <p className="text-[#CF0029] text-[14px] font-[500] cursor-pointer">
            {textFormLogin.FORGOT_PASSWORD}
          </p>
        </div>
      </div>
    </>
  );
};

export default FormHrmLogin;
