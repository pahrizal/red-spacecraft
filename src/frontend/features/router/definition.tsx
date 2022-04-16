import React from "react";
import Home from "../home";
import Person from "../person";

interface RouterData {
  path: string;
  component: JSX.Element;
}
export type tRoutes = "home" | "person";
export const ROUTES: { [key in tRoutes]: RouterData } = {
  home: {
    path: "/",
    component: <Home />,
  },
  person: {
    path: "/person/:id",
    component: <Person />,
  },
};
