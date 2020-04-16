var updateDoc = function (myDatabase, callback) {

    const updatingDoc = myDatabase.collection('myMovies');
    const query = { movie: "The Banker" };
    
    updatingDoc.findOneAndUpdate(
        query,
        { $set:
            {
                movie: "Alita the battle Angel",
                year: "2020",
                rating: 9
            }
        },
        {
            
            returnNewDocument: true,
            
        }
         );
        
         
        updatingDoc.find({}).toArray(function (err, result) {
                if (err) throw err;
                console.log('THE UPDATED COLLECTION IS BELOW: ');
                callback(result);

            });        

}

module.exports = updateDoc;