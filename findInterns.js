var findingInternsDoc = function(myDatabase, callback){
    
    const findingDoc = myDatabase.collection('myMovies');

    //finding and returning the first document
    findingDoc.findOne({}, function (err, result) {
        if (err) throw err;                
        console.log('THE FIRST DOCUMENT OF THE COLLECTION IS BELOW: ');
        callback(result);

    });
    
    //finding movies with rating equals 7
    
    findingDoc.find({rating: 7}).toArray((err, result) => {
        if(err) throw err;
        console.log('THE MOVIES WITH RATING EQUAL 7 ARE BELOW: ');
        callback(result);
    });

    //finding and printing movie titles using projection
    findingDoc.find({}, {projection: {_id: 0, movie: 1}}).toArray((err, result) => {
                if (err) throw err;
                console.log('MOVIES TITLES ARE BELOW: ');
                callback(result);
            }

    );


}

module.exports = findingInternsDoc;

