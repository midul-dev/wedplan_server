import { getAllUsersFromDB, createUserInDB } from "./user.service.js";

export const getUsers = async (req, res) => {
  try {
    const users = await getAllUsersFromDB();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const result = await createUserInDB(req.body);
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};