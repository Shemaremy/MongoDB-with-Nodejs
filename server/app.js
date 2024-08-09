const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; 

async function main() {
  const client = new MongoClient(uri);

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
  const db = client.db('mydatabase'); // Replace with your database name
  const collection = db.collection('mycollection'); // Replace with your collection name

  // CREATE
  await collection.insertOne({ name: 'John Doe', age: 30 });
  console.log('Inserted a document into the collection');


  // READ
  const documents = await collection.find().toArray();
  console.log('Found documents:', documents);


  // UPDATE
  await collection.updateOne({ name: 'John Doe' }, { $set: { age: 31 } });
  console.log('Updated a document in the collection');



  // DELETE
  await collection.deleteOne({ name: 'John Doe' });
  console.log('Deleted a document from the collection');

}
