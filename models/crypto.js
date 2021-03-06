// Require the info from orm file
var orm = require('../config/orm.js');

// Create an object for database
var coin = {
  //Select all table entries
  selectAll: function (cb) {
    orm.selectAll('currency', function (res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays
  insertOne: function (cols, vals, cb) {
    orm.insertOne('currency', cols, vals, function (res) {
      cb(res);
    });
  },

  // The objColVals is an object specifying columns as object keys with associated values
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne('currency', objColVals, condition, function (res) {
      cb(res);
    });
  }
};

// Export the database functions
module.exports = coin;