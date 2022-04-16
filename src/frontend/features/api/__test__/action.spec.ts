import { apiActions } from "../action";

const fetchSpy = jest.spyOn(require("../../../utils/fetch"), "Fetch");
const dispatch = jest.fn();
const getState = jest.fn();

describe("API redux action", () => {
  it("calling fetchAllPeople should call the backend api endpoint /api/person", () => {
    apiActions.fetchAllPeople()(dispatch, getState);
    expect(fetchSpy).toBeCalledWith("/api/person");
  });

  it("calling fetchPeopleById should call the backend api endpoint /api/person/:id", () => {
    apiActions.fetchPeopleById(1)(dispatch, getState);
    expect(fetchSpy).toBeCalledWith("/api/person/1");
  });
});
