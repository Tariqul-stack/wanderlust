const express = require('express')
const dotenv = require('dotenv')
const cors = require("cors")
dotenv.config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;

const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json()) 

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    const db = client.db("wanderlust")
    const destinationCollection = db.collection("destinations")

    app.post('/destination', async (req, res) => {
      const destinationData = req.body
      const result = await destinationCollection.insertOne(destinationData)
      res.json(result)
    })

    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB!");

  } catch(err) {
    console.log(err);
  }
}

run();

app.get('/', (req, res) => {
  res.send("Server is running fine!!")
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})