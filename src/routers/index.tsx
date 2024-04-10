// Modules
import PrivateRoute from "components/PrivateRoute";
import AuthPage from "pages/AuthPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { routesPrivateConfig } from "./routeConfigs";
import { MainLayout } from "layouts";
import type { ReactNode } from "react";
import ErrorPage from "pages/404";

interface PrivateRouteWithLayoutProps {
  roles: string[];
  element: ReactNode;
}
const PrivateRouteWithLayout = ({
  roles,
  element,
  ...rest
}: PrivateRouteWithLayoutProps) => (
  <MainLayout>
    <PrivateRoute roles={roles} {...rest}>
      {element}
    </PrivateRoute>
  </MainLayout>
);

export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<AuthPage />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="*" element={<Navigate to="/error" replace />} />
      {routesPrivateConfig.map((item, index) => (
        <Route
          path={item.path}
          key={index}
          element={<PrivateRouteWithLayout roles={item.role} {...item} />}
        />
      ))}
    </Routes>
  );
};

// keep to logic to compare when error happen
{
  /*
// Modules
import PrivateRoute from "components/PrivateRoute";
import AuthPage from "pages/AuthPage";
import HomePageAdmin from "pages/HomePageAdmin";
import HomePageSuperAdmin from "pages/HomePageSuperAdmin";
import HomePageUser from "pages/HomePageUser";
import { Route, Routes } from "react-router-dom";
import HomePublic from "pages/Home";

export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<AuthPage />} />
      <Route
        path="/"
        element={
          <PrivateRoute roles={["Super"]}>
            <HomePageSuperAdmin />
          </PrivateRoute>
        }
      />

      <Route
        path="/user"
        element={
          <PrivateRoute roles={["User"]}>
            <HomePageUser />
          </PrivateRoute>
        }
      />
      <Route path="/user" element={<HomePageUser />} />

      <Route
        path="/admin"
        element={
          <PrivateRoute roles={["Admin"]}>
            <HomePageAdmin />
          </PrivateRoute>
        }
      />

      <Route path="/public" element={<HomePublic />} />
    </Routes>
  );
};
*/
}
