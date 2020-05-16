import createRequestTypes from "./request";
export const CREDENTIAL_TYPE = {
  ...createRequestTypes("CREDENTIAL", "SIGNIN_CREDENTIAL"),
  ...createRequestTypes("CREDENTIAL", "SIGNUP_CREDENTIAL"),
  ...createRequestTypes("CREDENTIAL", "FETCH_PERSONAL_INFO"),
};
