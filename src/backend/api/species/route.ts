import expresss from "express";
import SpeciesController from "./controller";
const router = expresss.Router();

router.get("/species", SpeciesController.getAll);
router.get("/species/:id", SpeciesController.getById);

export default router;
