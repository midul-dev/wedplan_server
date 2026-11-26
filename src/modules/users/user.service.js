import { getDB } from "../../config/db.js";

export const getAllUsersFromDB = async () => {
  const db = getDB();
  return await db.collection("user").find().toArray();
};

export const createUserInDB = async (userData) => {
  const db = getDB();
  return await db.collection("users").insertOne(userData);
};