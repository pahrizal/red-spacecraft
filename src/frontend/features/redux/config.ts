import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { AppState, reducers } from ".";
import { composeWithDevTools } from "redux-devtools-extension";

const bindMiddleware = (middleware: any) => {
  const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25,
  });
  // use redux devtools only in development mode
  if (process.env.NODE_ENV !== "production") {
    return composeEnhancers(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const configureStore = (initialState: AppState) => {
  const middleware = [thunk];
  const rootReducer = combineReducers({
    ...reducers,
  });
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware(middleware)
  );
  return store;
};

export default configureStore;
