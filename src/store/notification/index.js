//constant
const NOTIFICATION_SUCCESS = "MESSAGE_SUCCESS";
const NOTIFICATION_ERROR = "NOTIFICATION_ERROR";
const NOTIFICATION_CLEAR = "NOTIFICATION_CLEAR";

//action creater
const notificationSuccess = (message) => {
  return {
    type: NOTIFICATION_SUCCESS,
    payload: {
      message,
      type: 'success'
    },
  };
};

const notificationError = (message) => {
  return {
    type: NOTIFICATION_ERROR,
    payload: {
      message,
      type: 'error'
    },
  };
};

const notificationClear = () => {
  return {
    type: NOTIFICATION_CLEAR,
  };
};

//reducer
const initialMessageState = {
  message: null,
  type: null,
};

const notificationReducer = (state = initialMessageState, action) => {
  switch (action.type) {
    case NOTIFICATION_SUCCESS:
      return {
        message: action.payload.message,
        type: action.payload.type
      };

    case NOTIFICATION_ERROR:
      return {
        message: action.payload.message,
        type: action.payload.type
      };
    case NOTIFICATION_CLEAR:
      return initialMessageState;

    default:
      return state;
  }
};

export { notificationSuccess, notificationError, notificationClear };

export default notificationReducer;
