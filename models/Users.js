const mongoose = require('mongoose');

const { Schema } = mongoose;

const UsersSchema = new Schema({
  user_name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  saved_workouts: [
    { type: Schema.Types.ObjectId, ref: 'completed_workouts', default: [] },
  ],
});

module.exports = mongoose.model('users', UsersSchema);
