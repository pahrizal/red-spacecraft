import { SearchReducer } from "../search/reducer";
import { initialSearchState, SearchState } from "../search/definition";
import configureStore from "./config";
import { ApiState, initialApiState } from "../api/definition";
import { ApiReducer } from "../api/reducer";

export interface AppState {
  api: ApiState;
  search: SearchState;
}

export const initialAppState = {
  api: initialApiState,
  search: initialSearchState,
};

export const reducers = {
  api: ApiReducer,
  search: SearchReducer,
};

export interface ThunkAction<TAction> {
  (dispatch: (action: TAction) => void, getState: () => AppState): void;
}

// redux initial state
export const persistedState: AppState = {
  ...initialAppState,
};

export const store = configureStore(persistedState);
