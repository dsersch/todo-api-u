const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost/todo-api', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongo DB server')
    }
    console.log('Connected to Mongo DB Server')
    db.close();
})