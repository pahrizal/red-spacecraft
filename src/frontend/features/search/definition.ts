import { People } from "../../../backend/swapi/schema";

export interface SearchState {
  busy: boolean;
  query: string;
  filteredPeoples: People[];
  selected: People | null;
}

export const initialSearchState: SearchState = {
  busy: false,
  query: "",
  filteredPeoples: [],
  selected: null,
};

interface SearchActionTypes {
  readonly SET_BUSY: "SEARCH_SET_BUSY";
  readonly SET_QUERY: "SEARCH_SET_QUERY";
  readonly SET_FILTERED_PEOPLES: "SEARCH_SET_FILTERED_PEOPLE";
  readonly SET_SELECTED: "SEARCH_SET_SELECTED";
}

export const searchActionTypes: SearchActionTypes = {
  SET_BUSY: "SEARCH_SET_BUSY",
  SET_QUERY: "SEARCH_SET_QUERY",
  SET_FILTERED_PEOPLES: "SEARCH_SET_FILTERED_PEOPLE",
  SET_SELECTED: "SEARCH_SET_SELECTED",
};

interface SetBusy {
  type: typeof searchActionTypes.SET_BUSY;
  payload: typeof initialSearchState.busy;
}

interface SetQuery {
  type: typeof searchActionTypes.SET_QUERY;
  payload: typeof initialSearchState.query;
}

interface SetFilteredPeople {
  type: typeof searchActionTypes.SET_FILTERED_PEOPLES;
  payload: typeof initialSearchState.filteredPeoples;
}

interface SetSelected {
  type: typeof searchActionTypes.SET_SELECTED;
  payload: typeof initialSearchState.selected;
}

export type SearchActions =
  | SetBusy
  | SetQuery
  | SetFilteredPeople
  | SetSelected;
