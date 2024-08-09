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


    
    collection.updateOne({name: "Chriss"}, {$set: {location: "Burundi"}});      // Set location to Burundi
    collection.deleteOne({name: "Smith"});                                      // Deleted Smith's document




    const AgeBetween = await collection.find({age: {$gt: 18, $lt: 30}}).toArray();      // Those with age btn 18 & 30
    const summation = await collection.aggregate([{ $group: {_id: null, TotalAge: { $sum: "$age" }}}]).toArray();   // Age summation





    const Average = await collection.aggregate([{ $group: {_id: null, AvgAge: { $avg: "$age" }}}]).toArray();   // Age average
    await collection.updateMany({}, {$set: {Occupation: "Student"}});           // Added occupation to each document



    

    const MaxAge = await collection.aggregate([{$sort:{age: -1}}, {$limit: 1}]).toArray();      // Finding maximum age
    const MinAge = await collection.aggregate([{$sort:{age: 1}}, {$limit: 1}]).toArray();      // Finding minimum age
    

    const notUSA = await collection.find({location: {$ne: "USA"}}).toArray();    // Those with not USA location
    const countFemales = await collection.count({Sex:"F"});                     // Count Females

    const SecondMaxAge = await collection.aggregate([{$sort: {age: -1}}, {$limit: 2}, {$skip: 1}]).toArray();   // Document with second max age


    console.log(SecondMaxAge);
}

