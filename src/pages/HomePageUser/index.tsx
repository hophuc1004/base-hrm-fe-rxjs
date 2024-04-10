import React from "react";
import { Button } from "react-daisyui";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { routesPrivateConfig } from "routers/routeConfigs";
import { AuthAction } from "state/auth/auth.slice";

const HomePageUser = () => {
  const listMenuSide: Array<any> = routesPrivateConfig.filter((item: any) => {
    return item.sideBar && item.isSuper;
  });
  console.log("listMenuSideUser: ", listMenuSide);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(AuthAction.logout({}));
    navigate("/login");
  };
  return (
    <div>
      HomePageUser
      <div className="w-full text-center justify-center flex">
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
};

export default HomePageUser;
