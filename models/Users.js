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
  completed_workouts: [
    { type: Schema.Types.ObjectId, ref: 'completed_workouts', default: [] },
  ],
  saved_workouts: [{ type: Schema.Types.ObjectId, ref: 'workouts', default: [] }],
});

module.exports = mongoose.model('users', UsersSchema);
