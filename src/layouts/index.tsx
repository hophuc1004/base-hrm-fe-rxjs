import React, { useCallback, useEffect } from "react";
import type { ReactNode } from "react";
// React - router - dom

// Redux
import { useDispatch, useSelector } from "react-redux";

// Type
import type { RootState } from "store/index.store";

// Component

// Page

import Navbar from "./Navbar";
import Footer from "./Footer";
import { SidebarAdmin, SidebarSuper, SidebarUser } from "./Sidebar";
import { AuthAction } from "state/auth/auth.slice";
import { useNavigate } from "react-router-dom";
import { PERMISSIONS } from "pages/AuthPage";

const accessToken = localStorage.getItem("accessToken");

export const MainLayout = (props: { children: ReactNode }) => {
  const { role, user } = useSelector(
    (state: RootState) => state.auth.authLogin
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  const refreshUser = useCallback(
    async (accessToken: any) => {
      try {
        if (accessToken)
          dispatch(AuthAction.checkAccessTokenStart({ token: accessToken }));
      } catch (error) {
        console.log(error);
        localStorage.removeItem("accessToken");
        navigate("/login");
      }
    },
    [accessToken]
  );

  useEffect(() => {
    if (accessToken) refreshUser(accessToken);
  }, [accessToken]);

  return (
    <>
      <div className="w-screen min-h-screen">
        <Navbar>
          <div className="flex flex-wrap">
            {role === PERMISSIONS.SUPER_ADMIN ? (
              <SidebarSuper />
            ) : role === PERMISSIONS.ADMIN ? (
              <SidebarAdmin />
            ) : (
              <SidebarUser />
            )}
            <div className="flex-1 relative h-screen overflow-y-scroll scrollbar-hide pt-[80px] md:pt-0">
              <div>{props.children}</div>
              <Footer />
            </div>
          </div>
        </Navbar>
      </div>
    </>
  );
};
