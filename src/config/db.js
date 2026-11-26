import { MongoClient } from "mongodb";
import "dotenv/config";

const client = new MongoClient(process.env.DB_URI);
/** @type {import("mongodb").Db} */
let db;

export const connectDB = async () => {
  if (db) return db;

  try {
    await client.connect();
    db = client.db("wedplan");
    console.log("MongoDB Connected!");
    return db;
  } catch (error) {
    console.error("DB Connection Failed:", error);
    process.exit(1);
  }
};

export const getDB = () => {
  if (!db) {
    throw new Error("Database not initialized. Call connectDB() first.");
  }
  return db;
};