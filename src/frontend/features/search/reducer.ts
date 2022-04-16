import { SearchActions } from "./action";
import {
  initialSearchState,
  searchActionTypes,
  SearchState,
} from "./definition";

export const SearchReducer = (
  state: SearchState = initialSearchState,
  action: SearchActions
): SearchState => {
  if (state === undefined) {
    return initialSearchState;
  }
  switch (action.type) {
    case searchActionTypes.SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    case searchActionTypes.SET_BUSY:
      return {
        ...state,
        busy: action.payload,
      };
    case searchActionTypes.SET_FILTERED_PEOPLES:
      return {
        ...state,
        filteredPeoples: action.payload,
      };
    default:
      return state;
  }
};
