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



  const Print = await collection.find().toArray();        // Printing all documents in my collection
  const Justin = await collection.find({name: "Justin"}).toArray();     // All documents with name Justin



  
  const count = await collection.count();       // Number of documents in my collection
  const Greater18 = await collection.find({age: {$gt: 18}}).toArray();      // Documents with age > 18




  const allNames = await collection.find({}, { projection: { name: 1, _id: 0 } }).toArray();    // Displaying only names
  const Kenya = await collection.find({location: "Kenya"}).toArray();       // Display those with Kenya location



  const Male = await collection.find({Sex: 'M'}).toArray();                 // Display all males
  const LessOrEq = await collection.find({age: {$lte: 13}}).toArray();      // Display those with age <= 13
  
  const Ascending = await collection.find().sort({ age: 1 }).toArray();     // In ascending order
  const onlyNameAndAge = await collection.find({}, {projection: {name: 1, age: 1, _id: 0}}).toArray();



  console.log(onlyNameAndAge);

}

