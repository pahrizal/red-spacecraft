import { People } from "../../../../backend/swapi/schema";
import { initialAppState } from "../../redux";
import configureStore from "../../redux/config";
import { searchActions } from "../action";

describe("Redux Search Action", () => {
  const people: People = {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    birth_year: "19BBY",
    films: [],
    species: [],
    gender: "",
    homeworld: null,
    id: 1,
    imageUrl: "",
    skin_color: "",
    url: "",
  };
  const initialState = {
    ...initialAppState,
    api: {
      ...initialAppState.api,
      peoples: [people, { ...people, name: "sky test2" }],
    },
  };
  const store = configureStore(initialState);

  it("searchPeople correctly", () => {
    const query = "test2";
    searchActions.searchPeople(query)(store.dispatch, store.getState);
    const state = store.getState();
    expect(state.search.query).toBe(query);
    expect(state.search.filteredPeoples).toHaveLength(1);
    expect(state.search.filteredPeoples[0].name).toBe("sky test2");
  });

  it("selectPeople correctly", () => {
    const people = { ...initialState.api.peoples[0] };
    searchActions.selectPeople(people)(store.dispatch, store.getState);
    const state = store.getState();
    expect(state.search.selected).toBe(people);
  });
});
