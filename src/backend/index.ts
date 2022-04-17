import bodyParser from "body-parser";
import express, { NextFunction, Request, Response } from "express";
import path from "path";
import FilmsRoute from "./api/films/route";
import PersonRoute from "./api/person/route";
import PlanetRoute from "./api/planet/route";
import SpeciesRoute from "./api/species/route";
import "dotenv/config";

const STATIC_BUILD_DIR = path.join(process.cwd() + "/build");
const PORT = process.env.PORT || 3001;

const app = express();

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// serve API endpoints
app.use(
  "/api",
  (req: Request, res: Response, next: NextFunction) => {
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    next();
  },
  [PersonRoute, PlanetRoute, SpeciesRoute, FilmsRoute]
);

app.use(express.static(STATIC_BUILD_DIR));
app.get("/*", (req, res) => {
  res.sendFile(path.join(STATIC_BUILD_DIR, "index.html"));
});

// start express server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

export default app;
