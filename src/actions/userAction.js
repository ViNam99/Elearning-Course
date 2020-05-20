import { CREDENTIAL_TYPE } from "../constants/userConstants";
import { userService } from "../services";
import { setAuthorization } from "../utils/axios";
export const signInAction = (user, loginSuccess) => (dispatch) => {
  dispatch({
    type: CREDENTIAL_TYPE.SIGNIN_CREDENTIAL_REQUEST,
  });

  userService
    .signIn(user)
    .then((res) => {
      setAuthorization(res.data.accessToken);
      localStorage.setItem("credentials", JSON.stringify(res.data));
      dispatch({
        type: CREDENTIAL_TYPE.SIGNIN_CREDENTIAL_SUCCESS,
        data: res,
      });
      loginSuccess();
    })
    .catch((err) => {
      dispatch({
        type: CREDENTIAL_TYPE.SIGNIN_CREDENTIAL_FAILURE,
        data: err.response.data,
      });
    });
};
export const signUpAction = (data) => (dispatch) => {
  dispatch({
    type: CREDENTIAL_TYPE.SIGNUP_CREDENTIAL_REQUEST,
  });

  userService
    .signUp(data)
    .then((res) => {
      dispatch({
        type: CREDENTIAL_TYPE.SIGNUP_CREDENTIAL_SUCCESS,
        data: res,
      });
    })
    .catch((err) => {
      dispatch({
        type: CREDENTIAL_TYPE.SIGNUP_CREDENTIAL_FAILURE,
        data: err.response.data,
      });
    });
};
export const getPerInforAction = (info) => (dispatch) => {
  dispatch({
    type: CREDENTIAL_TYPE.FETCH_PERSONAL_INFO_REQUEST,
  });

  userService
    .getPerInfor(info)
    .then((res) => {
      dispatch({
        type: CREDENTIAL_TYPE.FETCH_PERSONAL_INFO_SUCCESS,
        data: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: CREDENTIAL_TYPE.FETCH_PERSONAL_INFO_FAILURE,
        data: err.data,
      });
    });
};
