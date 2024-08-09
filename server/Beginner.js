const { MongoClient } = require('mongodb');

const host = 'mongodb://localhost:27017'; 



async function main() {
  const client = new MongoClient(host);

  try {
    await client.connect();
    console.log('Connected to MongoDB!');
    await performCRUDOperations(client);
  } 

  finally {
    await client.close();
  }
}



main().catch(console.error);



async function performCRUDOperations(client) {
  const db = client.db('Practice');               // Same as use Practice
  const documents = await db.collection('Flacko').find().toArray();     // Same as db.Flacko.find()
  console.log(documents);

}

