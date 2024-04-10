import React from "react";
import { Button } from "react-daisyui";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthAction } from "state/auth/auth.slice";

const HomePageAdmin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(AuthAction.logout({}));
    navigate("/login");
  };
  return (
    <div>
      HomePageAdmin
      <div className="w-full text-center justify-center flex">
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
};

export default HomePageAdmin;
