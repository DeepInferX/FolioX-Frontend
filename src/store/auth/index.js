import axios from "axios";
import {message} from "store/message";
//constant
const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILED = "LOGIN_FAILED";

//action creater


  const login =  (user) => {
    return async (dispatch) => {
      dispatch({
        type: LOGIN_REQUEST
      });
      try {
        const { data } = await axios.post(
          "http://foliox.deepinferx.in/web/api/admin/login",
          user
        );
        //success
        if (data.success === 1) {
          delete data.success
          dispatch({type: LOGIN_SUCCESS, payload: data});
          
        }
        //failed
        if(data.success === 0){
          throw  (data.message)          
        }
      } catch (error) {
        console.log(error)
        dispatch({type: LOGIN_FAILED});
        dispatch(message.error(error))
      }
    };
  };

  // cosnt logout = () => {}



const register = (newUser) => {};



//Reducer

const initialAuthState = {
  isLoading: false,
  user: {},
};

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export { login, register };

export default authReducer;
