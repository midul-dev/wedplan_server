import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import { MongoClient } from 'mongodb'

const app = express()
const port = process.env.PORT || 5000

// Database
const client = new MongoClient(process.env.DB_URI);

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

await connectToMongoDB()

app.use(cors())
app.use(express.json())


app.get("/", (req, res) => {
    res.send("Welcome to WedPlan Server")
})

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})