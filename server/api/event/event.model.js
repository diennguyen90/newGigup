'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventSchema = new Schema({
  name: String,
  type: String,
  time: Date,
  address: String,
  description: String

});

module.exports = mongoose.model('Event', EventSchema);