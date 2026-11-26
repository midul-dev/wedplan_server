import { createServiceInDB, getAllServicesFromDB } from "./service.service.js";

export const getServices = async (req, res) => {
  try {
    const services = await getAllServicesFromDB();
    res.status(200).json({ success: true, data: services });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createService = async (req, res, next) => {
  try {
    const result = await createServiceInDB(req.body);
    res.status(201).json({ status: true, data: result });
  } catch (error) {
    next(error);
  }
};
