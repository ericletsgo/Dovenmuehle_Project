const { MongoClient } = require('mongodb');

// Writing to database
const insertString = function(input, callback) {
  MongoClient.connect('mongodb://localhost/DovenmuehleDB', function(
    err,
    client,
  ) {
    const db = client.db('DovenmuehleDB');
    const collection = db.collection('Strings');
    if (err) {
      callback(err);
    } else {
      collection.insertOne(
        {
          string: input,
        },
        function(error, res) {
          if (error) callback(error);
          else callback(null, res);
        },
      );
    }
    client.close();
  });
};

// Fetching from database
const getStrings = function(callback) {
  MongoClient.connect('mongodb://localhost/DovenmuehleDB', function(
    err,
    client,
  ) {
    const db = client.db('DovenmuehleDB');
    const collection = db.collection('Strings');
    if (err) {
      callback(err, null);
    } else {
      collection.find().toArray(function(error, items) {
        if (error) {
          callback(error, null);
        } else {
          callback(null, items);
          client.close();
        }
      });
    }
    client.close();
  });
};

module.exports.insertString = insertString;
module.exports.getStrings = getStrings;
