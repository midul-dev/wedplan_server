import { Router } from "express";
import { createService, getServices } from "./service.controller.js";


const router = Router()

router.get("/", getServices)
router.post("/", createService)

export const serviceRoutes = router;