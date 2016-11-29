const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  data: {
    type: Schema.Types.Mixed
  }
});

schema.plugin(timestamps);
schema.plugin(uniqueValidator);

module.exports = mongoose.model('Project', schema);
