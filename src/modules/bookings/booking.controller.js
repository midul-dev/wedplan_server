import { createBookingInDB, getAllBookingsFromDB } from "./booking.service.js";

export const getBookings = async (req, res) => {
  try {
    const bookings = await getAllBookingsFromDB();
    res.status(200).json({ success: true, data: bookings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createBookings = async (req, res, next) => {
  try {
    const result = await createBookingInDB(req.body);
    res.status(201).json({ status: true, data: result });
  } catch (error) {
    next(error);
  }
};
