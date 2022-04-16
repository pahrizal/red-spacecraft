import { People } from "../../../backend/swapi/schema";
import { Fetch } from "../../utils/fetch";
import { ThunkAction } from "../redux";
import {
  apiActionTypes,
  SetBusy,
  SetCurrentPeople,
  SetError,
  SetPeoples,
} from "./definition";

export type ApiActions = SetBusy | SetError | SetPeoples | SetCurrentPeople;

export const apiActions = {
  /**
   * a dispatch action to fetch all peoples data from the backend
   * @returns
   */
  fetchAllPeople: (): ThunkAction<ApiActions> => {
    return async (dispatch, getState) => {
      // set busy state to true
      dispatch({
        type: apiActionTypes.SET_BUSY,
        payload: true,
      });

      // start fetching all peoples data
      try {
        const results = await Fetch<People[]>("/api/person");
        // set peoples state
        dispatch({
          type: apiActionTypes.SET_PEOPLES,
          payload: results,
        });
      } catch (err) {
        // set error state
        dispatch({
          type: apiActionTypes.SET_ERROR,
          payload: "Error fetching peoples",
        });
      }

      // set busy state to false
      dispatch({
        type: apiActionTypes.SET_BUSY,
        payload: false,
      });
    };
  },
  /**
   * a dispatch action to fetch people by their id
   * @param id:number people id
   * @returns
   */
  fetchPeopleById: (id: number): ThunkAction<ApiActions> => {
    return async (dispatch, getState) => {
      // set busy state to true
      dispatch({
        type: apiActionTypes.SET_BUSY,
        payload: true,
      });

      // start fetching people data
      try {
        const result = await Fetch<People>(`/api/person/${id}`);
        // set peoples state
        dispatch({
          type: apiActionTypes.SET_CURRENT_PEOPLE,
          payload: result,
        });
      } catch (err) {
        // set error state
        dispatch({
          type: apiActionTypes.SET_ERROR,
          payload: `Error fetching people by Id: ${id}`,
        });
      }

      // set busy state to false
      dispatch({
        type: apiActionTypes.SET_BUSY,
        payload: false,
      });
    };
  },
};
