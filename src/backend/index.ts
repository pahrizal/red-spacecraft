import bodyParser from "body-parser";
import express from "express";
import path from "path";
import PersonRoute from "./api/person/route";
import PlanetRoute from "./api/planet/route";
import SpeciesRoute from "./api/species/route";
import FilmsRoute from "./api/films/route";

const BUILD_DIR = path.join(process.cwd() + "/build");
const PORT = process.env.PORT || 3001;

const app = express();

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// serve API endpoints
app.use("/api", [PersonRoute, PlanetRoute, SpeciesRoute, FilmsRoute]);

// serve static files from frontend build folder
app.use(express.static(BUILD_DIR));
app.get("/*", (req, res) => {
  res.sendFile(path.join(BUILD_DIR, "index.html"));
});

// start express server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
