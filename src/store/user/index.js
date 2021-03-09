import axios from "axios";
import { messageClear, messageError, messageSuccess } from "store/message";

//constant
const GROUP_REQUEST = "GROUP_REQUEST";
const GROUP_SUCCESS = "GROUP_SUCCESS";
const GROUP_FAILED = "GROUP_FAILED";

//action creater

const loadGroupsSuccess = (groups) => {
  return {
    type: GROUP_SUCCESS,
    payload: groups,
  };
};

const loadGroupsRequest = () => {
  return {
    type: GROUP_REQUEST,
  };
};

const loadGroupsFailed = () => {
  return {
    type: GROUP_FAILED,
  };
};

const loadGroups = (id) => {
  return async (dispatch) => {
    dispatch(loadGroupsRequest());
    // try {
    //   const res = await axios(
    //     `http://foliox.deepinferx.in/web/api/admin/students/groups/get?admin=${id}`
    //   );
    //   console.log(res);
    // } catch (error) {
    //   dispatch(loadGroupsFailed());
    //   dispatch(messageError(error.message));
    // }

    const groups = [
      {
        id: 1,
        name: "group 1",
      },
      {
        id: 2,
        name: "group 2",
      },
      {
        id: 3,
        name: "group 3",
      },
      {
        id: 4,
        name: "group 4",
      },
    ];

    setTimeout(() => {
      dispatch(loadGroupsSuccess(groups));
    }, 3000);
  };
};

//reducer

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case GROUP_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GROUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        groups: action.payload,
      };

    case GROUP_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

//export

export default userReducer;
export { loadGroups };
