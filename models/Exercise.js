const mongoose = require('mongoose');

const { Schema } = mongoose;

const ExerciseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  major_muscle: {
    type: String,
    required: true,
  },
  minor_muscles: {
    type: [String],
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  content: {
    type: String,
    required: true,
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
});

module.exports = mongoose.model('exercises', ExerciseSchema);
