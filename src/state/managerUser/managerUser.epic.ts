import { delay, filter, map, of, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";
import type { AjaxResponse, AjaxError } from "rxjs/ajax";
import type { Observable, ObservableInput } from "rxjs";
import type { Action } from "redux";
import { config } from "configs/index.config";
import { catchError } from "rxjs/operators";
import { UserManagerAction } from "./managerUser.slice";
import type {
  AddUserCompletedAction,
  AddUserStartAction,
  GetUserDetailCompletedAction,
  GetUserDetailStartAction,
  UpdateUserCompletedAction,
  UpdateUserStartAction,
} from "./managerUser.type";

export const handleAddUserEpic = (action$: Observable<Action>) =>
  action$.pipe(
    filter(UserManagerAction.addUserStart.match),
    delay(2000),
    switchMap<AddUserStartAction, ObservableInput<AddUserCompletedAction>>(
      (action) =>
        ajax({
          url: `${config.BASE_URL}/users`,
          method: "POST",
          body: action.payload.user,
          headers: { Authorization: `Bearer ${action.payload.token}` },
        }).pipe(
          map<AjaxResponse<any>, AddUserCompletedAction>((response) => {
            // console.log("res12312312321: ", response.response?.data);
            const user = response?.response?.data;
            console.log("resUserEpic111111111111111:", user);
            // console.log("response.response.staff: ", response.response.staff);
            return {
              type: UserManagerAction.addUserCompleted.type,
              payload: {
                user: user,
                message: "",
              },
            };
          }),
          catchError((error: AjaxError): Observable<AddUserCompletedAction> => {
            console.log("errror11111111111: ", error);
            const errorMessage =
              `${error?.response?.message}` || "Some thing wrong";
            return of({
              type: UserManagerAction.addUserError.type,
              payload: {
                user: null,
                message: errorMessage,
              },
            });
          })
        )
    )
  );

export const handleGetUserDetailEpic = ($action: Observable<Action>) =>
  $action.pipe(
    filter(UserManagerAction.getUserDetailStart.match),
    delay(2000),
    switchMap<
      GetUserDetailStartAction,
      ObservableInput<GetUserDetailCompletedAction>
    >((action) =>
      ajax({
        url: `${config.BASE_URL}/users/profile/${action.payload.userId}`,
        method: "GET",
        headers: { Authorization: `Bearer ${action.payload.token}` },
      }).pipe(
        map<AjaxResponse<any>, GetUserDetailCompletedAction>((response) => {
          console.log("responseGetUserDetail: ", response);
          return {
            type: UserManagerAction.getUserDetailCompleted.type,
            payload: {
              user: response.response.user,
              message: "",
            },
          };
        }),
        catchError(
          (error: AjaxError): Observable<GetUserDetailCompletedAction> => {
            const errorMessage =
              `${error?.response?.msg}` || "Some thing wrong";
            return of({
              type: UserManagerAction.getUserDetailError.type,
              payload: {
                user: null,
                message: errorMessage,
              },
            });
          }
        )
      )
    )
  );

export const handleUpdateUserDetailEpic = ($action: Observable<Action>) =>
  $action.pipe(
    filter(UserManagerAction.updateUserStart.match),
    delay(2000),
    switchMap<
      UpdateUserStartAction,
      ObservableInput<UpdateUserCompletedAction>
    >((action) =>
      ajax({
        url: `${config.BASE_URL}/users/profile/${action.payload.userId}`,
        method: "PATCH",
        body: action.payload.data,
        headers: { Authorization: `Bearer ${action.payload.token}` },
      }).pipe(
        map<AjaxResponse<any>, UpdateUserCompletedAction>((response) => {
          console.log("responseUpdateUser: ", response);
          return {
            type: UserManagerAction.updateUserCompleted.type,
            payload: {
              user: response.response.user,
              message: "",
            },
          };
        }),
        catchError(
          (error: AjaxError): Observable<UpdateUserCompletedAction> => {
            const errorMessage =
              `${error?.response?.msg}` || "Some thing wrong";
            return of({
              type: UserManagerAction.updateUserError.type,
              payload: {
                user: null,
                message: errorMessage,
              },
            });
          }
        )
      )
    )
  );

// export const handleAddUserEpic = ($action: Observable<Action>) => {
//   $action.pipe(
//     filter(UserManagerAction.addUserStart.match),
//     delay(2000),
//     switchMap<AddUserStartAction, ObservableInput<AddUserCompletedAction>>(
//       (action) =>
//         ajax({
//           url: `${config.BASE_URL_GET_USER}/users`,
//           method: "POST",
//           body: action.payload.user,
//           headers: { Authorization: `Bearer ${action.payload.token}` },
//         }).pipe(
//           map<AjaxResponse<any>, AddUserCompletedAction>((response) => {
//             console.log("responseAddUser: ", response);
//             return {
//               type: UserManagerAction.addUserCompleted.type,
//               payload: {
//                 user: response.response,
//                 message: "",
//               },
//             };
//           }),
//           catchError((error: AjaxError): Observable<AddUserCompletedAction> => {
//             const errorMessage =
//               `${error?.response?.msg}` || "Some thing wrong";
//             return of({
//               type: UserManagerAction.addUserError.type,
//               payload: {
//                 user: null,
//                 message: errorMessage,
//               },
//             });
//           })
//         )
//     )
//   );
// };
