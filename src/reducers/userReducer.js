import { CREDENTIAL_TYPE } from "../constants/userConstants";

const initialState = {
  credentials: {},
  err: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREDENTIAL_TYPE.FETCH_CREDENTIAL_SUCCESS:
      return { ...state, credentials: action.data };
    case CREDENTIAL_TYPE.FETCH_CREDENTIAL_FAILURE:
      return { ...state, err: action.data };
    default:
      return state;
  }
};
export default userReducer;
