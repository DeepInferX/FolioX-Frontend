//constant
const MESSAGE_SUCCESS = "MESSAGE_SUCCESS";
const MESSAGE_ERROR = "MESSAGE_ERROR";
const MESSAGE_CLEAR = "MESSAGE_CLEAR";

//action creater
const messageSuccess = (message) => {
  return {
    type: MESSAGE_SUCCESS,
    payload: message,
  };
};

const messageError = (message) => {
  return {
    type: MESSAGE_ERROR,
    payload: message,
  };
};

const messageClear = () => {
  return {
    type: MESSAGE_CLEAR,
  };
};

//reducer
const initialMessageState = {
  success: null,
  error: null,
};

const messageReducer = (state = initialMessageState, action) => {
  switch (action.type) {
    case MESSAGE_SUCCESS:
      return {
        success: action.payload,
      };

    case MESSAGE_ERROR:
      return {
        error: action.payload,
      };
    case MESSAGE_CLEAR:
      return initialMessageState;

    default:
      return state;
  }
};

export { messageSuccess, messageError, messageClear };

export default messageReducer;
