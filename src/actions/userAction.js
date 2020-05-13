import { CREDENTIAL_TYPE } from "../constants/userConstants";
import { userService } from "../services";
import { setAuthorization } from "../utils/axios";

export const signInAction = (user, loginSuccess) => (dispatch) => {
  dispatch({
    type: CREDENTIAL_TYPE.FETCH_CREDENTIAL_REQUEST,
  });

  userService
    .signIn(user)
    .then((res) => {
      setAuthorization(res.data.accessToken);
      dispatch({
        type: CREDENTIAL_TYPE.FETCH_CREDENTIAL_SUCCESS,
        data: res.data,
      });
      localStorage.setItem("credentials", JSON.stringify(res.data.accessToken));
      loginSuccess();
    })
    .catch((err) => {
      dispatch({
        type: CREDENTIAL_TYPE.FETCH_CREDENTIAL_FAILURE,
        data: err.response.data,
      });
    });
};
