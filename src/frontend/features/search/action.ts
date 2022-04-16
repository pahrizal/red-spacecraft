import { People } from "../../../backend/swapi/schema";
import { ThunkAction } from "../redux";
import {
  searchActionTypes,
  SetBusy,
  SetFilteredPeople,
  SetQuery,
} from "./definition";

export type SearchActions = SetBusy | SetQuery | SetFilteredPeople;

export const searchActions = {
  /**
   * a dispatch action to search peoples by name to match the keyword
   * @param query:string a keyword that will be matched to peoples name
   * @returns
   */
  searchPeople: (query: string): ThunkAction<SearchActions> => {
    return (dispatch, getState) => {
      // set busy state to true
      dispatch({
        type: searchActionTypes.SET_BUSY,
        payload: true,
      });

      // set search query
      dispatch({
        type: searchActionTypes.SET_QUERY,
        payload: query,
      });

      // start searching (by filtering the peoples list)
      const peoples = getState().api.peoples;
      const filteredPeoples = peoples.filter((people: People) =>
        people.name.toLowerCase().includes(query.toLowerCase())
      );

      //update filtered data to state
      dispatch({
        type: searchActionTypes.SET_FILTERED_PEOPLES,
        payload: filteredPeoples,
      });

      // set busy state to false
      dispatch({
        type: searchActionTypes.SET_BUSY,
        payload: false,
      });
    };
  },
};
