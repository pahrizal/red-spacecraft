import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { initialAppState } from "../features/redux";
import configureStore from "../features/redux/config";

function render(ui: React.ReactElement, options?: RenderOptions) {
  const store = configureStore(initialAppState);
  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

export * from "@testing-library/react";
export { render };
