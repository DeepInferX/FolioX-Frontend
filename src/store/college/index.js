<<<<<<< HEAD
import axios from "axios";
import message from "store/message";
//constant
const COLLEGE_LIST_REQUEST = "COLLEGE_LIST_REQUEST";
const COLLEGE_LIST_SUCCESS = "COLLEGE_LIST_SUCCESS";
const COLLEGE_LIST_FAILED = "COLLGE_LIST_FAILED";

//action creater

const collgeList = {
  request: () => {
    return {
      type: COLLEGE_LIST_REQUEST,
    };
  },

  succes: (colleges) => {
    return {
      type: COLLEGE_LIST_SUCCESS,
      payload: colleges,
    };
  },

  failed: () => {
    return {
      type: COLLEGE_LIST_FAILED,
    };
  },

  fetch: () => {
    return async (dispatch) => {
      dispatch(collgeList.request());
      try {
        const { data } = await axios.get(
          "http://foliox.deepinferx.in/web/api/gen/colleges"
        );
        console.log(data);
        dispatch(collgeList.succes(data.colleges));
      } catch (error) {
        dispatch(message.error(error.message));
        dispatch(collgeList.failed());
      }
    };
  },
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
export { collgeList };
=======
import axios from "axios";
import  {message} from "store/message";
//constant
const COLLEGE_LIST_REQUEST = "COLLEGE_LIST_REQUEST";
const COLLEGE_LIST_SUCCESS = "COLLEGE_LIST_SUCCESS";
const COLLEGE_LIST_FAILED = "COLLGE_LIST_FAILED";

//action creater

const collgeList = {
  request: () => {
    return {
      type: COLLEGE_LIST_REQUEST,
    };
  },

  succes: (colleges) => {
    return {
      type: COLLEGE_LIST_SUCCESS,
      payload: colleges,
    };
  },

  failed: () => {
    return {
      type: COLLEGE_LIST_FAILED,
    };
  },

  fetch: () => {
    return async (dispatch) => {
      dispatch(collgeList.request());
      try {
        const { data } = await axios.get(
          "http://foliox.deepinferx.in/web/api/gen/colleges"
        );
        console.log(data);
        dispatch(collgeList.succes(data.colleges));
      } catch (error) {
        dispatch(message.error(error.message));
        dispatch(collgeList.failed());
      }
    };
  },
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
export { collgeList };
>>>>>>> 77a5ae5fd88813ece8291b74064a68d97705abdf
