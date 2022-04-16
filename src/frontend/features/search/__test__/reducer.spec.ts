import { People } from "../../../../backend/swapi/schema";
import { searchActions } from "../action";
import { initialSearchState, searchActionTypes } from "../definition";
import { SearchReducer } from "../reducer";

describe("Search reducer test", () => {
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

  it("set busy state correctly", () => {
    let state = SearchReducer(initialSearchState, {
      type: searchActionTypes.SET_BUSY,
      payload: true,
    });
    expect(state.busy).toBe(true);

    state = SearchReducer(initialSearchState, {
      type: searchActionTypes.SET_BUSY,
      payload: false,
    });
    expect(state.busy).toBe(false);
  });

  it("set query state correctly", () => {
    let state = SearchReducer(initialSearchState, {
      type: searchActionTypes.SET_QUERY,
      payload: "test",
    });
    expect(state.query).toBe("test");
  });

  it("set filteredPeople state correctly", () => {
    let state = SearchReducer(initialSearchState, {
      type: searchActionTypes.SET_FILTERED_PEOPLES,
      payload: [people],
    });
    expect(state.filteredPeoples).toEqual([people]);
  });

  it("set selected people state correctly", () => {
    let state = SearchReducer(initialSearchState, {
      type: searchActionTypes.SET_SELECTED,
      payload: people,
    });
    expect(state.selected).toEqual(people);
  });
});
