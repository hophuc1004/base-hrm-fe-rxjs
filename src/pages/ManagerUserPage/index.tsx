import AddNewUserModal from "components/Modals/AddNewUserModal";
import EditUserModal from "components/Modals/EditUserModal";
import PaginationCustom from "components/Pagination/PaginationCustom";
import React, { useEffect, useState } from "react";
import { Button } from "react-daisyui";
// import isEqual from 'lodash/isEqual';
// import { isEqual } from 'lodash';

import { useDispatch, useSelector } from "react-redux";
import { UserManagerAction } from "state/managerUser/managerUser.slice";
import { ModalAction } from "state/modal/modal.slice";
import type { RootState } from "store/index.store";

export interface IDataUserFromServer {
  staffId: string;
  firstName: string;
  lastName: string;
  email: string;
  position: POSITIONS_ENUM;
  dayOnboard: string;
  floor: number;
}

export enum POSITIONS_ENUM {
  DEV = "dev",
  BUSINESS_ANALYTICS = "ba",
  HUMAN_RESOURCE = "hr",
  MARKETING = "mkt",
}

const dataUserFromServer: IDataUserFromServer[] = [
  {
    staffId: "CS01",
    firstName: "Ho",
    lastName: "Van A",
    email: "cs01@yopmail.com",
    position: POSITIONS_ENUM.DEV,
    dayOnboard: "13-03-2023",
    floor: 3,
  },
  {
    staffId: "CS02",
    firstName: "Ho",
    lastName: "Van B",
    email: "cs02@yopmail.com",
    position: POSITIONS_ENUM.DEV,
    dayOnboard: "13-03-2023",
    floor: 2,
  },
  {
    staffId: "CS03",
    firstName: "Ho",
    lastName: "Van C",
    email: "cs03@yopmail.com",
    position: POSITIONS_ENUM.DEV,
    dayOnboard: "13-03-2023",
    floor: 3,
  },
  {
    staffId: "CS04",
    firstName: "Ho",
    lastName: "Van D",
    email: "cs04@yopmail.com",
    position: POSITIONS_ENUM.DEV,
    dayOnboard: "13-03-2023",
    floor: 2,
  },
  {
    staffId: "CS05",
    firstName: "Ho",
    lastName: "Van E",
    email: "cs05@yopmail.com",
    position: POSITIONS_ENUM.DEV,
    dayOnboard: "13-03-2023",
    floor: 2,
  },
];

const ManagerUserPage: React.FC = () => {
  const [listUsers, setListUsers] = useState<any>();
  const [pageOffset, setPageOffset] = useState<number>(0);

  const { accessToken } = useSelector(
    (state: RootState) => state.auth.authLogin
  );

  const dispatch = useDispatch();

  const getListUsers = async (page: number) => {
    try {
      // execute code dispatch action get list users
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageClickPrev = () => {
    setPageOffset((pageOffset) => pageOffset - 1);
  };
  const handlePageClickNext = () => {
    setPageOffset((pageOffset) => pageOffset + 1);
  };

  const handleOpenModalAddNewUser = () => {
    dispatch(ModalAction.setModalOpen({ isOpenModalAddNewUser: true }));
  };

  const handleOpenModalEditUser = () => {
    dispatch(ModalAction.setModalOpen({ isOpenModalEditUser: true }));
  };

  useEffect(() => {
    getListUsers(pageOffset);
  }, [pageOffset]);

  return (
    <>
      <div className="px-20 py-10">
        <div className="w-[100%] flex items-center mb-5 justify-between">
          <span className="title-text-event font-[700] text-[48px] leading-[72px]">
            Users
          </span>
          <div className="">
            <Button onClick={handleOpenModalAddNewUser}>Add New</Button>
          </div>
        </div>
        <div className="items-center flex flex-col justify-center border-[#33333]">
          <div className="w-[100%] items-center rounded-t-xl rounded-b-xl relative overflow-x-auto first-letter">
            <table className="w-full text-sm rounded-t-xl rounded-b-xl text-gray-500 dark:text-gray-400">
              <thead className="text-sm h-[70px] justify-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 w-1/12 text-center">
                    Staff ID
                  </th>
                  <th scope="col" className="px-6 py-3 w-1/12 text-center">
                    First Name
                  </th>
                  <th scope="col" className="px-6 py-3 w-2/12 text-center">
                    Last Name
                  </th>
                  <th scope="col" className="px-6 py-3 w-2/12 text-center">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 w-1/12 text-center">
                    Position
                  </th>
                  <th scope="col" className="px-6 py-3 w-2/12 text-center">
                    Day Onboard
                  </th>
                  <th scope="col" className="px-6 py-3 w-1/12 text-center">
                    Floor
                  </th>
                  <th scope="col" className="px-6 py-3 w-1/12 text-center">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>

              <tbody className="rounded-r-xl">
                {dataUserFromServer.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-600 hover:cursor-pointer"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                      >
                        {item.staffId}
                      </th>
                      <td className="px-6 py-4 text-center">
                        {item.firstName}
                      </td>
                      <td className="px-6 py-4 text-center">{item.lastName}</td>
                      <td className="px-6 py-4 text-center">{item.email}</td>
                      <td className="px-6 py-4 text-center">{item.position}</td>
                      <td className="px-6 py-4 text-center">
                        {item.dayOnboard}
                      </td>
                      <td className="px-6 py-4 text-center">{item.floor}</td>
                      <td className="px-6 py-4 text-center">
                        <p
                          onClick={handleOpenModalEditUser}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div />
            <div>
              <PaginationCustom
                onNext={handlePageClickNext}
                onPrev={handlePageClickPrev}
                pageOffset={pageOffset + 1}
                itemsPerPage={5}
                totalItem={dataUserFromServer.length}
              />
            </div>
            {/* <div className="w-full flex justify-end items-center">
                <Button onClick={handleOpenModalAddNewUser}>Add New</Button>
              </div> */}
          </div>
        </div>
      </div>

      <AddNewUserModal />
      <EditUserModal />
    </>
  );
};

export default ManagerUserPage;
