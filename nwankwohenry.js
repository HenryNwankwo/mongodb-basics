
/*A node Js file that creates a database named
 after my slack username(nwankwohenry) */

var MongoClient = require('mongodb').MongoClient;
var insertingDoc = require('./interns');
var findingInternsDoc = require('./findInterns');
var updatingDoc = require('./updateInterns');


//Creating a URL of the database named after my slack username
var url = "mongodb://localhost:27017/";
var client = new MongoClient(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
const myDatabaseName = 'nwankwohenry';
//Connecting client to mongo service
client.connect((err)=>{

    if(err) throw err;
    console.log('Database created by nwankwohenry');
    var myDatabase = client.db(myDatabaseName);
    
    // Inserting some ocuments into  the database
    insertingDoc(myDatabase, function (result) {
        
        console.log(result);
                
    });

    // finding some parts of the collection and printing it out
    findingInternsDoc(myDatabase, function (result) {        
        console.log(result);
        
    });
    // updating the database collection           
    updatingDoc(myDatabase, function (result) {
        console.log(result);
        client.close();

    });
});
