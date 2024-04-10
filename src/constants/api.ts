import { postDataApiAjax } from "./api.constant";
import type { TypeValueLogin } from "./TypeApi/auth";

const postLoginApi = (valueLogin: TypeValueLogin) => {
  return postDataApiAjax("/admin/login", valueLogin, null);
};

// const postRegisterApi = async (valueRegister: TypeValueRegister) => {
//   return postDataApiAjax("/user/register", valueRegister, null);
// };

export { postLoginApi };
