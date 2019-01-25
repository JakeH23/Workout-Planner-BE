const mongoose = require('mongoose');

const { Schema } = mongoose;

const SavedWorkoutSchema = new Schema({
  saved_on: {
    type: Date,
    default: Date.now,
  },
  saved_by: {
    type: String,
  },
  workout: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'workouts',
    required: true,
  },
  created_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  created_by: {
    type: String,
  },
});

module.exports = mongoose.model('saved_workouts', SavedWorkoutSchema);