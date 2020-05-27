import createRequestTypes from './request';
export const COURSES_TYPE = {
    ...createRequestTypes("COURSES" , "FETCH_LIST"),
    ...createRequestTypes("COURSES" , "FETCH_LIST_SLICE")

}