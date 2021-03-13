import axios from "axios";
import { messageClear, messageError, messageSuccess } from "store/message";

//constant
const GROUP_LOAD_REQUEST = "GROUP_REQUEST";
const GROUP_LOAD_SUCCESS = "GROUP_SUCCESS";
const GROUP_LOAD_FAILED = "GROUP_FAILED";

const GROUP_DELETE_REQUEST = "GROUP_DELETE_REQUEST";
const GROUP_DELETE_SUCCESS = "GROUP_DELETE_SUCCESS";
const GROUP_DELETE_FAILED = "GROUP_DELETE_FAILED";

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

    //delete group by group id
    case GROUP_DELETE_REQUEST:
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
export { loadGroups, deleteGroup };
