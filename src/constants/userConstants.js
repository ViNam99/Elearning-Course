import createRequestTypes from "./request";
export const CREDENTIAL_TYPE = {
  ...createRequestTypes("CREDENTIAL", "FETCH_CREDENTIAL"),
  ...createRequestTypes("CREDENTIAL", "FETCH_PERSONAL_INFO"),
};
