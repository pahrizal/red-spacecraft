import { useEffect } from "react";
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

  return {
    peoples,
    busy,
    currentPeople,
  };
}
