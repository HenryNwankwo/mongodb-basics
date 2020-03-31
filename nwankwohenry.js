
/*A node Js file that creates a database named
 after my slack username(nwankwohenry) */

var mongoClient = require('mongodb').MongoClient;

//Creating a URL of the database named after my slack username
var url = "mongodb://localhost:27017/nwankwohenry";

//Connecting client to mongo service
mongoClient.connect(url, (err, db)=>{

    if(err) throw err;

    console.log('Database created by nwankwohenry');
    db.close();

});
