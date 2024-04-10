import React from "react";

// React - router - dom
// import { router } from "routers/index.router";

// Redux
import { useDispatch } from "react-redux";
import MenuItem from "components/Views/MenuItem";
import { routesPrivateConfig } from "routers/routeConfigs";
import { useTheme } from "hooks/useTheme";

// Type

// Component

const SidebarUser: React.FC = () => {
  const listMenuSide: Array<any> = routesPrivateConfig.filter((item: any) => {
    return item.sideBar && item.isUser;
  });
  console.log("listMenuSideUser: ", listMenuSide);

  return (
    <div className="hidden md:block md:col-span-2 h-screen">
      <div className="max-h-screen shadow-xs-custom h-screen">
        <div className="w-64" aria-label="Sidebar">
          <div className="py-6 px-3">
            <ul className="space-y-6">
              {listMenuSide.map((item, index) => (
                <MenuItem key={index} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarAdmin: React.FC = () => {
  const listMenuSide: Array<any> = routesPrivateConfig.filter((item: any) => {
    return item.sideBar && item.isAdmin;
  });

  console.log("listMenuSideAdmin: ", listMenuSide);
  const THEME = useTheme();
  console.log("THEME:", THEME);

  return (
    <div className="hidden md:block md:col-span-2 h-screen">
      <div className="max-h-screen shadow-xs-custom h-screen">
        <div className="w-64" aria-label="Sidebar">
          <div className="py-6 px-3">
            <ul className="space-y-6">
              {listMenuSide.map((item, index) => (
                <MenuItem key={index} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarSuper: React.FC = () => {
  const listMenuSide: Array<any> = routesPrivateConfig.filter((item: any) => {
    return item.sideBar && item.isSuper;
  });

  console.log("listMenuSideSuper: ", listMenuSide);

  return (
    <div className="hidden md:block md:col-span-2 h-screen">
      <div className="max-h-screen shadow-xs-custom h-screen">
        <div className="w-64" aria-label="Sidebar">
          <div className="py-6 px-3">
            <ul className="space-y-6">
              {listMenuSide.map((item, index) => (
                <MenuItem key={index} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SidebarUser, SidebarAdmin, SidebarSuper };
