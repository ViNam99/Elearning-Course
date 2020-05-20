import { CREDENTIAL_TYPE } from "../constants/userConstants";

const initialState = {
  credentials: {},
  currentAccount: {},
  status: null,
  statusLoginSuccess: null,
  err: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREDENTIAL_TYPE.SIGNIN_CREDENTIAL_SUCCESS:
      let credentials = { ...state.credentials };
      action.data.status === undefined
        ? (credentials = action.data)
        : (credentials = action.data.data);
      return {
        ...state,
        credentials,
        statusLoginSuccess: action.data.status,
      };
    case CREDENTIAL_TYPE.SIGNUP_CREDENTIAL_SUCCESS:
      return {
        ...state,
        currentAccount: action.data.data,
        status: action.data.status,
      };
    case CREDENTIAL_TYPE.SIGNUP_CREDENTIAL_FAILURE:
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
