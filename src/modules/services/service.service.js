import { ObjectId } from "mongodb"
import { getDB } from "../../config/db.js"


export const getAllServicesFromDB = async (vendorId, isActive) => {
    const db = getDB()
    const query = {}

    if(vendorId){
        query.vendorId = vendorId
    }
    if(isActive !== undefined){
        query.isActive = isActive === "true"
    }

    const result = await db.collection("services").find(query).toArray()
    return result
}

export const createServiceInDB = async (serviceData) => {
    const db = getDB()
    const result = await db.collection("services").insertOne({...serviceData, createdAt : new Date(), status: "pending", isActive: true})
    return result
}

export const detailServiceFromDB = async (id) => {
    const db = getDB()
    return await db.collection("services").findOne({_id: new ObjectId(id)})
}

export const updateServiceInDB = async (id, updatedService) => {
    const db = getDB()
    return await db.collection("services").updateOne({_id: new ObjectId(id)}, {$set: {...updatedService, updatedAt: new Date()}})
}

export const toggleUpdateServiceinDB = async (id, isActive) => {
    const db = getDB()
    const result = await db.collection("services").updateOne({_id: new ObjectId(id)}, {$set: {isActive, updatedAt : new Date()}})
    return result
}

export const deleteServiceFormDB = async (id) => {
const db = getDB()
return await db.collection("services").deleteOne({_id: new ObjectId(id)})
}