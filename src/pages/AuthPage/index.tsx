import { textFormLogin } from "configs/textFormLogin";
import React, { useEffect, useState } from "react";
import { Button, Input } from "react-daisyui";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "state/auth/auth.slice";

// Asset
import showPasswordImage from "assets/login/showPassword.svg";
import hidePasswordImage from "assets/login/hidePassword.svg";
import bannerHrmLogin from "assets/login/bannerLogin.jpeg";

// Type
import type { RootState } from "store/index.store";
import { useNavigate } from "react-router-dom";
import { ofType } from "redux-observable";
import { tap } from "rxjs";
import { Roles } from "state/auth/auth.type";
type FormLoginType = {
  email: string;
  password: string;
};

export const PERMISSIONS = {
  USER: "User",
  ADMIN: "Admin",
  SUPER_ADMIN: "Super",
};

const PATHS = {
  USER: "/user",
  ADMIN: "/admin",
  SUPER_ADMIN: "/",
  LOGIN: "/login",
};

const AuthPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, user, accessToken, role, message, isLogin } = useSelector(
    (state: RootState) => state.auth.authLogin
  );

  const [valueLogin, setValueLogin] = useState<FormLoginType>({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const onLogin = async () => {
    dispatch(
      AuthAction.loginStart({
        email: valueLogin.email,
        password: valueLogin.password,
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("accessToken", accessToken);
  }, [accessToken]);

  const checkRoles = Object.keys(Roles);

  useEffect(() => {
    if (!loading && checkRoles.includes(role)) console.log("role: ", role);
    switch (role) {
      case PERMISSIONS.USER:
        return navigate(PATHS.USER);
      case PERMISSIONS.ADMIN:
        return navigate(PATHS.ADMIN);
      case PERMISSIONS.SUPER_ADMIN:
        return navigate(PATHS.SUPER_ADMIN);
      default:
        return navigate(PATHS.LOGIN);
    }
  }, [loading, role, isLogin]);

  const onGetUser = () => {
    // dispatch(AuthAction.getUserStart({}));
  };

  const onSubmit = async () => {
    try {
      await onLogin();
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnChangeForm = (e: any) => {
    const { name, value } = e.target;
    setValueLogin({ ...valueLogin, [name]: value });
  };

  const handleHideShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="h-screen bg-[#f0f2f5]">
      <div className="w-full h-full">
        <div className="grid grid-cols-12 w-full h-full">
          <div className="hidden md:flex h-full bg-[#FFFFFF] md:col-span-6 items-center justify-center">
            <img src={bannerHrmLogin} className="w-full" alt="Sample image" />
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="max-w-[100%] w-[440px] mx-auto flex flex-col justify-center items-center h-full">
              <div className="w-80 md:w-[100%] bg-[#FFFFFF] rounded-xl py-5 px-5 mb-3">
                <div className="flex flex-row items-center justify-center lg:justify-start">
                  <p className="mb-0 mr-4 text-3xl font-bold">Sign in to HRM</p>
                </div>

                <div className="max-w-[100%] md:w-[100%] my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t border-neutral-300" />
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    await onSubmit();
                  }}
                >
                  <div className="mb-6">
                    <Input
                      className="w-full"
                      placeholder={textFormLogin.PLACE_HOLDER_INPUT_EMAIL}
                      value={valueLogin.email}
                      name="email"
                      onChange={handleOnChangeForm}
                    />
                    <label className="text-[12px] text-[#e03] font-[400]">
                      {message && message}
                    </label>
                  </div>
                  <div className="mb-6">
                    <div className="relative">
                      <Input
                        className="w-full"
                        value={valueLogin.password}
                        placeholder={textFormLogin.PLACE_HOLDER_INPUT_PASSWORD}
                        name="password"
                        type={showPassword ? "text" : "password"}
                        onChange={handleOnChangeForm}
                        autoComplete="false"
                      />
                      <div
                        onClick={handleHideShowPassword}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                      >
                        {showPassword ? (
                          <img
                            className="h-4 text-gray-700 cursor-pointer"
                            src={showPasswordImage}
                          />
                        ) : (
                          <img
                            className="h-4 text-gray-700 cursor-pointer"
                            src={hidePasswordImage}
                          />
                        )}
                      </div>
                    </div>
                    <label className="text-[12px] text-[#e03] font-[400]">
                      {message && message}
                    </label>
                  </div>
                  <div className="mb-2">
                    <Button
                      loading={loading}
                      disabled={loading}
                      className="max-w-[100%] w-96 md:w-[100%] hover:bg-[#CF0029] border-none"
                    >
                      <span className="text-[#FFFFFF] text-[18px] font-bold">
                        Login
                      </span>
                    </Button>
                  </div>
                  <div className="flex items-center justify-center">
                    {/* <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                      <input
                        className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary"
                        type="checkbox"
                        value=""
                        id="exampleCheck2"
                      />
                      <label className="inline-block pl-[0.15rem] hover:cursor-pointer">
                        Remember me
                      </label>
                    </div> */}
                    <a className="hover:underline" href="#!">
                      Forgot password?
                    </a>
                  </div>
                </form>
              </div>
              <div className="mt-6">
                <a target="_blank" href="https://github.com/1004hophuc">
                  <img
                    className="w-64 md:max-w-xs"
                    src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30165850/1941-768x591.png"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthPage;

// Check remember me
{
  //
  /* <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
<input
  className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary"
  type="checkbox"
  value=""
  id="exampleCheck2"
/>
<label className="inline-block pl-[0.15rem] hover:cursor-pointer">
  Remember me
</label>
</div>
<a href="#!">Forgot password?</a>

//
<div className="flex items-center">
<Input
  className="flex items-center mr-1 border-none bg-transparent"
  type="checkbox"
  value=""
  id="exampleCheck2"
/>
<label className="inline-block pl-[0.15rem] hover:cursor-pointer items-center">
  Remember me
</label>
</div>
<div>
<a href="#!">Forgot password?</a>
</div>

//
<div className="mb-6">
  <Input
    className="w-full"
    // placeholder={textFormLogin.PLACE_HOLDER_INPUT_PASSWORD}
    placeholder=""
    type="show ? 'password' : 'text'"
    value={valueLogin.password}
    name="password"
    onChange={handleOnChangeForm}
  />
  <label className="text-[12px] text-[#e03] font-[400]">{message}</label>
</div>;                 
*/
}
