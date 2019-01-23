const mongoose = require("mongoose");

const { Schema } = mongoose;

const WorkoutSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: "exercises" }],
  created_at: {
    type: Date,
    default: Date.now()
  },
  private: {
    type: Boolean,
    required: true
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  }
});

module.exports = mongoose.model("workouts", WorkoutSchema);
