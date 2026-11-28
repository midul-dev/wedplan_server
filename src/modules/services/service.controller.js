import { ObjectId } from "mongodb";
import {
  createServiceInDB,
  deleteServiceFormDB,
  detailServiceFromDB,
  getAllServicesFromDB,
  toggleUpdateServiceinDB,
  updateServiceInDB,
} from "./service.service.js";

export const getServices = async (req, res) => {
  try {
    const { vendorId, isActive } = req.query;
    const services = await getAllServicesFromDB(vendorId, isActive);
    res.status(200).json({ success: true, data: services });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const createService = async (req, res, next) => {
  try {
    const result = await createServiceInDB(req.body);
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};


export const detailService = async (req, res) => {
  const {id} = req.params
  const service = await detailServiceFromDB(id)
  if (!service) {
      return res.status(404).json({ success: false, message: "Service not found" });
    }

    res.status(200).json({
      success: true,
      data: service,
    });
}


export const updatedService = async (req, res) => {
 try {
   const { id } = req.params;
  const updatedService = req.body;
  const result = await updateServiceInDB(id, updatedService);

  if (result.matchedCount === 0) {
    return res
      .status(404)
      .json({ success: false, message: "Service not found" });
  }

  res.status(200).json({
    success: true,
    message: "Service availability updated",
    data: result,
  });
 } catch (error) {
  res.status(500).json({
      success: false,
      message: error.message || "Failed to update service",
    });
 }
};


export const toggleUpdateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { isActive } = req.body;
    if (!ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid service ID" });
    }

    const result = await toggleUpdateServiceinDB(id, Boolean(isActive));

    if (result.matchedCount === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Service not found" });
    }

    res.status(200).json({
      success: true,
      message: "Service availability updated",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Failed to update service",
    });
  }
};

export const deleteService = async (req, res) => {
try {
   const {id} = req.params
 const result = await deleteServiceFormDB(id)

 if(result.deletedCount === 0){
  return res
        .status(404)
        .json({ success: false, message: "Service not found" });
    }

    res.status(200).json({
      success: true,
      message: "Service availability updated",
      data: result,
    });
} catch (error) {
  res.status(500).json({
      success: false,
      message: error.message || "Failed to update service",
    });
}
 }

