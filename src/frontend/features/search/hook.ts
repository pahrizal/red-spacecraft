import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiActions } from "../api/action";
import { AppState } from "../redux";
import { searchActions } from "./action";

/**
 * a hook to use search functionality
 */
export function useSearch() {
  const dispatch = useDispatch();
  const { query, filteredPeoples, busy } = useSelector(
    (state: AppState) => state.search
  );
  const peoples = useSelector((state: AppState) => state.api.peoples);
  const searchPeople = useCallback(
    (keyword: string) => {
      dispatch(searchActions.searchPeople(keyword));
    },
    [dispatch]
  );

  // dispatch an api action to fetch all peoples from the backend
  // if its not already fetched
  useEffect(() => {
    if (peoples.length === 0) {
      dispatch(apiActions.fetchAllPeople());
    }
  }, [dispatch, peoples]);

  return {
    busy,
    query,
    filteredPeoples,
    searchPeople,
  };
}
