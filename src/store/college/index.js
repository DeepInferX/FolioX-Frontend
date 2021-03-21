import axios from "axios";
import { notificationClear,notificationError,notificationSuccess } from "store/notification";

//constant
const COLLEGE_LIST_REQUEST = "COLLEGE_LIST_REQUEST";
const COLLEGE_LIST_SUCCESS = "COLLEGE_LIST_SUCCESS";
const COLLEGE_LIST_FAILED = "COLLGE_LIST_FAILED";

//action creater

const collegeListRequested = () => {
  return {
    type: COLLEGE_LIST_REQUEST,
    isLoading: true,
  };
};

const collegeListSuccess = (colleges) => {
  return {
    type: COLLEGE_LIST_SUCCESS,
    payload: colleges,
    isLoading: false,
  };
};

const collegeListFailed = () => {
  return {
    type: COLLEGE_LIST_FAILED,
    isLoading: false,
  };
};

const loadCollegeList = () => {
  return async (dispatch) => {
    dispatch(collegeListRequested());

    try {
      const { data } = await axios.get("/gen/colleges");
      if (data.success === 0) {
        throw { message: "Something went wrong." };
      }
      dispatch(collegeListSuccess(data.colleges));
    } catch (error) {
      dispatch(notificationError(error.message));
      dispatch(collegeListFailed());
    }
  };
};

//reducer

const initialCollegeState = {
  list: [],
};

const collegeReducer = (state = initialCollegeState, action) => {
  switch (action.type) {
    case COLLEGE_LIST_REQUEST:
      return {
        ...state,
      };

    case COLLEGE_LIST_SUCCESS:
      return {
        ...state,
        list: action.payload,
      };

    case COLLEGE_LIST_FAILED:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default collegeReducer;
export { loadCollegeList };
