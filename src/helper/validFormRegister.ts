import { errorTextFormRegister } from "configs/textFormRegister";

type FormType = {
  // first_name?: string;
  // last_name?: string;
  // phone_number?: string;
  // identity_number?: string;
  // day_on_board?: string;
  // date_of_birth?: string;
  // role?: number;
  // staff_id?: string;
  // position?: string;
  // email?: string;
  // password?: any;
  // confirm_password?: any;
  firstName: string;
  lastName: string;
  phone: string;
  identityNumber: string;
  onBoard: string;
  dateOfBirth: string;
  roleId: number | undefined;
  email: string;
};

const validateEmail = (email: any) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
const checkErrorRegisterForm = (value: FormType) => {
  let err: any = {};
  // if (value.first_name === "")
  //   err.first_name = errorTextFormRegister.FIRST_NAME_EMPTY;
  // if (value.last_name === "")
  //   err.last_name = errorTextFormRegister.LAST_NAME_EMPTY;
  // if (value.phone_number === "")
  //   err.phone_number = errorTextFormRegister.PHONE_NUMBER_EMPTY;
  // if (value.identity_number === "")
  //   err.identity_number = errorTextFormRegister.IDENTITY_NUMBER;
  // if (value.day_on_board === "")
  //   err.day_on_board = errorTextFormRegister.DAY_ON_BOARD_EMPTY;
  // if (value.date_of_birth === "")
  //   err.date_of_birth = errorTextFormRegister.DATE_OF_BIRTH_EMPTY;
  // if (value.staff_id === "")
  //   err.staff_id = errorTextFormRegister.STAFF_ID_EMPTY;
  // if (value.position === "")
  //   err.position = errorTextFormRegister.POSITION_EMPTY;
  // if (!validateEmail(value.email))
  //   err.email = errorTextFormRegister.EMAIL_IS_NOT_FORMAT;
  // if (value.password.length < 8) {
  //   err.password = errorTextFormRegister.PASSWORD_AT_LEAST;
  // }
  // if (value.password !== value.confirm_password)
  //   err.confirm_password = errorTextFormRegister.CONFIRM_PASSWORD_FAIL;
  if (value.firstName === "")
    err.firstName = errorTextFormRegister.FIRST_NAME_EMPTY;
  if (value.lastName === "")
    err.lastName = errorTextFormRegister.LAST_NAME_EMPTY;
  if (value.phone === "")
    err.phone_number = errorTextFormRegister.PHONE_NUMBER_EMPTY;
  if (value.identityNumber === "")
    err.identityNumber = errorTextFormRegister.IDENTITY_NUMBER;
  if (value.onBoard === "")
    err.onBoard = errorTextFormRegister.DAY_ON_BOARD_EMPTY;
  if (value.dateOfBirth === "")
    err.dateOfBirth = errorTextFormRegister.DATE_OF_BIRTH_EMPTY;
  if (value.roleId === undefined)
    err.dateOfBirth = errorTextFormRegister.DATE_OF_BIRTH_EMPTY;
  if (!validateEmail(value.email))
    err.email = errorTextFormRegister.EMAIL_IS_NOT_FORMAT;
  return {
    msg: err,
    errNumber: Object.keys(err).length,
  };
};

export default checkErrorRegisterForm;

// reformat a DD-MM-YYYY string to YYYY-MM-DD
{
  /*
function reformatDateString(s) {
  var b = s.split(/\D/);
  return b.reverse().join('-');
}
*/
}
