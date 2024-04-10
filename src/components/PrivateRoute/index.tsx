import React, { useEffect } from "react";
import { Button } from "react-daisyui";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthAction } from "state/auth/auth.slice";

// Type
import type { RootState } from "store/index.store";

export type PrivateRouteType = {
  children: any;
  roles: Array<string>;
};

const PrivateRoute: React.FC<PrivateRouteType> = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, isLogin, role, message } = useSelector(
    (state: RootState) => state.auth.authLogin
  );

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) dispatch(AuthAction.checkAccessTokenStart({ token: token }));
    else {
      navigate("/login");
    }
  }, []);

  if (!loading && !isLogin) return null;
  if (!props.roles.includes(role))
    return (
      <>
        <h1 className="text-center my-24">
          You don't have permission to access to this page
        </h1>
        <div className="w-full justify-center flex">
          <Button
            onClick={() => {
              localStorage["accessToken"] = "";
              navigate("/login");
            }}
            style={{
              textAlign: "center",
            }}
          >
            Logout
          </Button>
        </div>
      </>
    );
  return <>{props.children}</>;
};

export default PrivateRoute;
