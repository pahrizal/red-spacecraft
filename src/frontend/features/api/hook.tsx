import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../redux";
import { apiActions } from "./action";

export function useApi() {
  const { peoples, busy, currentPeople } = useSelector(
    (state: AppState) => state.api
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (peoples.length === 0) {
      dispatch(apiActions.fetchAllPeople());
    }
  }, [dispatch, peoples]);
  const fetchPeopleById = useCallback(
    (id: number) => {
      dispatch(apiActions.fetchPeopleById(id));
    },
    [dispatch]
  );
  return {
    peoples,
    busy,
    currentPeople,
    fetchPeopleById,
  };
}
