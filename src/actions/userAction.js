import { CREDENTIAL_TYPE } from "../constants/userConstants";
import { userService } from "../services";

export const signInAction = (user,loginSuccess) => (dispatch) => {
  dispatch({
    type: CREDENTIAL_TYPE.FETCH_CREDENTIAL_REQUEST,
  });

  userService
    .signIn(user)
    .then((res) => {
      dispatch({
        type: CREDENTIAL_TYPE.FETCH_CREDENTIAL_SUCCESS,
        data: res.data,
      });
      localStorage.setItem("credentials",JSON.stringify(res.data));
      loginSuccess();
    })
    .catch((err) => { 
      dispatch({
        type: CREDENTIAL_TYPE.FETCH_CREDENTIAL_FAILURE,
        data: err.response.data
      });
    });
};
