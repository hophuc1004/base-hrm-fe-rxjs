import React, { useEffect, useRef, useState } from "react";

// React - router - dom
// import { router } from "routers/index.router";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Type
import type { PropsWithChildren } from "react";

// Module
import { ModalAction } from "state/modal/modal.slice";

// Component
import MenuBar from "components/Views/MenuBar";
import MenuItem from "components/Views/MenuItem";
import { routesPrivateConfig } from "routers/routeConfigs";
import type { RootState } from "store/index.store";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC<PropsWithChildren> = ({ children }) => {
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
  const toggle = () => setDrawerOpen(!isDrawerOpen);
  const outSide = useRef(null);
  const navigate = useNavigate();

  const { role, isLogin } = useSelector(
    (state: RootState) => state.auth.authLogin
  );
  console.log("isLogin: ", isLogin);

  const listMenuSideUser: Array<any> = routesPrivateConfig.filter(
    (item: any) => {
      return item.sideBar && item.isUser;
    }
  );

  const listMenuSideAdmin: Array<any> = routesPrivateConfig.filter(
    (item: any) => {
      return item.sideBar && item.isAdmin;
    }
  );

  const listMenuSideSuper: Array<any> = routesPrivateConfig.filter(
    (item: any) => {
      return item.sideBar && item.isSuper;
    }
  );

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  // const dispatch = useDispatch();

  // const handleHrmLogin = () => {
  //   dispatch(
  //     ModalAction.setVisibleHrmLogin({ isOpenLogin: true, isVisible: true })
  //   );
  // };

  // const handleHrmLoginToggle = () => {
  //   dispatch(
  //     ModalAction.setVisibleHrmLogin({ isOpenLogin: true, isVisible: true })
  //   );
  //   toggle();
  // };

  return (
    <div className="drawer md:pt-[80px]">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
        checked={isDrawerOpen}
        onChange={(e) => {}}
      />
      <div className="drawer-content flex flex-col scrollbar-hide">
        <div className="w-full navbar flex justify-between shadow-xs-custom fixed top-0 bg-[#323b45] z-[99]">
          <MenuBar toggle={toggle} />
          <div className="px-2 mx-2 gap-4 items-center">
            <a target="_blank" href="https://github.com/1004hophuc">
              <img
                className="w-64 md:max-w-xs"
                src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30165850/1941-768x591.png"
              />
            </a>
          </div>
          <div className="flex gap-4 items-center">
            {/* <label
              htmlFor="guide_modal"
              className="md:btn gap-2  bg-transparent text-[#555] md:hover:text-[#fff]"
            >
              <span className="hidden md:block"> Need help</span>
              <i className="fas fa-question-circle" />
            </label> */}
            <label
              htmlFor="guide_modal"
              className="md:btn gap-2 bg-transparent text-[#555] md:hover:text-[#fff]"
              // onClick={handleHrmLogin}
            >
              <span className="hidden md:block"> Info user after Login</span>
            </label>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side" ref={outSide}>
        <label
          htmlFor="my-drawer-3"
          className="drawer-overlay"
          onClick={toggle}
        />
        <ul className="menu py-6 px-6 overflow-y-auto w-60 bg-base-100 relative">
          <div className="block md:hidden">
            {!isLogin && (
              <button
                onClick={handleLogin}
                className="btn w-full text-center bg-red-custom-2 text-[] hover:bg-gradient-main hover:border-none hover:text-white color-w border-color-main border-2 font-bold text-sm mt-4 md:mt-0"
              >
                Login
              </button>
            )}
          </div>
          {role === "Super"
            ? listMenuSideSuper.map((item, index) => (
                <MenuItem key={index} item={item} onClose={toggle} />
              ))
            : role === "Admin"
            ? listMenuSideAdmin.map((item, index) => (
                <MenuItem key={index} item={item} onClose={toggle} />
              ))
            : listMenuSideUser.map((item, index) => (
                <MenuItem key={index} item={item} onClose={toggle} />
              ))}
          <div className="block md:hidden">
            {isLogin && (
              <button
                onClick={handleLogout}
                className="btn w-full text-center bg-red-custom-2 hover:bg-gradient-main hover:border-none hover:text-white color-w border-color-main border-2 font-bold text-sm mt-3 md:mt-0"
              >
                Logout
              </button>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
