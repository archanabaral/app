import { applyMiddleware, createStore, compose } from "redux";
import { persistStore } from "redux-persist";

import createSagaMiddleware from "redux-saga";

import reducer from "./reducers/index";
import watcherSaga from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

export const persistor = persistStore(store);

sagaMiddleware.run(watcherSaga);
