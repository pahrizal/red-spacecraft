import expresss from "express";
import PlanetController from "./controller";
const router = expresss.Router();

router.get("/planet", PlanetController.getAll);
router.get("/planet/:id", PlanetController.getById);

export default router;
