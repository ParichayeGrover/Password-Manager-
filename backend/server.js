const { MongoClient, ObjectId } = require("mongodb");
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')

require('dotenv').config()
const app = express()
const port = 3000
app.use(bodyparser.json())
app.use(cors())

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);


async function run() {
  try {
    await client.connect()

    // fetch all passwords 
    const db = client.db("passwordmanager");
    const col = db.collection("passwords");


    app.get('/', async (req, res) => {
      const getresult = await col.find({}).toArray();
      res.json(getresult);
      console.log("API called");
    });


    //saving passwords 
    app.post('/', async (req, res) => {
      let data = req.body;
      data={...data, id:new ObjectId().toString()};
      const getresult = await col.insertOne(data);
      res.send({ "success": true });
      console.log(getresult)
    })

    // app.delete('/',async (req,res)=>{

  app.delete('/:id',async(req,res)=>{
    const id = req.params.id;
    const result = await col.deleteOne({id})
    console.log(result)
    res.send({ "success": true });

  })



  } catch (e) {
    console.log(e);
  }
}

run();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
