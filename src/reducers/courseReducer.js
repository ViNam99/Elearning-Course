import { COURSES_TYPE } from "../constants/courseConstant";

const initialState  = {
    courseList : [],
    loading : false,
    error : null,
}
const courseReducer = (state = initialState , action) => {
    switch (action.type) {
        case COURSES_TYPE.FETCH_LIST_REQUEST:
            return {...state , loading:true};
        case COURSES_TYPE.FETCH_LIST_SUCCESS:
            console.log(action.data);
            return {...state , loading:false , courseList:action.data};
        default:
            return state;
    }
}
export default courseReducer;