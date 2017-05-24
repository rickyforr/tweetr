"use strict";




// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      console.log(db)

        db.collection('tweets').insertOne(newTweet);
        callback(null, true);

    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
    db.collection('tweets').find().toArray(callback);
    }

  };
getTweets((err, tweets) => {
    if (err) throw err;

    for (let tweet of tweets) {

    }
  });

}

