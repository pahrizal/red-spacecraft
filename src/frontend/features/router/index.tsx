import { Link, Route, Routes } from "react-router-dom";
import { ROUTES, tRoutes } from "./definition";

const Router = () => {
  return (
    <Routes>
      {Object.keys(ROUTES).map((key) => (
        <Route
          key={key}
          path={ROUTES[key as tRoutes].path}
          element={ROUTES[key as tRoutes].component}
        />
      ))}
      <Route
        path="*"
        element={
          <div className="flex flex-col w-screen h-screen justify-center items-center">
            <h1>Did you lost?</h1>
            <Link
              className="outline-none mt-4 border border-slate-100 px-4 py-2 hover:bg-slate-500 focus:bg-slate-500"
              to="/"
            >
              Let's go back home
            </Link>
          </div>
        }
      />
    </Routes>
  );
};

export default Router;
