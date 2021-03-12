import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

//Reducer
import messageReducer from "store/message";
import groupReducer from "store/group";
import authReducer from "store/auth";
import collegeReducer from "store/college";
import isLoadingReducer from "store/isLoading";

const rootReducer = combineReducers({
  auth: authReducer,
  group: groupReducer,
  message: messageReducer,
  college: collegeReducer,
  loading: isLoadingReducer,
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
