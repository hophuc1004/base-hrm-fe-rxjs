import HomePageAdmin from "pages/HomePageAdmin";
import HomePageSuperAdmin from "pages/HomePageSuperAdmin";
import HomePageUser from "pages/HomePageUser";
import ManagerUserPage from "pages/ManagerUserPage";

export const routesPrivateConfig = [
  {
    path: "/",
    element: <HomePageSuperAdmin />,
    title: "Home Super | HRM",
    label: "Home Super",
    sideBar: true,
    role: ["Super"],
    isSuper: true,
  },
  {
    path: "/admin",
    element: <HomePageAdmin />,
    title: "Home Admin | HRM",
    label: "Home Admin",
    sideBar: true,
    role: ["Admin"],
    isAdmin: true,
  },
  {
    path: "/user",
    element: <HomePageUser />,
    title: "Home User | HRM",
    label: "Home User",
    sideBar: true,
    role: ["User"],
    isUser: true,
  },
  {
    path: "/my-page-super",
    element: <HomePageSuperAdmin />,
    title: "My Page | HRM",
    label: "My Page",
    sideBar: true,
    role: ["Super"],
    isSuper: true,
  },
  {
    path: "/my-page-admin",
    element: <HomePageAdmin />,
    title: "My Page | HRM",
    label: "My Page",
    sideBar: true,
    role: ["Admin"],
    isAdmin: true,
  },
  {
    path: "/my-page-user",
    element: <HomePageUser />,
    title: "My Page | HRM",
    label: "My Page",
    sideBar: true,
    role: ["User"],
    isUser: true,
  },
  {
    path: "/manager-user",
    element: <ManagerUserPage />,
    title: "Manager User | HRM",
    label: "Manager User",
    sideBar: true,
    role: ["Admin"],
    isAdmin: true,
  },
];

export const routesSideBarConfig = [];
