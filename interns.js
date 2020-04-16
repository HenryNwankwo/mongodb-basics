
/*A node Js file that connects to a database 
and creates a collection named Interns 
*/


//Inserting  into myMovies collection
var insertingDoc = function (myDatabase, callback) {
    var myMoviesObj = [{
        movie: "The Banker",
        year: "2020",
        rating: 8
    }, {
        movie: "Bad Boys",
        year: "2020",
        rating: 7
    }, {
        movie: "The Hunt",
        year: "2020",
        rating: 7
    }, {
        movie: "Bloodshot",
        year: "2020",
        rating: 7.5
    }, {
        movie: "First Cow",
        year: "2020",
        rating: 6.5
    }];
    
    myDatabase.createCollection('myMovies', (err, result)=>{
        if(err) throw err;
        console.log('COLLECTION CREATED');
        
        const collection = myDatabase.collection('myMovies');

        collection.insertMany(myMoviesObj, (err, result) => {

            if (err) throw err;

            callback(result);

        });

    });
    

}
module.exports = insertingDoc;