import * as Sentry from "@sentry/react";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "redux-logger";
import { compose, createStore, combineReducers, applyMiddleware } from "redux";

const APP_INITAL_STATE = { version: 1.0 };
const NEWS_INITIAL_STATE = { news: [], loading: false };

const appReducer = (state = APP_INITAL_STATE) => state;
const newsReducer = (state = NEWS_INITIAL_STATE, { type, payload }) => {
  if (type === "SET_NEWS") {
    return { ...state, news: payload };
  }
  return state;
};

const sentryEnhancer = Sentry.createReduxEnhancer({});
const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);
const composedEnhancers = compose(middlewareEnhancer, sentryEnhancer);
const reducer = combineReducers({ appReducer, newsReducer });
const store = createStore(reducer, undefined, composedEnhancers);

export default store;
