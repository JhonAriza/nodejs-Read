import { Router } from "express";
import { methods as solicitudController } from "../controllers/solicitud.controller";

const router = Router();



router.get("/", solicitudController.getSolicituds);
router.get("/:id", solicitudController.getSolicitud);
router.post("/", solicitudController.addSolicitud);
router.put("/:id", solicitudController.updateSolicitud);
router.delete("/:id", solicitudController.deleteSolicitud);
export default router;
