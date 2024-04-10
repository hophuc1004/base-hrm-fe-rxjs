import React from "react";
// React - router - dom

// Redux
import { useDispatch } from "react-redux";

// Type

export const renderButtonLogin = (dispatch: any) => {
  return (
    <button
      className={"bg-gradient-main text-sm text-white border-none px-10"}
      // onClick={() => modalSlice.toggleModalLogin(dispatch, {
      //   isVisible: true,
      //   isLoginForm:false
      // })}
    >
      Login
    </button>
  );
};

const NavButton = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex-none hidden lg:block">
      <ul className="menu md:menu-horizontal p-0 gap-10">
        <li>{renderButtonLogin(dispatch)}</li>
      </ul>
    </div>
  );
};

export default NavButton;
