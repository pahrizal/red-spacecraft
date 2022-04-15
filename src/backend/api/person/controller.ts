import { Request, Response } from "express";
import Swapi from "../../swapi";

class PersonController {
  async getById(req: Request<{ id: number }>, res: Response) {
    const people = await Swapi.getSwapiPeople(req.params.id);
    res.json(people);
  }
  async getAll(req: Request, res: Response) {
    const peoples = await Swapi.getAllSwapiPeople();
    res.json(peoples);
  }
}

export default new PersonController();
