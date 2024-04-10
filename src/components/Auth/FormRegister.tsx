import React from "react";
// React - router - dom

// Redux
import { Input } from "react-daisyui";
import { textFormRegister } from "configs/textFormRegister";
// Type
type Props = {
  valueRegister: any;
  error: any;
  setValueRegister: any;
};
const FormHrmRegister: React.FC<Props> = ({
  valueRegister,
  error,
  setValueRegister,
}) => {
  const handleOnChangeForm = (e: any) => {
    const { name, value } = e.target;
    setValueRegister({ ...valueRegister, [name]: value });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 w-[100%]">
      <div className="w-[100%]">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
          <div className="mb-2">
            <div className="">
              <label className="label text-[14px] font-bold text-[#203239] uppercase">
                {textFormRegister.LABEL_INPUT_FIRST_NAME}
              </label>
              <Input
                className="w-full placeholder:text-[14px]"
                placeholder={textFormRegister.PLACE_HOLDER_INPUT_FIRST_NAME}
                name="first_name"
                value={valueRegister.first_name}
                onChange={handleOnChangeForm}
                autoComplete="off"
              />
              {error.first_name ? (
                <label className="text-[12px] text-[#e03] font-[400]">
                  {error.first_name}
                </label>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="mb-2">
            <div className="">
              <label className="label text-[14px] font-bold text-[#203239] uppercase">
                {textFormRegister.LABEL_INPUT_LAST_NAME}
              </label>
              <Input
                className="w-full  placeholder:text-[14px]"
                placeholder={textFormRegister.PLACE_HOLDER_INPUT_LAST_NAME}
                name="last_name"
                value={valueRegister.last_name}
                onChange={handleOnChangeForm}
                autoComplete="off"
              />
              {error.last_name ? (
                <label className="text-[12px] text-[#e03] font-[400]">
                  {error.last_name}
                </label>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
          <div className="mb-2">
            <div className="">
              <label className="label text-[14px] font-bold text-[#203239] uppercase">
                Phone *
              </label>
              <Input
                className="w-full placeholder:text-[14px]"
                placeholder="Enter phone number"
                name="phone_number"
                value={valueRegister.phone_number}
                onChange={handleOnChangeForm}
                autoComplete="off"
              />
              {error.first_name ? (
                <label className="text-[12px] text-[#e03] font-[400]">
                  {error.phone_number}
                </label>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="mb-2">
            <div className="">
              <label className="label text-[14px] font-bold text-[#203239] uppercase">
                Identity number *
              </label>
              <Input
                className="w-full  placeholder:text-[14px]"
                placeholder="Enter Identity number"
                name="identity_number"
                value={valueRegister.identity_number}
                onChange={handleOnChangeForm}
                autoComplete="off"
              />
              {error.last_name ? (
                <label className="text-[12px] text-[#e03] font-[400]">
                  {error.identity_number}
                </label>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
          <div className="mb-2">
            <div className="cursor-pointer">
              <label className="label text-[14px] font-bold text-[#203239] uppercase">
                {textFormRegister.LABEL_INPUT_DAY_ON_BOARD}
              </label>
              <Input
                className="w-full  placeholder:text-[14px]"
                placeholder="Select day on board"
                name="day_on_board"
                value={valueRegister.day_on_board}
                onChange={handleOnChangeForm}
                type="date"
                autoComplete="off"
              />
              {error.day_on_board ? (
                <label className="text-[12px] text-[#e03] font-[400]">
                  {error.day_on_board}
                </label>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="mb-2">
            <div className="">
              <label className="label text-[14px] font-bold text-[#203239] uppercase">
                {textFormRegister.LABEL_INPUT_DATE_OF_BIRTH}
              </label>
              <Input
                className="w-full  placeholder:text-[14px]"
                placeholder="Select date of birth"
                name="date_of_birth"
                value={valueRegister.date_of_birth}
                onChange={handleOnChangeForm}
                type="date"
                autoComplete="off"
              />
              {error.date_of_birth ? (
                <label className="text-[12px] text-[#e03] font-[400]">
                  {error.date_of_birth}
                </label>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
          {/* <div className="mb-2">
            <div className="">
              <label className="label text-[14px] font-bold text-[#203239]">
                {textFormRegister.LABEL_INPUT_STAFF_ID}
              </label>
              <Input
                className="w-full placeholder:text-[14px]"
                placeholder={textFormRegister.PLACE_HOLDER_INPUT_STAFF_ID}
                name="staff_id"
                value={valueRegister.staff_id}
                onChange={handleOnChangeForm}
                autoComplete="off"
              />
              {error.staff_id ? (
                <label className="text-[12px] text-[#e03] font-[400]">
                  {error.staff_id}
                </label>
              ) : (
                ""
              )}
            </div>
          </div> */}
          <div className="mb-2">
            <div className="">
              <label
                htmlFor="position_id"
                className="label text-[14px] font-bold text-[#203239] uppercase"
              >
                {textFormRegister.LABEL_INPUT_SELECT_POSITION}
              </label>
              <div>
                <select
                  id="position_id"
                  name="position"
                  value={valueRegister.position}
                  // onChange={handleOnChangeForm}
                  className="w-full border border-gray-300 text-gray-900 text-[14px] rounded-lg block p-3.5 dark:bg-[#fffff] dark:placeholder-gray-400 dark:text-[#203239]"
                >
                  <option defaultValue="" hidden>
                    --Select Position--
                  </option>
                  <option value="DEV">Developer</option>
                  <option value="HR">Human Resource</option>
                  <option value="MKT">Marketing</option>
                  <option value="LDEV">Lead Dev</option>
                  <option value="BA">Business Analytics</option>
                  <option value="LBA">Lead BA</option>
                </select>
              </div>
              {error.position ? (
                <label className="text-[12px] text-[#e03] font-[400]">
                  {error.position}
                </label>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="mb-2">
            <div className="">
              <label
                htmlFor="role_id"
                className="label text-[14px] font-bold text-[#203239] uppercase"
              >
                Select an Role *
              </label>
              <div>
                <select
                  id="role_id"
                  name="role"
                  value={valueRegister.role}
                  onChange={handleOnChangeForm}
                  className="w-full border border-gray-300 text-gray-900 text-[14px] rounded-lg block p-3.5 dark:bg-[#fffff] dark:placeholder-gray-400 dark:text-[#203239]"
                >
                  <option defaultValue="" hidden>
                    --Select Role--
                  </option>
                  <option value={1}>Admin</option>
                  <option value={2}>Sub-Admin</option>
                  <option value={3}>User</option>
                </select>
              </div>
              {error.position ? (
                <label className="text-[12px] text-[#e03] font-[400]">
                  {error.role}
                </label>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="mb-2 items-center justify-between">
          <label className="label text-[14px] font-bold text-[#203239] uppercase">
            {textFormRegister.LABEL_INPUT_EMAIL}
          </label>
          <Input
            className="w-full  placeholder:text-[14px]"
            placeholder={textFormRegister.PLACE_HOLDER_INPUT_EMAIL}
            name="email"
            value={valueRegister.email}
            onChange={handleOnChangeForm}
            autoComplete="off"
          />
          {error.email ? (
            <label className="text-[12px] text-[#e03] font-[400]">
              {error.email}
            </label>
          ) : (
            ""
          )}
          <label className="label text-[rgba(32, 50, 57, 0.7)] text-[12px]">
            {textFormRegister.SUB_LABEL_INPUT_EMAIL}
          </label>
        </div>
        {/* <div className="mb-2">
          <label className="label text-[14px] font-bold text-[#203239] uppercase">
            {textFormRegister.LABEL_INPUT_PASSWORD}
          </label>
          <Input
            className="w-full placeholder:text-[14px]"
            placeholder={textFormRegister.PLACE_HOLDER_INPUT_PASSWORD}
            name="password"
            value={valueRegister.password}
            onChange={handleOnChangeForm}
            type="password"
            autoComplete="off"
          />
          {error.password && (
            <label className="text-[12px] text-[#e03] font-[400]">
              {error.password}
            </label>
          )}
          <label className="label text-[rgba(32, 50, 57, 0.7)] text-[12px]">
            {textFormRegister.SUB_LABEL_INPUT_PASSWORD}
          </label>
        </div>
        <div className="mb-2">
          <Input
            className="w-full  placeholder:text-[14px]"
            placeholder={textFormRegister.PLACE_HOLDER_INPUT_CONFIRM_PASSWORD}
            name="confirm_password"
            value={valueRegister.confirm_password}
            onChange={handleOnChangeForm}
            type="password"
            autoComplete="off"
          />
          {error.confirm_password && (
            <label className="text-[12px] text-[#e03] font-[400]">
              {error.confirm_password}
            </label>
          )}
        </div> */}
      </div>
    </div>
  );
};
export default FormHrmRegister;
