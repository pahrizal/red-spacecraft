import expresss from "express";
import FilmsController from "./controller";
const router = expresss.Router();

router.get("/films", FilmsController.getAll);
router.get("/films/:id", FilmsController.getById);

export default router;
