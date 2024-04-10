import { combineEpics } from "redux-observable";
import {
  handleAuthLoginEpic,
  handleCheckAccessTokenEpic,
} from "./auth/auth.epic";
import AuthReducer from "./auth/auth.slice";
import LocalConfigReducer from "./localConfig/localConfig.slice";
import { handleAddUserEpic } from "./managerUser/managerUser.epic";
import UserManagerReducer from "./managerUser/managerUser.slice";
import ModalReducer from "./modal/modal.slice";

const rootReducer = {
  auth: AuthReducer,
  localConfig: LocalConfigReducer,
  modal: ModalReducer,
  userManager: UserManagerReducer,
};

const rootEpic = combineEpics(
  handleAuthLoginEpic,
  handleCheckAccessTokenEpic,
  handleAddUserEpic
);

export { rootReducer, rootEpic };
