import { getDB } from "../../config/db.js"


export const getAllBookingsFromDB = async () => {
    const db = getDB()
    const result = await db.collection("bookings").find().toArray()
    return result
}

export const createBookingInDB = async (bookingData) => {
    const db = getDB()
    const result = await db.collection("bookings").insertOne({...bookingData, createAt : new Date(),})
    return result
}