import { Request, Response } from "express";
import Swapi from "../../swapi";
import { Planet } from "../../swapi/schema";

class PlanetController {
  async getById(req: Request<{ id: number }>, res: Response<Planet>) {
    const result = await Swapi.getPlanetById(req.params.id);
    if (!result) return;
    res.json(result);
  }
  async getAll(req: Request, res: Response) {
    const peoples = await Swapi.getAllSwapiPeople();
    // get all planets from peoples planet urls (remove duplicate)
    const urls = [...new Set(peoples.map((p) => p.homeworld))];
    const results = await Swapi.getPlanetByUrls(urls);
    res.json(results);
  }
}

export default new PlanetController();
