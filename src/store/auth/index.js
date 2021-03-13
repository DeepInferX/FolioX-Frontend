import axios from "axios";
import * as message from "store/message";

//constant
const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILED = "LOGIN_FAILED";

//action creater

const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
    isLoading: true,
  };
};

const loginFailed = () => {
  return {
    type: LOGIN_FAILED,
    isLoading: false,
  };
};

const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
    isLoading: false,
  };
};

const login = (user) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const { data } = await axios.post(
        "http://foliox.deepinferx.in/web/api/admin/login",
        user
      );

      //success
      if (data.success === 1) {
        delete data.success;
        dispatch(loginSuccess(data));
      }

      //login failed
      else {
        delete data.success;
        throw data;
      }
    } catch (error) {
      dispatch(loginFailed());
      dispatch(message.messageError(error.message));
    }
  };
};

const register = (newUser) => {};

const logout = () => {};

//Reducer

const initialAuthState = {
  user: {},
};

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };

    case LOGIN_FAILED:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export { login, loginSuccess, loginRequest, loginFailed, register, logout };

export default authReducer;
