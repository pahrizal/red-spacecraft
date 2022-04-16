import { apiActions } from "./action";

describe("API redux action", () => {
  it("calling fetchAllPeople should call the backend api endpoint /api/person", () => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    const fetchSpy = jest.spyOn(require("../../utils/fetch"), "Fetch");
    fetchSpy.mockResolvedValue([{ name: "Luke Skywalker" }]);
    fetchSpy.mockRejectedValue(new Error("Error fetching peoples"));
    apiActions.fetchAllPeople()(dispatch, getState);
    expect(fetchSpy).toBeCalledWith("/api/person");
  });

  it("calling fetchPeopleById should call the backend api endpoint /api/person/:id", () => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    const fetchSpy = jest.spyOn(require("../../utils/fetch"), "Fetch");
    fetchSpy.mockResolvedValue([{ name: "Luke Skywalker" }]);
    fetchSpy.mockRejectedValue(new Error("Error fetching peoples"));
    apiActions.fetchPeopleById(1)(dispatch, getState);
    expect(fetchSpy).toBeCalledWith("/api/person/1");
  });
});
