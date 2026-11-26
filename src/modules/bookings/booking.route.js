import { Router } from "express";
import { createBookings, getBookings } from "./booking.controller.js";


const router = Router()

router.get("/", getBookings)
router.post("/", createBookings)

export const bookingRoutes = router;