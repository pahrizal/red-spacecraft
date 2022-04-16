import { People } from "../../../backend/swapi/schema";

export interface ApiState {
  busy: boolean;
  error: string;
  peoples: People[];
  currentPeople: People | null;
}

export const initialApiState: ApiState = {
  busy: false,
  error: "",
  peoples: [],
  currentPeople: null,
};

interface ApiActionTypes {
  readonly SET_BUSY: "API_SET_BUSY";
  readonly SET_ERROR: "API_SET_ERROR";
  readonly SET_PEOPLES: "API_SET_PEOPLES";
  readonly SET_CURRENT_PEOPLE: "API_SET_CURRENT_PEOPLE";
}

export const apiActionTypes: ApiActionTypes = {
  SET_BUSY: "API_SET_BUSY",
  SET_ERROR: "API_SET_ERROR",
  SET_PEOPLES: "API_SET_PEOPLES",
  SET_CURRENT_PEOPLE: "API_SET_CURRENT_PEOPLE",
};

export interface SetBusy {
  type: typeof apiActionTypes.SET_BUSY;
  payload: typeof initialApiState.busy;
}

export interface SetError {
  type: typeof apiActionTypes.SET_ERROR;
  payload: typeof initialApiState.error;
}

export interface SetPeoples {
  type: typeof apiActionTypes.SET_PEOPLES;
  payload: typeof initialApiState.peoples;
}

export interface SetCurrentPeople {
  type: typeof apiActionTypes.SET_CURRENT_PEOPLE;
  payload: typeof initialApiState.currentPeople;
}
