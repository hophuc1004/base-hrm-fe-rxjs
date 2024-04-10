import React, { useState } from "react";
// React - router - dom

// Redux
import { Input } from "react-daisyui";
import { textFormEditUser } from "configs/textFormEditUser";
// Type
type Props = {
  valueUser: any;
  error: any;
  setValueUser: any;
};
const FormEditUser: React.FC<Props> = ({ valueUser, error, setValueUser }) => {
  const handleOnChangeForm = (e: any) => {
    const { name, value } = e.target;
    setValueUser({ ...valueUser, [name]: value });
  };
  const [dateOfBirth, setDateOfBirth] = useState("1997-04-10");
  const [dateOnBoard, setDateOnBoard] = useState("2023-03-13");
  // <div className="max-w-[100%] md:w-[100%] mb-4 flex items-center before:mt-0.5 before:flex-1 before:border-t border-neutral-300" />
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 w-[100%]">
      <div className="w-[100%]">
        <div className="w-full flex justify-start">
          <h3 className="text-center text-gray-400 font-bold text-[18px] mb-2 uppercase">
            {textFormEditUser.USER_INFO}
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
          <div className="mb-2">
            <div className="">
              <label className="label text-[14px] font-bold uppercase text-[#203239]">
                {textFormEditUser.STAFF_ID}
              </label>
              <Input
                className="w-full text-[14px] placeholder:text-[14px]"
                name="staff_id"
                value="nv001"
                onChange={handleOnChangeForm}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="mb-2 items-center justify-between">
            <label className="label text-[14px] text-[#203239] font-bold uppercase">
              {textFormEditUser.EMAIL_ADDRESS}
            </label>
            <Input
              className="w-full text-[14px] placeholder:text-[10px]"
              name="email"
              value="nv001@yopmail.com"
              onChange={handleOnChangeForm}
              autoComplete="off"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
          <div className="mb-2">
            <div className="">
              <label className="label text-[14px] font-bold uppercase text-[#203239]">
                {textFormEditUser.FIRST_NAME}
              </label>
              <Input
                className="w-full text-[14px] placeholder:text-[14px]"
                name="first_name"
                value="Ho"
                onChange={handleOnChangeForm}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="mb-2">
            <div className="">
              <label className="label text-[14px] font-bold uppercase text-[#203239]">
                {textFormEditUser.LAST_NAME}
              </label>
              <Input
                className="w-full text-[14px] placeholder:text-[14px]"
                name="last_name"
                value="Coder"
                onChange={handleOnChangeForm}
                autoComplete="off"
              />
            </div>
          </div>
        </div>
        <div className="w-full mt-5 flex justify-start">
          <h3 className="text-center text-gray-400 font-bold text-[18px] mb-2 uppercase">
            {textFormEditUser.WORK_INFO}
          </h3>
        </div>
        <div className="max-w-[100%] md:w-[100%] mb-4 flex items-center before:mt-0.5 before:flex-1 before:border-t border-neutral-300" />
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
          <div className="mb-2">
            <div className="cursor-pointer">
              <label className="label text-[14px] font-bold uppercase text-[#203239]">
                {textFormEditUser.DAY_ON_BOARD}
              </label>
              <Input
                className="w-full text-[14px] placeholder:text-[14px]"
                placeholder="Select day on board"
                name="day_on_board"
                value={dateOnBoard}
                onChange={handleOnChangeForm}
                type="date"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="mb-2">
            <div className="">
              <label className="label text-[14px] font-bold uppercase text-[#203239]">
                {textFormEditUser.DATE_OF_BIRTH}
              </label>
              <Input
                className="w-full text-[14px] placeholder:text-[14px]"
                placeholder="Select date of birth"
                name="date_of_birth"
                value={dateOfBirth}
                onChange={handleOnChangeForm}
                type="date"
                autoComplete="off"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
          <div className="mb-2">
            <div className="">
              <label
                htmlFor="position_id"
                className="label text-[14px] font-bold uppercase text-[#203239]"
              >
                {textFormEditUser.POSITION}
              </label>
              <select
                id="position_id"
                name="position"
                value="DEV"
                onChange={handleOnChangeForm}
                className="border border-[#e5e7eb] text-gray-900 text-[14px] rounded-lg block w-full p-3.5 dark:bg-[#fffff] dark:placeholder-gray-400 dark:text-[#203239]"
              >
                <option defaultValue="">Choose an position</option>
                <option value="DEV">Developer</option>
                <option value="HR">Human Resource</option>
                <option value="MKT">Marketing</option>
                <option value="LDEV">Lead Dev</option>
                <option value="BA">Business Analytics</option>
                <option value="LBA">Lead BA</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormEditUser;
