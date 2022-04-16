import { People } from "../../../backend/swapi/schema";

export interface SearchState {
  busy: boolean;
  query: string;
  filteredPeoples: People[];
}

export const initialSearchState: SearchState = {
  busy: false,
  query: "",
  filteredPeoples: [],
};

interface SearchActionTypes {
  readonly SET_BUSY: "SEARCH_SET_BUSY";
  readonly SET_QUERY: "SEARCH_SET_QUERY";
  readonly SET_FILTERED_PEOPLES: "SEARCH_SET_FILTERED_PEOPLE";
}

export const searchActionTypes: SearchActionTypes = {
  SET_BUSY: "SEARCH_SET_BUSY",
  SET_QUERY: "SEARCH_SET_QUERY",
  SET_FILTERED_PEOPLES: "SEARCH_SET_FILTERED_PEOPLE",
};

export interface SetBusy {
  type: typeof searchActionTypes.SET_BUSY;
  payload: typeof initialSearchState.busy;
}

export interface SetQuery {
  type: typeof searchActionTypes.SET_QUERY;
  payload: typeof initialSearchState.query;
}

export interface SetFilteredPeople {
  type: typeof searchActionTypes.SET_FILTERED_PEOPLES;
  payload: typeof initialSearchState.filteredPeoples;
}
