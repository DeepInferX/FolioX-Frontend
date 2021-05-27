import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

//Reducer
import notificationReducer from "store/notification";
import groupReducer from "store/group";
import authReducer from "store/auth";
import collegeReducer from "store/college";
import isLoadingReducer from "store/isLoading";
import modalReducer from "store/modal";
import courseReducer from "store/course";
import jobReducer from "store/job";

const rootReducer = combineReducers({
  auth: authReducer,
  group: groupReducer,
  notification: notificationReducer,
  college: collegeReducer,
  loading: isLoadingReducer,
  modal: modalReducer,
  course: courseReducer,
  jobs: jobReducer,
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
