
/*A node Js file that connects to a database 
and creates a collection named Interns */

var myMongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

//Connecting the mongoClient to mongo service
myMongoClient.connect(url, (err, db)=>{

    if(err) throw err;
    
    myOwnDatabase = db.db('nwankwohenry');
    
    //Creating collection named Interns
    myOwnDatabase.createCollection("Interns", (err, res) => {

        if (err) throw err;

        console.log('Interns Collection Created');
        db.close();
    });

});