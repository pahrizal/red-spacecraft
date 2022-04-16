import { People } from "../../../../backend/swapi/schema";
import { apiActionTypes, initialApiState } from "../definition";
import { ApiReducer } from "../reducer";

describe("API reducer test", () => {
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
    const stateTrue = ApiReducer(initialApiState, {
      type: apiActionTypes.SET_BUSY,
      payload: true,
    });
    expect(stateTrue.busy).toBe(true);

    const stateFalse = ApiReducer(initialApiState, {
      type: apiActionTypes.SET_BUSY,
      payload: false,
    });
    expect(stateFalse.busy).toBe(false);
  });

  it("set error state correctly", () => {
    const stateError = ApiReducer(initialApiState, {
      type: apiActionTypes.SET_ERROR,
      payload: "Error",
    });
    expect(stateError.error).toBe("Error");

    const stateEmpty = ApiReducer(initialApiState, {
      type: apiActionTypes.SET_ERROR,
      payload: "",
    });
    expect(stateEmpty.error).toBe("");
  });

  it("set peoples state correctly", () => {
    const peoples: People[] = [people];
    const statePeoples = ApiReducer(initialApiState, {
      type: apiActionTypes.SET_PEOPLES,
      payload: peoples,
    });
    expect(statePeoples.peoples).toEqual(peoples);

    const stateEmpty = ApiReducer(initialApiState, {
      type: apiActionTypes.SET_PEOPLES,
      payload: [],
    });
    expect(stateEmpty.peoples).toEqual([]);
  });

  it("set current people state correctly", () => {
    const statePeople = ApiReducer(initialApiState, {
      type: apiActionTypes.SET_CURRENT_PEOPLE,
      payload: people,
    });
    expect(statePeople.currentPeople).toEqual(people);

    const stateEmpty = ApiReducer(initialApiState, {
      type: apiActionTypes.SET_CURRENT_PEOPLE,
      payload: null,
    });
    expect(stateEmpty.currentPeople).toEqual(null);
  });
});
