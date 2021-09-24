import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { userSigninReducer } from "../reducers/users";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userSigninReducer"],
};

const reducer = combineReducers({
  userSigninReducer,
});

export default persistReducer(persistConfig, reducer);
