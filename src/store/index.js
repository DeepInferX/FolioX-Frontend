import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

//Reducer
import messageReducer from "store/message";
// import userReducer from "store/user";
import authReducer from "store/auth";
import collegeReducer from "store/college";

const rootReducer = combineReducers({
  auth: authReducer,
  // user: userReducer,
  message: messageReducer,
  college: collegeReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
