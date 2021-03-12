import axios from "axios";
import message from "store/message";

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
      dispatch(collegeListSuccess(data.colleges));
    } catch (error) {
      dispatch(message.error(error.message));
      dispatch(collegeListFailed());
    }
  };
};

//reducer

const initialCollegeState = {
  isLoading: false,
  list: [],
};

const collegeReducer = (state = initialCollegeState, action) => {
  switch (action.type) {
    case COLLEGE_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case COLLEGE_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      };

    case COLLEGE_LIST_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default collegeReducer;
export { loadCollegeList };
