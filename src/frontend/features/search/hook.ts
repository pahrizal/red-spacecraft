import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { People } from "../../../backend/swapi/schema";
import { apiActions } from "../api/action";
import { AppState } from "../redux";
import { searchActions } from "./action";

/**
 * a hook to use search functionality
 */
export function useSearch() {
  const dispatch = useDispatch();
  const { query, filteredPeoples, busy, selected } = useSelector(
    (state: AppState) => state.search
  );
  const peoples = useSelector((state: AppState) => state.api.peoples);
  const searchPeople = useCallback(
    (keyword: string) => {
      dispatch(searchActions.searchPeople(keyword));
    },
    [dispatch]
  );
  const setSelected = useCallback(
    (people: People | null) => {
      dispatch(searchActions.selectPeople(people));
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
    setSelected,
    selected,
  };
}
