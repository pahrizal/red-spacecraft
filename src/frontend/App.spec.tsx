import App from "./App";
import { render, screen } from "./utils/test-setup";

describe("App renders correctly", () => {
  it("have the Star Wars logo", () => {
    render(<App />);
    const el = screen.getAllByAltText("Star Wars Logo");
    expect(el).toHaveLength(1);
  });

  it("have the Search input", () => {
    render(<App />);
    const el = screen.getAllByPlaceholderText(
      "Search people on the Star Wars canon universe!"
    );
    expect(el).toHaveLength(1);
  });
});