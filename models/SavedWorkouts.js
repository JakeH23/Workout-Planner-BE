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
    type: String,
  },
  Exercises: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'exercises',
  },
  created_by: {
    type: String,
  },
});

module.exports = mongoose.model('saved_workouts', SavedWorkoutSchema);