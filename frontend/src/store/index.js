import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from './session';
import opportunityReducer from "./opportunity";
import signupReducer from "./oppSignup";
import locationReducer from "./locations";
import userReducer from "./user";

const rootReducer = combineReducers({
  session: sessionReducer,
  opportunity: opportunityReducer,
  signup: signupReducer,
  location: locationReducer,
  user: userReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
