import { ApiActions } from "./action";
import { apiActionTypes, ApiState, initialApiState } from "./definition";

export const ApiReducer = (
  state: ApiState = initialApiState,
  action: ApiActions
): ApiState => {
  if (state === undefined) {
    return initialApiState;
  }
  switch (action.type) {
    case apiActionTypes.SET_BUSY:
      return {
        ...state,
        busy: action.payload,
      };
    case apiActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case apiActionTypes.SET_PEOPLES:
      return {
        ...state,
        peoples: action.payload,
      };
    case apiActionTypes.SET_CURRENT_PEOPLE:
      return {
        ...state,
        currentPeople: action.payload,
      };
    default:
      return state;
  }
};
