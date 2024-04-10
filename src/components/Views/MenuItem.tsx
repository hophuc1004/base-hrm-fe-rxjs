import React from "react";
// React - router - dom
import { useLocation, useNavigate } from "react-router-dom";
// Redux
import { useDispatch } from "react-redux";
// Type
type Props = {
  item: any;
  onClose?: any;
};
const MenuItem: React.FC<Props> = (props) => {
  const { item, onClose } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  // const handlePageChange = (item: any) => {
  //   if (item.requireLogin) {
  //     if (checkLogin(user)) {
  //       navigate(item.path);
  //       onClose()
  //     } else {
  //       modalSlice.toggleModalLogin(dispatch, {
  //         isVisible: true,
  //         isLoginForm: false,
  //       });
  //     }
  //   } else navigate(item.path);
  // };
  const handlePageChange = (item: any) => {
    navigate(item.path);
  };
  const isCheckActive = (item: any) => {
    if (item.path === pathname) return true;
    return false;
  };
  return (
    <li>
      <label
        onClick={() => handlePageChange(item)}
        className="flex items-center p-4 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
        htmlFor="my-menu"
      >
        <span
          className={
            "ml-3 font-semibold text-sm " +
            (isCheckActive(item) ? "text-[#BD002F]" : "text-black-custom-1")
          }
        >
          {item.label}
        </span>
      </label>
    </li>
  );
};
export default MenuItem;
