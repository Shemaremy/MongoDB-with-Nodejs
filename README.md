# MongoDB-with-Nodejs
Trying to connect them



1. I created a server folder and installed :
    - npm init -y
    - npm install mongodb
    - npm install express



2. Created an index.js to establish connection





## Key codes to know:

### Getting started with creating a database named Practice and collection named Flacko

MongoDB:
-------

use Practice;
db.createCollection("Flacko");


Js
--

const db = client.db('Practice');  
await db.collection('Flacko').createCollection("Flacko");
