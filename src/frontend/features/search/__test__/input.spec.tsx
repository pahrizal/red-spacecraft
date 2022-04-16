import { act } from "react-dom/test-utils";
import { People } from "../../../../backend/swapi/schema";
import { fireEvent, render, screen, waitFor } from "../../../utils/test-setup";
import { initialAppState } from "../../redux";
import configureStore from "../../redux/config";
import SearchInput from "../input";

describe("SearchInput", () => {
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

  it("should render correctly", () => {
    render(<SearchInput />);
    // there is an input element
    const inputEl = screen.getByTestId("search-input");
    expect(inputEl).toBeDefined();
  });

  it("dispatch searchPeople action onChange", () => {
    render(<SearchInput />, { initialState, store });
    const inputEl: HTMLInputElement = screen.getByTestId("search-input");
    expect(inputEl).toBeDefined();
    fireEvent.change(inputEl, { target: { value: "sky" } });
    expect(inputEl.value).toBe("sky");
    expect(store.getState().search.query).toEqual("sky");
    // there is a list of results
    const resultsEl = screen.getByTestId("search-results");
    expect(resultsEl).toBeDefined();
    // there is a list item
    const listItems = screen.getAllByTestId("search-item");
    expect(listItems.length).toBe(2);
    // list item should have the correct text
    expect(listItems[0].textContent).toBe(people.name);
  });

  it("highlight first item on arrow down", async () => {
    render(<SearchInput />, { initialState, store });
    let inputEl: HTMLInputElement = screen.getByRole("searchbox");
    expect(inputEl).toBeDefined();
    fireEvent.change(inputEl, { target: { value: "sky" } });
    expect(inputEl.value).toBe("sky");
    expect(store.getState().search.query).toEqual("sky");

    // there is a list of results
    const resultsEl = screen.getByTestId("search-results");
    expect(resultsEl).toBeDefined();

    // there is a list item
    const listItems = screen.getAllByTestId("search-item");
    expect(listItems.length).toBe(2);

    // list item should have the correct text
    expect(listItems[0].textContent).toBe(people.name);

    // trigger arrow down
    fireEvent.keyDown(inputEl, {
      key: "ArrowDown",
    });

    // at this point, the highlighted item should be the first item
    expect(
      screen.getAllByTestId("search-item")[0].classList.contains("highlighted")
    ).toBe(true);
  });

  it("clear searchbox and close dropdown on escape key", () => {
    render(<SearchInput />, { initialState, store });
    let inputEl: HTMLInputElement = screen.getByRole("searchbox");
    expect(inputEl).toBeDefined();
    fireEvent.keyDown(inputEl, { key: "Escape" });
    expect(inputEl.value).toBe("");
    expect(store.getState().search.query).toEqual("");
    // search result container should be closed
    expect(screen.queryByTestId("search-results")).toBeNull();
  });

  it("select highlighted people on Enter key", async () => {
    render(<SearchInput />, { initialState, store });
    let inputEl: HTMLInputElement = screen.getByRole("searchbox");
    expect(inputEl).toBeDefined();
    fireEvent.change(inputEl, { target: { value: "sky" } });
    expect(inputEl.value).toBe("sky");
    expect(store.getState().search.query).toEqual("sky");

    // there is a list of results
    const resultsEl = screen.getByTestId("search-results");
    expect(resultsEl).toBeDefined();

    // there is a list item
    const listItems = screen.getAllByTestId("search-item");
    expect(listItems.length).toBe(2);

    // list item should have the correct text
    expect(listItems[0].textContent).toBe(people.name);

    // should highlight first item when pressing arrow down
    fireEvent.keyDown(inputEl, {
      key: "ArrowDown",
    });
    expect(
      screen.getAllByTestId("search-item")[0].classList.contains("highlighted")
    ).toBe(true);

    // trigger enter key
    fireEvent.keyDown(inputEl, { key: "Enter" });

    // should dispatch highlighted people as selected to redux search store
    expect(store.getState().search.selected).toEqual(people);
  });
});
