const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

//For middleware
app.use(cors());
app.use(express.json());

//user: adminp1
//pass: Yr27Pt9uyC6YALCw

const uri =
  "mongodb+srv://adminp1:Yr27Pt9uyC6YALCw@cluster0.bkro6ln.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const userConnection = client.db('FruitsExpress').collection('users');
    const user = {name: 'Mehedy Miraz', email: 'miraz@cricketer.com'};
    const result = await userConnection.insertOne(user)
console.log(`User inserted with id ${result.insertedId}`)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Look mama!! I can declare Mongodbir kochu this");
});

app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
