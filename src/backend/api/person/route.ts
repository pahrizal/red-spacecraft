import expresss from "express";
import PersonController from "./controller";
const router = expresss.Router();

router.get("/person", PersonController.getAll);
router.get("/person/:id", PersonController.getById);

export default router;
