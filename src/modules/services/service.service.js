import { getDB } from "../../config/db.js"


export const getAllServicesFromDB = async () => {
    const db = getDB()
    const result = await db.collection("services").find().toArray()
    return result
}

export const createServiceInDB = async (serviceData) => {
    const db = getDB()
    const result = await db.collection("services").insertOne({...serviceData, createAt : new Date(),})
    return result
}