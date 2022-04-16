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
    const el = screen.getAllByText("Scanning the universe, please wait...");
    expect(el).toHaveLength(1);
  });
});
