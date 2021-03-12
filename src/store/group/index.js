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

const loadGroupsSuccess = (groups) => {
  return {
    type: GROUP_LOAD_SUCCESS,
    payload: groups,
  };
};

const loadGroupsRequest = () => {
  return {
    type: GROUP_LOAD_REQUEST,
  };
};

const loadGroupsFailed = () => {
  return {
    type: GROUP_LOAD_FAILED,
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
      console.log(groups);
    } catch (error) {
      dispatch(loadGroupsFailed());
      dispatch(messageError(error.message));
    }
  };
};

const deleteGroup = (group_id, admin_id) => {
  return async (dispatch) => {
    dispatch({ type: GROUP_DELETE_REQUEST });

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
      const { success } = res.data;
      if (success === 0) {
        throw res.data;
      }
      dispatch({ type: GROUP_DELETE_SUCCESS });
      dispatch(messageSuccess(res.data.message));
    } catch (error) {
      dispatch({ type: GROUP_DELETE_FAILED });
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
        isLoading: true,
      };

    case GROUP_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        groups: action.payload,
      };

    case GROUP_LOAD_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    //delete group by group id
    case GROUP_DELETE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GROUP_DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case GROUP_DELETE_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

//export

export default groupReducer;
export { loadGroups, deleteGroup };
