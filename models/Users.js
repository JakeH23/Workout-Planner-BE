const mongoose = require('mongoose');

const { Schema } = mongoose;

const UsersSchema = new Schema({
  user_name: {
    type: String,
    required: true,
  },
  actual_name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isFemale: {
    type: Boolean,
    required: true,
  }
});

module.exports = mongoose.model('users', UsersSchema);
