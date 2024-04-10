import { delay, filter, map, of, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";
import type { AjaxResponse, AjaxError } from "rxjs/ajax";
import type { Observable, ObservableInput } from "rxjs";
import type { Action } from "redux";
import { AuthAction } from "./auth.slice";
import { config } from "configs/index.config";
import { catchError } from "rxjs/operators";
import type {
  CheckAccessTokenAction,
  CheckAccessTokenCompletedAction,
  LoginCompletedAction,
  LoginStartAction,
} from "./auth.type";

export const handleAuthLoginEpic = (action$: Observable<Action>) =>
  action$.pipe(
    filter(AuthAction.loginStart.match),
    delay(2000),
    switchMap<LoginStartAction, ObservableInput<LoginCompletedAction>>(
      (action) =>
        ajax({
          url: `${config.BASE_URL}/auth/login`,
          method: "POST",
          body: action.payload,
        }).pipe(
          map<AjaxResponse<any>, LoginCompletedAction>((response) => {
            // console.log("res12312312321: ", response.response?.data);
            const res = response?.response?.data;
            // console.log("response.response.staff: ", response.response.staff);
            return {
              type: AuthAction.loginCompleted.type,
              payload: {
                user: res.user,
                accessToken: res?.authentication?.accessToken,
                role: res?.user?.roleName,
                message: "",
              },
            };
          }),
          catchError((error: AjaxError): Observable<LoginCompletedAction> => {
            const errorMessage =
              `${error?.response?.msg}` || "Some thing wrong";
            return of({
              type: AuthAction.loginError.type,
              payload: {
                user: null,
                accessToken: "",
                role: undefined,
                message: errorMessage,
              },
            });
          })
        )
    )
  );

export const handleCheckAccessTokenEpic = (action$: Observable<Action>) => {
  return action$.pipe(
    filter(AuthAction.checkAccessTokenStart.match),
    switchMap<
      CheckAccessTokenAction,
      ObservableInput<CheckAccessTokenCompletedAction>
    >((action) =>
      ajax({
        url: `${config.BASE_URL}/users/profile`,
        method: "GET",
        // body: action.payload.token,
        headers: { Authorization: `Bearer ${action.payload.token}` },
      }).pipe(
        map<AjaxResponse<any>, CheckAccessTokenCompletedAction>((response) => {
          // console.log("resCheckAccessTokenComplete: ", response?.response);
          const res = response?.response?.data;
          console.log("resGetProfile:", res);
          // console.log("res.role: ", res.role);
          console.log("res.data?.roleName: ", res.data?.roleName);
          return {
            type: AuthAction.checkAccessTokenCompleted.type,
            payload: {
              loading: false,
              user: res,
              accessToken: action.payload.token,
              role: res.role?.roleName,
              message: "",
              isLogin: true,
            },
          };
        }),
        catchError(
          (error: AjaxError): Observable<CheckAccessTokenCompletedAction> => {
            const errorMessage =
              `${error?.response?.msg}` || "Some thing wrong";
            return of({
              type: AuthAction.checkAccessTokenError.type,
              payload: {
                loading: false,
                user: undefined,
                role: undefined,
                accessToken: "",
                message: errorMessage,
                isLogin: false,
              },
            });
          }
        )
      )
    )
  );
};

{
  /*
  // Test

- Navigate with redux-observable
import { ajax } from 'rxjs/observable/dom/ajax';
import { push } from 'react-router-redux';
import NProgress from 'nprogress';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

export default function login(action$) {
  return action$.ofType('LOGIN_USER')
    .do(() => NProgress.start())
    .mergeMap(payload => (
       // Call your login service here, please note that it must be an observable to continue in your epic chain.
       Observable.fromPromise(sessionService.setSession(payload))
         // This is the redirect you're looking for, it's now became an action thanks to react-router-redux :)
         .mapTo(push({ url: '/' }))
         .do(() => NProgress.done())
  ));
}
*/
}

{
  /*
  // Test

  const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluc3RyaW5nZXJAZ21haWwuY29tIiwidXNlcm5hbWUiOiJhZG1pbnN0cmluZ2VyIiwicGFzc3dvcmQiOiIkMmIkMTAkeFNkUC5Ed05NZXFNU21xTGdkS0E2dWJGaUZDLzVadVpRUm1LWXhLNFo4WUpkcEdORlJjOE8iLCJyb2xlIjoiU3VwZXIiLCJpYXQiOjE2Nzk0Njk4MzcsImV4cCI6MTY3OTUwMjIzN30.zALmP3GTwOh0WdOI1zX8TPsBCWwpEeDV-DoiZ19ST9A";

export const getUserEpic = (action$: Observable<Action>) =>
  action$.pipe(
    filter(AuthAction.getUserStart.match),
    switchMap<GetUserStartAction, ObservableInput<GetUserCompletedAction>>(
      (action) =>
        ajax({
          url: `${config.BASE_URL_GET_USER}/users/me`,
          method: "GET",
          body: "",
          headers: { Authorization: `Bearer ${token}` },
        }).pipe(
          map<AjaxResponse<any>, GetUserCompletedAction>((response) => {
            console.log("responseGetUser: ", response);
            return {
              type: AuthAction.getUserCompleted.type,
              payload: {
                user: response.response,
              },
            };
          })
        )
    )
  );
  */
}

{
  /*
// Test
type AuthEpic = Epic<LoginStartAction, LoginStartAction, IAuth>;

export const authEpic = (action$: Observable<Action>) =>
  action$.pipe(
    filter(AuthAction.loginStart.match),
    delay(5000),
    switchMap<LoginStartAction, ObservableInput<LoginCompletedAction>>(
      (action) =>
        ajax({
          url: `${config.BASE_URL}/admin/login`,
          method: "POST",
          body: action.payload,
        }).pipe(
          map<AjaxResponse<any>, LoginCompletedAction>((response) => {
            console.log("config.BASE_URL: ", config.BASE_URL);
            console.log("res: ", response);
            console.log("accessToken: ", response.response.accessToken);
            return {
              type: AuthAction.loginCompleted.type,
              payload: {
                token: response.response.accessToken,
              },
            };
          })
        )
    )
  );
  */
}
