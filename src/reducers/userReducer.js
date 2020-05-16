import { CREDENTIAL_TYPE } from "../constants/userConstants";

const initialState = {
  credentials: {},
  currentAccount: {},
  status: null,
  err: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREDENTIAL_TYPE.SIGNIN_CREDENTIAL_SUCCESS:
      return {
        ...state,
        credentials: action.data,
      };
    case CREDENTIAL_TYPE.SIGNUP_CREDENTIAL_SUCCESS:
      return {
        ...state,
        currentAccount: action.data.data,
        status: action.data.status,
      };
    case CREDENTIAL_TYPE.SIGNUP_CREDENTIAL_FAILURE:
      console.log(action.data);
      return { ...state, err: action.data };

    case CREDENTIAL_TYPE.FETCH_PERSONAL_INFO_SUCCESS:
      return { ...state };
    case CREDENTIAL_TYPE.SIGNIN_CREDENTIAL_FAILURE:
      return { ...state, err: action.data };
    default:
      return state;
  }
};
export default userReducer;
