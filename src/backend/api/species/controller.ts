import { Request, Response } from "express";
import Swapi from "../../swapi";
import { Planet, Species } from "../../swapi/schema";

class SpeciesController {
  async getById(req: Request<{ id: number }>, res: Response<Species>) {
    const result = await Swapi.getSpeciesById(req.params.id);
    if (!result) return;
    res.json(result);
  }
  async getAll(req: Request, res: Response) {
    const peoples = await Swapi.getAllSwapiPeople();
    // flatten species url from peoples
    const speciesUrls = peoples.reduce(
      (acc: string[], cur) => acc.concat(cur.species),
      []
    );
    // remove duplicate
    const urls = [...new Set(speciesUrls)];
    // prepare results
    const results = await Swapi.getSpeciesByUrls(urls);
    res.json(results);
  }
}

export default new SpeciesController();
