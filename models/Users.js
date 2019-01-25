const mongoose = require('mongoose');

const { Schema } = mongoose;

const UsersSchema = new Schema({
  user_name: {
    type: String,
    required: true,
  },
  actual_name: {
    forename: {
      type: String,
    },
    surname: {
      type: String,
    },
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('users', UsersSchema);
