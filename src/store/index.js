import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

//Reducer
import messageReducer from "store/message";
import userReducer from "store/user";
import authReducer from "store/auth";
import collegeReducer from "store/college";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  message: messageReducer,
  college: collegeReducer,
});

//Persist config

const persistConfig = {
  key: "root",
  storage,
};

//persisted reducer

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor };
