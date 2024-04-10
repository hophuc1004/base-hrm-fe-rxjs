import React from "react";
// React - router - dom
// Redux
// Type
type MenuBarType = {
  toggle: () => void;
};
const MenuBar: React.FC<MenuBarType> = ({ toggle }) => {
  return (
    <div className="flex-none lg:hidden">
      <label
        htmlFor="my-drawer-3"
        className="btn btn-square btn-ghost "
        onClick={toggle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-6 h-6 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </label>
    </div>
  );
};
export default MenuBar;
