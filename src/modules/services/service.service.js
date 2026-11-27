import { getDB } from "../../config/db.js"


export const getAllServicesFromDB = async (vendorId) => {
    const db = getDB()
    const query = {}

    if(vendorId){
        query.vendorId = vendorId
    }

    const result = await db.collection("services").find(query).toArray()
    return result
}

export const createServiceInDB = async (serviceData) => {
    const db = getDB()
    const result = await db.collection("services").insertOne({...serviceData, createdAt : new Date(), status: "pending", isActive: true})
    return result
}