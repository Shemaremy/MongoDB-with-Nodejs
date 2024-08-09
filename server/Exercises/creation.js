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
  const db = client.db('Practice2');
  const collection = db.collection('Flacko2');

  // Creating collection
  await collection.insertMany(
    [
        { name: 'Chriss', age: 18, location: "Rwanda", Sex: 'M' },
        { name: 'Justin', age: 24, location: "USA", Sex: 'M' },
        { name: 'Amina', age: 30, location: "Kenya", Sex: 'F' },
        { name: 'Smith', age: 13, location: "Ghana", Sex: 'M' }
    ]
  );

  console.log('Inserted a document into the collection');

}

