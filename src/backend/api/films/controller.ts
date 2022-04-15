import { Request, Response } from "express";
import Swapi from "../../swapi";
import { Film } from "../../swapi/schema";

class FilmsController {
  async getById(req: Request<{ id: number }>, res: Response<Film>) {
    const result = await Swapi.getFilmsById(req.params.id);
    if (!result) return;
    res.json(result);
  }
  async getAll(req: Request, res: Response<Film[]>) {
    const peoples = await Swapi.getAllSwapiPeople();
    // flatten species url from peoples
    const filmUrls = peoples.reduce(
      (acc: string[], cur) => acc.concat(cur.films),
      []
    );
    // remove duplicate
    const urls = [...new Set(filmUrls)];
    // prepare results
    const results = await Swapi.getFilmsByUrls(urls);
    res.json(results);
  }
}

export default new FilmsController();
