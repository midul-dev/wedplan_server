import { Router } from "express";
import { createService, deleteService, getServices, toggleUpdateStatus, updatedService } from "./service.controller.js";


const router = Router()

router.get("/", getServices)
router.post("/", createService)
router.patch("/:id", toggleUpdateStatus)
router.put("/:id", updatedService)
router.delete("/:id", deleteService)

export const serviceRoutes = router;
