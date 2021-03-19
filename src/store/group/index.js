import axios from "axios";
import { messageClear, messageError, messageSuccess } from "store/message";

//constant
const GROUP_LOAD_REQUEST = "GROUP_REQUEST";
const GROUP_LOAD_SUCCESS = "GROUP_SUCCESS";
const GROUP_LOAD_FAILED = "GROUP_FAILED";

const GROUP_DELETE_REQUEST = "GROUP_DELETE_REQUEST";
const GROUP_DELETE_SUCCESS = "GROUP_DELETE_SUCCESS";
const GROUP_DELETE_FAILED = "GROUP_DELETE_FAILED";

const DELETE_STUDENT_REQUEST = "DELETE_STUDENT_REQUEST";
const DELETE_STUDENT_SUCCESS = "DELETE_STUDENT_SUCCESS";
const DELETE_STUDENT_FAILED = "DELETE_STUDENT_FAILED";

const UPDATE_STUDENT_REQUEST = "UPDATE_STUDENT_REQUEST";
const UPDATE_STUDENT_SUCCESS = "UPDATE_STUDENT_SUCCESS";
const UPDATE_STUDENT_FAILED = "UPDATE_STUDENT_FAILED";

//action creater

const loadGroupsRequest = () => {
  return {
    type: GROUP_LOAD_REQUEST,
    isLoading: true,
  };
};
const loadGroupsSuccess = (groups) => {
  return {
    type: GROUP_LOAD_SUCCESS,
    payload: groups,
    isLoading: false,
  };
};

const loadGroupsFailed = () => {
  return {
    type: GROUP_LOAD_FAILED,
    isLoading: false,
  };
};

const loadGroups = (id) => {
  return async (dispatch) => {
    dispatch(loadGroupsRequest());
    try {
      const res = await axios(
        `http://foliox.deepinferx.in/web/api/admin/students/groups/get?admin=${id}`
      );
      const {
        data: { groups },
      } = res;
      dispatch(loadGroupsSuccess(groups));
    } catch (error) {
      dispatch(loadGroupsFailed());
      dispatch(messageError(error.message));
    }
  };
};

const deleteGroupRequest = () => ({
  type: GROUP_DELETE_REQUEST,
  isLoading: true,
});

const deleteGroupSuccess = () => ({
  type: GROUP_DELETE_SUCCESS,
  isLoading: true,
});

const deleteGroupFailed = () => ({
  type: GROUP_LOAD_FAILED,
  isLoading: true,
});

const deleteGroup = (group_id, admin_id) => {
  return async (dispatch) => {
    dispatch(deleteGroupRequest());

    try {
      const res = await axios({
        method: "post",
        url: "http://foliox.deepinferx.in/web/api/admin/students/groups/delete",
        headers: {
          "Access-Control-Max-Age": "6000",
        },
        data: {
          admin: admin_id,
          group: group_id,
        },
      });
      console.log(res);
      if (res.data.success === 0) {
        throw res.data;
      }
      dispatch(deleteGroupSuccess());
      dispatch(messageSuccess(res.data.message));
    } catch (error) {
      dispatch(deleteGroupFailed());
      dispatch(messageError(error.message));
    }
  };
};

const deleteStudent = (student, admin_id) => {
  return async (dispatch) => {
    dispatch({
      type: DELETE_STUDENT_REQUEST,
      isLoading: true,
    });
    try {
      const { id } = student;
      const res = await axios.post("/admin/students/delete", {
        admin_id,
        student_id: id,
      });

      if (res.data.success === 0) {
        throw { message: res.data.message };
      }
      dispatch({ type: DELETE_STUDENT_SUCCESS, isLoading: false });
      dispatch(messageSuccess(res.data.message));
    } catch (error) {
      dispatch({
        type: DELETE_STUDENT_FAILED,
        isLoading: false,
      });
      dispatch(messageError(error.message));
    }
  };
};

const updateStudent = (student, admin_id) => {
  return async (dispatch) => {
    dispatch({
      type: UPDATE_STUDENT_REQUEST,
      isLoading: true,
    });

    try {
      const res = await axios.post("/admin/students/update", {
        admin_id,
        student_id: student.id,
        name: student.name,
        email: student.email,
        mobile: student.mobile,
        pass: student.password,
      });
      if (res.data.success === 0) throw { message: res.data.message };
      dispatch({ type: UPDATE_STUDENT_SUCCESS, isLoading: false });
      dispatch(messageSuccess(res.data.message));
    } catch (error) {
      dispatch({ type: UPDATE_STUDENT_FAILED, isLoading: false });
      dispatch(messageError(error.message));
    }
  };
};

//reducer

const groupReducer = (state = {}, action) => {
  switch (action.type) {
    case GROUP_LOAD_REQUEST:
      return {
        ...state,
      };

    case GROUP_LOAD_SUCCESS:
      return {
        ...state,
        groups: action.payload,
      };

    case GROUP_LOAD_FAILED:
      return {
        ...state,
      };

    case GROUP_DELETE_SUCCESS:
      return {
        ...state,
      };

    case GROUP_DELETE_FAILED:
      return {
        ...state,
      };

    default:
      return state;
  }
};

//export

export default groupReducer;
export { loadGroups, deleteGroup, deleteStudent, updateStudent };
